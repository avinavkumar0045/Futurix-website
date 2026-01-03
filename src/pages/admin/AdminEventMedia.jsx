import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminEventMedia() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);

  /* ---------------- FETCH EVENTS ---------------- */
  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("id, title")
      .order("event_date", { ascending: false });

    if (!error) setEvents(data || []);
  }

  /* ---------------- FETCH MEDIA WHEN EVENT CHANGES ---------------- */
  useEffect(() => {
    if (selectedEvent) {
      fetchEventMedia(selectedEvent);
    } else {
      setMedia([]);
    }
  }, [selectedEvent]);

  async function fetchEventMedia(eventId) {
    const { data, error } = await supabase
      .from("event_media")
      .select("*")
      .eq("event_id", eventId)
      .order("created_at", { ascending: false });

    if (!error) setMedia(data || []);
  }

  /* ---------------- UPLOAD MEDIA ---------------- */
  async function uploadMedia() {
    if (!file || !selectedEvent) {
      alert("Select event and file");
      return;
    }

    setLoading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${selectedEvent}/${fileName}`;

      // 1️⃣ Upload to storage
      const { error: uploadError } = await supabase.storage
        .from("event-media")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2️⃣ Get public URL
      const { data: urlData } = supabase.storage
        .from("event-media")
        .getPublicUrl(filePath);

      // 3️⃣ Insert DB row
      const mediaType = file.type.startsWith("video") ? "video" : "image";

      const { error: dbError } = await supabase
        .from("event_media")
        .insert({
          event_id: selectedEvent,
          media_url: urlData.publicUrl,
          media_type: mediaType,
        });

      if (dbError) throw dbError;

      // Refresh gallery
      fetchEventMedia(selectedEvent);
      setFile(null);
      alert("Media uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err);
      alert(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  /* ---------------- DELETE MEDIA (ADMIN) ---------------- */
  async function deleteMedia(m) {
    if (!confirm("Delete this media?")) return;

    try {
      const filePath = m.media_url.split("/event-media/")[1];

      // 1️⃣ Remove from storage
      await supabase.storage
        .from("event-media")
        .remove([filePath]);

      // 2️⃣ Remove from DB
      await supabase
        .from("event_media")
        .delete()
        .eq("id", m.id);

      // 3️⃣ Update UI
      setMedia(prev => prev.filter(x => x.id !== m.id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete media");
    }
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a002b] p-10 text-white space-y-6">
      <h2 className="text-2xl font-bold">Upload Event Media</h2>

      {/* Event selector */}
      <select
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        className="w-full bg-black border border-white/20 p-3 rounded"
      >
        <option value="">Select Event</option>
        {events.map(e => (
          <option key={e.id} value={e.id}>
            {e.title}
          </option>
        ))}
      </select>

      {/* File input */}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="block"
      />

      {/* Upload button */}
      <button
        onClick={uploadMedia}
        disabled={loading}
        className="bg-cyan-500 px-6 py-2 rounded hover:bg-cyan-600 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Media"}
      </button>

      {/* MEDIA GRID + DELETE BUTTON */}
      {media.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {media.map(m => (
            <div
              key={m.id}
              className="relative group rounded-lg overflow-hidden border border-white/10"
            >
              {m.media_type === "image" ? (
                <img
                  src={m.media_url}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <video
                  src={m.media_url}
                  className="w-full h-40 object-cover"
                  controls
                />
              )}

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteMedia(m)}
                className="absolute top-2 right-2 
                           bg-red-500 hover:bg-red-600 
                           text-white text-xs px-2 py-1 rounded
                           opacity-0 group-hover:opacity-100 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

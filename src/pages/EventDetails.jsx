import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { getEventMedia } from "../../services/events";
import EventGallery from "../../components/events/EventGallery";

export default function EventDetails() {
  const { id } = useParams(); // ✅ route param
  const [event, setEvent] = useState(null);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1️⃣ Fetch event details
  useEffect(() => {
    if (!id) return;

    async function fetchEvent() {
      setLoading(true);

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setEvent(data);
      setLoading(false);
    }

    fetchEvent();
  }, [id]);

  // 2️⃣ Fetch event media
  useEffect(() => {
    if (!id) return;

    getEventMedia(id).then(res => {
      if (!res?.error) setMedia(res.data || []);
    });
  }, [id]);

  // 3️⃣ SAFE RENDER (NO WHITE SCREEN)
  if (loading) {
    return (
      <div className="text-white pt-28 px-6">
        Loading event...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-white pt-28 px-6">
        Event not found
      </div>
    );
  }

  // 4️⃣ FINAL UI
  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto text-white space-y-10">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-300">{event.description}</p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Event Gallery</h2>
        <EventGallery media={media} />
      </section>
    </div>
  );
}

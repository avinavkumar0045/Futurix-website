import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById, updateEvent } from "../../services/adminEvents";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    event_date: "",
    event_type: "upcoming",
  });

  useEffect(() => {
    loadEvent();
  }, []);

  async function loadEvent() {
    const { data, error } = await getEventById(id);

    if (error) {
      alert("Failed to load event");
      return;
    }

    setForm({
      title: data.title,
      description: data.description,
      event_date: data.event_date,
      event_type: data.event_type,
    });

    setLoading(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await updateEvent(id, form);

    if (error) {
      alert("Failed to update event");
      return;
    }

    navigate("/admin/events");
  }

  if (loading) {
    return <p className="text-gray-400">Loading event...</p>;
  }

  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-2xl font-bold text-white">Edit Event</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-6 rounded-xl space-y-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full bg-black/40 text-white p-3 rounded-lg outline-none"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full bg-black/40 text-white p-3 rounded-lg outline-none h-32"
          required
        />

        <input
          type="date"
          name="event_date"
          value={form.event_date}
          onChange={handleChange}
          className="w-full bg-black/40 text-white p-3 rounded-lg outline-none"
          required
        />

        <select
          name="event_type"
          value={form.event_type}
          onChange={handleChange}
          className="w-full bg-black/40 text-white p-3 rounded-lg outline-none"
        >
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition"
        >
          Update Event
        </button>
      </form>
    </div>
  );
}

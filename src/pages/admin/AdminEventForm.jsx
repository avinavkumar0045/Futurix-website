import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function AdminEventForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    event_date: "",
    event_type: "upcoming",
    cover_image: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("events").insert([form]);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/admin");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] text-white p-10">
      <h2 className="text-2xl font-bold mb-6">Create New Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10"
          required
        />

        <input
          type="date"
          name="event_date"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10"
          required
        />

        <select
          name="event_type"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10"
        >
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>

        <input
          name="cover_image"
          placeholder="Cover Image URL"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10"
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2 rounded-lg font-semibold"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

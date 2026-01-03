import { useEffect, useState } from "react";
import {
  createEvent,
  updateEvent,
} from "../../services/adminEvents";

const emptyForm = {
  title: "",
  description: "",
  event_date: "",
  event_type: "upcoming",
  image_url: "",
};

export default function EventForm({ existingEvent, onSuccess }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (existingEvent) setForm(existingEvent);
  }, [existingEvent]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (existingEvent) {
      await updateEvent(existingEvent.id, form);
    } else {
      await createEvent(form);
    }

    setForm(emptyForm);
    onSuccess();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 p-6 rounded-xl space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {existingEvent ? "Edit Event" : "Create Event"}
      </h2>

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 rounded bg-black/40"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 rounded bg-black/40"
      />

      <input
        type="date"
        name="event_date"
        value={form.event_date}
        onChange={handleChange}
        className="w-full p-2 rounded bg-black/40"
      />

      <select
        name="event_type"
        value={form.event_type}
        onChange={handleChange}
        className="w-full p-2 rounded bg-black/40"
      >
        <option value="upcoming">Upcoming</option>
        <option value="completed">Completed</option>
      </select>

      <input
        name="image_url"
        placeholder="Image URL"
        value={form.image_url}
        onChange={handleChange}
        className="w-full p-2 rounded bg-black/40"
      />

      <button className="bg-cyan-500 px-4 py-2 rounded">
        {existingEvent ? "Update" : "Create"}
      </button>
    </form>
  );
}

import { useEffect, useState } from "react";
import { getAllEvents, deleteEvent } from "../../services/adminEvents";
import { useNavigate } from "react-router-dom";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    const { data } = await getAllEvents();
    setEvents(data || []);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Delete this event?");
    if (!confirmDelete) return;

    await deleteEvent(id);
    loadEvents();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">
        All Events
      </h2>

      {events.length === 0 && (
        <p className="text-gray-400">
          No events found.
        </p>
      )}

      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between hover:bg-white/10 transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              {event.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {event.event_type} · {event.event_date}
            </p>
          </div>

          <div className="flex gap-4">

            <button
              onClick={() => handleDelete(event.id)}
              className="text-red-400 hover:text-red-300 transition"
            >
              Delete
            </button>

            <button
              onClick={() => navigate(`/admin/events/edit/${event.id}`)}
              className="text-cyan-400 hover:underline"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

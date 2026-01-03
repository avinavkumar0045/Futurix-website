import { useNavigate } from "react-router-dom";

export default function EventCard({ event, upcoming }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/events/${event.id}`)}
      className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400 transition"
    >
      {/* Cover Image */}
      {event.cover_image ? (
        <img
          src={event.cover_image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 w-full bg-white/10 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold">{event.title}</h3>

        <p className="text-sm text-gray-400">
          {new Date(event.event_date).toDateString()}
        </p>

        <p className="text-gray-300 text-sm line-clamp-3">
          {event.description}
        </p>

        {upcoming && (
          <span className="inline-block mt-2 text-xs text-cyan-400">
            Upcoming
          </span>
        )}
      </div>
    </div>
  );
}

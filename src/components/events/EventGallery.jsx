export default function EventGallery({ media }) {
  if (!media || media.length === 0) {
    return (
      <p className="text-gray-400">
        No media uploaded for this event.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {media.map(item => (
        <div
          key={item.id}
          className="rounded-lg overflow-hidden bg-white/5 border border-white/10"
        >
          {item.media_type === "image" ? (
            <img
              src={item.media_url}
              alt="Event media"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          ) : (
            <video
              src={item.media_url}
              controls
              className="w-full h-48 object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

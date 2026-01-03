import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { getEventMedia } from "../../services/events";
import EventGallery from "../../components/events/EventGallery";
import Skeleton from "../../components/Skeleton";


export default function EventDetails() {
  const { id } = useParams(); // 👈 MUST be "id"
  const [event, setEvent] = useState(null);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const { data: eventData } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      setEvent(eventData || null);

      const { data: mediaData } = await getEventMedia(id);
      setMedia(mediaData || []);

      setLoading(false);
    }

    if (id) load();
  }, [id]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="pt-28 px-6 text-white">
        Event not found
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto text-white space-y-12">

      <div>
        <h1 className="text-3xl font-bold">{event.title}</h1>
        <p className="text-gray-300 mt-3">
          {event.description}
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Event Gallery
        </h2>

        <EventGallery media={media} />
      </section>

    </div>
  );
}

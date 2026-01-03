import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import EventCard from "../../components/events/EventCard";

export default function Events() {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });

    if (!error && data) {
      setUpcoming(data.filter(e => e.event_type === "upcoming"));
      setPast(data.filter(e => e.event_type === "past"));
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading events...
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-28 px-6 max-w-7xl mx-auto text-white space-y-20">

      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.length > 0 ? (
            upcoming.map(event => (
              <EventCard key={event.id} event={event} upcoming />
            ))
          ) : (
            <p className="text-gray-400">No upcoming events</p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Previous Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {past.length > 0 ? (
            past.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-gray-400">No past events</p>
          )}
        </div>
      </section>

    </div>
  );
}

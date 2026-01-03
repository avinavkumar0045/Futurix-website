import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Events() {
  const [upcoming, setUpcoming] = useState([])
  const [past, setPast] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true })

      if (error) {
        console.error("Error fetching events:", error)
        return
      }

      setUpcoming(data.filter(e => e.event_type === "upcoming"))
      setPast(data.filter(e => e.event_type === "past"))
    }

    fetchEvents()
  }, [])

  const EventCard = ({ event }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      {event.cover_image && (
        <img
          src={event.cover_image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-400 mt-1">
          {new Date(event.event_date).toDateString()}
        </p>
        <p className="mt-3 text-gray-300">{event.description}</p>
      </div>
    </div>
  )

  return (
    <div className="px-6 md:px-16 py-14 text-white">
      <h1 className="text-3xl font-bold mb-10">Events</h1>

      {/* Upcoming */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        {upcoming.length === 0 && <p>No upcoming events</p>}
        <div className="grid md:grid-cols-3 gap-6">
          {upcoming.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Past */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Past Events</h2>
        {past.length === 0 && <p>No past events</p>}
        <div className="grid md:grid-cols-3 gap-6">
          {past.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}

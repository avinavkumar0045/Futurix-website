import { supabase } from "../lib/supabase";

/* Fetch all events */
export async function getAllEvents() {
  return await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: false });
}

/* Delete event */
export async function deleteEvent(id) {
  return await supabase
    .from("events")
    .delete()
    .eq("id", id);
}

/* Update event */
export async function updateEvent(id, data) {
  return await supabase
    .from("events")
    .update(data)
    .eq("id", id);
}

export async function getEventById(id) {
  return supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();
}
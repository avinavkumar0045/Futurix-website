import { supabase } from "../lib/supabase";

export async function getEventMedia(eventId) {
  const { data, error } = await supabase
    .from("event_media")
    .select("*")
    .eq("event_id", eventId)
    .order("created_at", { ascending: true });

  return { data, error };
}

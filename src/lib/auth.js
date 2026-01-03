import { supabase } from "./supabase";

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user ?? null;
}

export async function getUserProfile(userId) {
  return supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
}

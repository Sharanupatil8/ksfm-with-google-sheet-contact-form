import { supabase } from "./supabase";

export async function getBlogs() {
  const { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.error(error);
  }
  return { data, error };
}

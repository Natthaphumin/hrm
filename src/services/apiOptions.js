import supabase from "../utils/supabase";

export async function getOptions() {
  let { data, error } = await supabase.from("options").select("*");
  if (error) throw new Error("Options fail");

  return data;
}

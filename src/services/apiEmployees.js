import supabase from "../utils/supabase";

export async function getEmployees() {
  const { data, error } = await supabase.from("employees").select("*");

  if (error) {
    console.log(error);
    throw new Error("Employees could not be loaded");
  }

  console.log("apiEmployees " + data);

  return data;
}

import supabase from "../utils/supabase";

export async function getEmployees() {
  let { data: employees, error } = await supabase
    .from("employees")
    .select("id");

  if (error) throw new Error(error);
  console.log(employees);

  return employees;
}

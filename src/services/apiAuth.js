import supabase from "../utils/supabase";

// Signin
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

// Signup (user role)
export const signUp = async (email, password, role = "user") => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role }, // เก็บ role ใน user_metadata
    },
  });
  if (error) throw error;
  return data;
};

// Get current user role
export const getUserRole = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw error;

  console.log(user?.user_metadata);
  return user?.user_metadata?.role;
};

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

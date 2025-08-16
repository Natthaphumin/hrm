// features/auth/useUserRole.js
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

export function useUserRole() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    async function getRole() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setRole(user?.user_metadata?.role || null);
    }
    getRole();
  }, []);

  return role;
}

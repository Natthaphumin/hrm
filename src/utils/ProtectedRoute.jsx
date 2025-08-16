import supabase from "./supabase";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../ui/Spinner";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkRole = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        setIsAllowed(false);
      } else {
        const role = user.user_metadata.role;
        setIsAllowed(allowedRoles.includes(role));
      }
      setLoading(false);
    };

    checkRole();
  }, []);

  if (loading) return <Spinner />;
  if (!isAllowed) return <Navigate to="/" replace />;

  return children;
}

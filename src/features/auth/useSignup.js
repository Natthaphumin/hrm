import { useState } from "react";
import { signUp } from "../../services/apiAuth";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (email, password, role = "user") => {
    setLoading(true);
    setError(null);
    try {
      const data = await signUp(email, password, role);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { handleSignup, loading, error };
};

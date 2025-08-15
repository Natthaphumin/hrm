import { useState } from "react";
import { signIn } from "../../services/apiAuth";

export const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await signIn(email, password);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { handleSignin, loading, error };
};

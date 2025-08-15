import { useState } from "react";
import { useSignin } from "./useSignin";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../services/apiAuth";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignin, loading, error } = useSignin();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignin(email, password);
      const role = await getUserRole();
      console.log(role)
      if (role === "admin") navigate("/admin");
      else if (role === "mod") navigate("/mod");
      else navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Sign In"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

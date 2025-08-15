import { useState } from "react";
import { useSignup } from "./useSignup";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const { handleSignup, loading, error } = useSignup();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignup(email, password, role);
      alert("Signup successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Sign Up</h2>
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
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="mod">Moderator</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Sign Up"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

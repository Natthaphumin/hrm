import { useState } from "react";
import { useSignup } from "./useSignup";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";

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
    <Form onSubmit={onSubmit}>
      <FormRowVertical label="Email">
        <Input
          type="email"
          placeholder="Jason@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="mod">Moderator</option>
          <option value="admin">Admin</option>
        </Select>
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit" disabled={loading}>
          {loading ? <SpinnerMini /> : "Sign Up"}
        </Button>
      </FormRowVertical>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Form>
  );
}

import { useState } from "react";
import { useSignin } from "./useSignin";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../services/apiAuth";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignin, loading, error } = useSignin();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      await handleSignin(email, password);
      const role = await getUserRole();
      if (role === "admin") navigate("/admin");
      else if (role === "mod") navigate("/mod");
      else navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormRowVertical>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button
          size="large"
          variation="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Sign In"}
        </Button>
      </FormRowVertical>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </Form>
  );
}

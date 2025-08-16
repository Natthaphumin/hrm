import styled from "styled-components";
import SignupForm from "../features/auth/SignupForm";
import Heading from "../ui/Heading";

const SignUpLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-gray-100);
`;

function Signup() {
  return (
    <SignUpLayout>
      <Heading as="h1">Signup</Heading>
      <SignupForm />
    </SignUpLayout>
  );
}

export default Signup;

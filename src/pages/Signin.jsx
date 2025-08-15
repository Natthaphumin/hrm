import styled from "styled-components";

import SigninForm from "../features/auth/SigninForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-gray-100);
`;

function Signin() {
  return (
    <LoginLayout>
      <Heading>Signin</Heading>
      <SigninForm />
    </LoginLayout>
  );
}

export default Signin;

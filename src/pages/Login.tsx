import styled from 'styled-components';

import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

const LoginLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 45rem);
  justify-content: center;

  padding: 2rem 5rem 5rem 5rem;
  gap: 2rem;
  background-color: var(--color-grey-50);
  height: 100vh;

  & div {
    padding-bottom: 2rem;
  }

  & button {
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <div>
        <Logo />
        <LoginForm />
      </div>
    </LoginLayout>
  );
}

export default Login;

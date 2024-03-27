import styled from 'styled-components';

import Heading from '../ui/Heading';
import LoginForm from '../features/authentication/LoginForm';
import BlogHeader from '../ui/BlogHeader';

const LoginLayout = styled.div`
  display: grid;
  grid-template-columns: 50rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);
  height: 100vh;
`;

function Login() {
  return (
    <LoginLayout>
      <BlogHeader />
      <Heading as='h1'>Sign in</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;

import { FormEvent, useState } from 'react';
import { useLogin } from './useLogin';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, isPending: isLogging } = useLogin();

  const [emailErr, setEmailErr] = useState<string>('');
  const [passwordErr, setpasswordErr] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setEmailErr('This field is required.');
      return;
    }
    if (!password) {
      setpasswordErr('This field is required.');
      return;
    }

    login({ email, password });

    // reset
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as='h1'>Sign in</Heading>
      <FormRow label='Email' error={emailErr}>
        <Input
          type='email'
          id='title'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLogging}
          wideness='100%'
        />
      </FormRow>
      <FormRow label='Password' error={passwordErr}>
        <Input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLogging}
          wideness='100%'
        />
      </FormRow>
      <Button el='button' disabled={isLogging}>
        Sign in
      </Button>
    </Form>
  );
}

export default LoginForm;

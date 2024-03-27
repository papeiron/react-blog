import { FieldValues, useForm } from 'react-hook-form';

import { useUpdateUser } from '../authentication/useUpdateUser';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

function UpdateAccountForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;

  const { updateUser, isPending: isUpdating } = useUpdateUser();

  function onSubmit(data: FieldValues) {
    updateUser(data as { username: string; password: string });

    reset();
  }

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='Username'
        error={typeof errors?.username?.message === 'string' ? errors?.username?.message : ''}
      >
        <Input
          type='text'
          id='username'
          {...register('username', {
            required: 'This field is required.'
          })}
          disabled={isUpdating}
          wideness='100%'
        />
      </FormRow>
      <FormRow
        label='Password'
        error={typeof errors?.password?.message === 'string' ? errors?.password?.message : ''}
      >
        <Input
          type='password'
          id='password'
          {...register('password', {
            required: 'This field is required.'
          })}
          disabled={isUpdating}
          wideness='100%'
        />
      </FormRow>
      <FormRow
        label='Confirm password'
        error={
          typeof errors?.confirmPassword?.message === 'string'
            ? errors?.confirmPassword?.message
            : ''
        }
      >
        <Input
          type='password'
          id='confirmPassword'
          {...register('confirmPassword', {
            required: 'This field is required.',
            validate: (value) => value === getValues().password || 'Passwords not matching.'
          })}
          disabled={isUpdating}
          wideness='100%'
        />
      </FormRow>
      <Button el='button' disabled={isUpdating}>
        Change the password
      </Button>
    </Form>
  );
}

export default UpdateAccountForm;

import styled from 'styled-components';

import Heading from '../ui/Heading';
import UpdateAccountForm from '../features/settings/UpdateAccountForm';

const AccountLayout = styled.div`
  display: grid;
  grid-template-columns: 48rem;
  /* justify-content: center; */
`;

function Account() {
  return (
    <AccountLayout>
      <Heading as='h1'>Account settings</Heading>

      <Heading as='h3'>Update account</Heading>
      <UpdateAccountForm />
    </AccountLayout>
  );
}

export default Account;

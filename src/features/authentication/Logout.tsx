import { MdExitToApp } from 'react-icons/md';

import { useLogout } from './useLogout';

import ButtonIcon from '../../ui/ButtonIcon';
import styled from 'styled-components';

const Span = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  font-weight: 500;
`;

function Logout({ label }: { label?: string }) {
  const { logout, isPending: isLoggingOut } = useLogout();

  return (
    <ButtonIcon disabled={isLoggingOut} onClick={() => logout()}>
      <Span>
        <MdExitToApp />
        {label}
      </Span>
    </ButtonIcon>
  );
}

export default Logout;

import { MdExitToApp } from 'react-icons/md';

import { useLogout } from './useLogout';

import ButtonIcon from '../../ui/ButtonIcon';

function Logout() {
  const { logout, isPending: isLoggingOut } = useLogout();

  return (
    <ButtonIcon disabled={isLoggingOut} onClick={() => logout()}>
      <MdExitToApp />
    </ButtonIcon>
  );
}

export default Logout;

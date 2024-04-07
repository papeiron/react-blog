import { useNavigate } from 'react-router-dom';

import { RiUserSettingsLine } from 'react-icons/ri';

import ButtonIcon from '../../ui/ButtonIcon';

function UserSettings() {
  const navigate = useNavigate();

  return (
    <ButtonIcon onClick={() => navigate('/account')} aria-label='Go User Settings'>
      <RiUserSettingsLine />
    </ButtonIcon>
  );
}

export default UserSettings;

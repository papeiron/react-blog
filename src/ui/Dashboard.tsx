import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';

import { RiMailSettingsLine } from 'react-icons/ri';

const StyledLink = styled(Link)`
  display: block;
`;

function Dashboard() {
  return (
    <ButtonIcon>
      <StyledLink to='/dashboard' style={{ width: '100%', height: '100%' }}>
        <RiMailSettingsLine />
      </StyledLink>
    </ButtonIcon>
  );
}

export default Dashboard;

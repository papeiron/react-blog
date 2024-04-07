import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';

import { RiMailSettingsLine } from 'react-icons/ri';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  font-weight: 500;
`;

function Dashboard({ label }: { label?: string }) {
  return (
    <ButtonIcon>
      <StyledLink to='/dashboard' aria-label='Go Dashboard'>
        <RiMailSettingsLine />
        {label}
      </StyledLink>
    </ButtonIcon>
  );
}

export default Dashboard;

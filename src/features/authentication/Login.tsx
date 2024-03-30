import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonIcon from '../../ui/ButtonIcon';

import { HiOutlineUser } from 'react-icons/hi';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  font-weight: 500;
`;

function Login({ label }: { label?: string }) {
  return (
    <ButtonIcon>
      <span>
        <StyledLink to='/signin'>
          <HiOutlineUser /> {label}
        </StyledLink>
      </span>
    </ButtonIcon>
  );
}

export default Login;

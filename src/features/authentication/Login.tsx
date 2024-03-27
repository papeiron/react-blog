import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ButtonIcon from '../../ui/ButtonIcon';

import { HiOutlineUser } from 'react-icons/hi';

const StyledLink = styled(Link)`
  display: block;
`;

function Login() {
  return (
    <ButtonIcon>
      <StyledLink to='/signin'>
        <HiOutlineUser />
      </StyledLink>
    </ButtonIcon>
  );
}

export default Login;

import styled from 'styled-components';

import { IoMdClose } from 'react-icons/io';

import Logout from '../features/authentication/Logout';
import Login from '../features/authentication/Login';
import Dashboard from './Dashboard';
import { useUser } from '../features/authentication/useUser';
import { createPortal } from 'react-dom';
import ButtonIcon from './ButtonIcon';

const StyledResponsiveMenu = styled.ul`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  padding: 5rem 2rem;

  background-color: var(--color-grey-50);

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  & li {
    & button {
      width: 100%;
    }

    & p {
      position: absolute;
    }
  }
`;

const Line = styled.div`
  border-bottom: 1px solid var(--color-grey-300);
  margin-bottom: 2rem;
`;

type ResponsiveMenuType = {
  handleClose: () => void;
};

function ResponsiveMenu({ handleClose }: ResponsiveMenuType) {
  const { isAuthenticated } = useUser();

  return createPortal(
    <StyledResponsiveMenu>
      <ButtonIcon onClick={handleClose}>
        <IoMdClose />
      </ButtonIcon>

      <Line></Line>
      {isAuthenticated ? (
        <>
          <li>
            <Dashboard label='Dashboard' />
          </li>
          <li>
            <Logout label='Logout' />
          </li>
        </>
      ) : (
        <li>
          <Login label='Sign in' />
        </li>
      )}
    </StyledResponsiveMenu>,
    document.body
  );
}

export default ResponsiveMenu;

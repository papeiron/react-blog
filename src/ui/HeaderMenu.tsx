import styled from 'styled-components';

import UserSettings from '../features/settings/UserSettings';

import Logout from '../features/authentication/Logout';

const StyledHeaderMenu = styled.ul`
  display: flex;

  padding: 1.5rem 4rem;
  gap: 1.5rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  li {
    display: flex;

    border-radius: var(--border-radius-md);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-grey-50);
    }
  }
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <UserSettings />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

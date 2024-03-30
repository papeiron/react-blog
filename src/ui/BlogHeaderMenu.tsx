import styled from 'styled-components';

import { useUser } from '../features/authentication/useUser';

import Logout from '../features/authentication/Logout';
import Login from '../features/authentication/Login';
import Dashboard from './Dashboard';

const StyledBlogHeaderMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;

  padding: 1.5rem 3rem;
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

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

function BlogHeaderMenu() {
  const { isAuthenticated } = useUser();

  return (
    <>
      <StyledBlogHeaderMenu>
        {isAuthenticated ? (
          <>
            <li>
              <Dashboard />
            </li>
            <li>
              <Logout />
            </li>
          </>
        ) : (
          <li>
            <Login />
          </li>
        )}
      </StyledBlogHeaderMenu>
    </>
  );
}

export default BlogHeaderMenu;

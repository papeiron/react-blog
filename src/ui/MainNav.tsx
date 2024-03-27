import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { BsHouse } from 'react-icons/bs';
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdOutlineLocalPostOffice } from 'react-icons/md';

const StyledMainNav = styled.nav``;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-md);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-800);
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <NavLinks>
        <li>
          <StyledNavLink to='/dashboard'>
            <BsHouse />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/posts'>
            <MdOutlineLocalPostOffice />
            <span>Posts</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/tags'>
            <IoPricetagsOutline />
            <span>Tags</span>
          </StyledNavLink>
        </li>
      </NavLinks>
    </StyledMainNav>
  );
}

export default MainNav;

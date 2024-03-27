import styled from 'styled-components';

import MainNav from './MainNav';
import Logo from './Logo';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-200);

  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

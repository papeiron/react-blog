import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

const StyledHeader = styled.header`
  grid-area: header;
  background-color: var(--color-grey-0);
  display: flex;
  border-bottom: 1px solid var(--color-grey-200);
  justify-content: flex-end;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

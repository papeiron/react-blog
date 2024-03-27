import styled from 'styled-components';

import Logo from './Logo';
import BlogHeaderMenu from './BlogHeaderMenu';
import ResponsiveToggle from './ResponsiveToggle';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function BlogHeader() {
  return (
    <StyledHeader>
      <Logo />
      <BlogHeaderMenu />
      <ResponsiveToggle />
    </StyledHeader>
  );
}

export default BlogHeader;

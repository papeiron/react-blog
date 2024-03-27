import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const src = '/logo.png';

  return (
    <StyledLogo>
      <Link to='/'>
        <Img src={src} />
      </Link>
    </StyledLogo>
  );
}

export default Logo;

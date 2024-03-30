import styled from 'styled-components';

import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StyledFooter = styled.ul`
  padding-top: 7.5rem;

  border-top: 1px solid var(--color-grey-200);
`;

const FooterHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1.5rem;
`;

const SocialIcon = styled(Link)`
  /* background-color: var(--color-grey-200); */
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;

  & svg {
    width: 2.7rem;
    height: 2.7rem;
    color: var(--color-grey-400);
  }

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:hover svg {
    color: var(--color-grey-800);
  }
`;

const FooterMain = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterMenuItem = styled(Link)`
  &:hover {
    color: var(--color-grey-900);
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  background-color: var(--color-grey-900);
  padding: 1.5rem 0;
  color: var(--color-grey-100);

  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterHeader>
        <li>
          <SocialIcon to='/'>
            <FaFacebook />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon to='/'>
            <FaTwitter />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon to='/'>
            <FaInstagram />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon to='/'>
            <FaYoutube />
          </SocialIcon>
        </li>
      </FooterHeader>
      <FooterMain>
        <li>
          <FooterMenuItem to=''>Home</FooterMenuItem>
        </li>
        <li>
          <FooterMenuItem to=''>News</FooterMenuItem>
        </li>
        <li>
          <FooterMenuItem to=''>About</FooterMenuItem>
        </li>
        <li>
          <FooterMenuItem to=''>Contact Us</FooterMenuItem>
        </li>
        <li>
          <FooterMenuItem to=''>Policy</FooterMenuItem>
        </li>
      </FooterMain>
      <FooterBottom>
        <p>React Blog 2024</p>
      </FooterBottom>
    </StyledFooter>
  );
}

export default Footer;

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import ButtonIcon from './ButtonIcon';
import { IoMenu } from 'react-icons/io5';
import ResponsiveMenu from './ResponsiveMenu';

const StyledResponsiveMenu = styled.ul`
  display: none;
  position: absolute;

  right: 0;
  top: 0;
  padding: 1.5rem 3rem;

  @media screen and (max-width: 576px) {
    display: list-item;
  }
`;

const ResponsiveMenuToggleButton = styled(ButtonIcon)`
  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

function ResponsiveToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledResponsiveMenu>
      <ResponsiveMenuToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenu />
      </ResponsiveMenuToggleButton>
      {isOpen && <ResponsiveMenu handleClose={handleClose} />}
    </StyledResponsiveMenu>
  );
}

export default ResponsiveToggle;

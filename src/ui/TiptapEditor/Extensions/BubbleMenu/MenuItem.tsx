import { ReactNode } from 'react';
import styled from 'styled-components';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const StyledMenuItem = styled.button`
  border: none;
  /* padding: 0.4rem; */
  width: 35px;
  height: 35px;
  color: var(--color-grey-700);

  cursor: pointer;
  background-color: inherit;

  &:hover {
    background-color: #f5f0f0;
  }

  &:active {
    background-color: #ebe7e7;
  }

  & svg {
    display: block;
    margin: 0 auto;
  }
`;

const StyledTippy = styled(Tippy)`
  width: 100%;
  height: 100%;
`;

type MenuItemProps = {
  children: ReactNode;
  popup?: string;
  onClick?: () => void;
  className?: string;
};

function MenuItem({ children, popup, onClick, className }: MenuItemProps) {
  return (
    <StyledTippy content={popup}>
      <StyledMenuItem type='button' onClick={onClick} className={className}>
        <div>{children}</div>
      </StyledMenuItem>
    </StyledTippy>
  );
}

export default MenuItem;

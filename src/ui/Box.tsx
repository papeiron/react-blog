import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.6rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;

  padding: 2.5rem 3rem;
  min-height: 17.5rem;
  display: flex;
  flex-direction: column;
`;

function Box({ children }: { children: ReactNode }) {
  return <StyledBox>{children}</StyledBox>;
}

export default Box;

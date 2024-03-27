import { ReactNode } from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import SoftText from './SoftText';

import { RiDeleteBin6Line } from 'react-icons/ri';

const StyledRiDeleteBin6Line = styled(RiDeleteBin6Line)`
  margin: 0 auto;

  height: 5rem;
  width: 5rem;
  color: var(--color-grey-500);
`;

const StyledDeleteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

function DeleteBox({ children }: { children: ReactNode }) {
  return (
    <StyledDeleteBox>
      <StyledRiDeleteBin6Line />
      <Heading as='h2'>Are you sure?</Heading>
      <SoftText>Do you really want to delete permanently?</SoftText>
      {children}
    </StyledDeleteBox>
  );
}

export default DeleteBox;

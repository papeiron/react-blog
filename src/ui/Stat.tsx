import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledStat = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  & > *:nth-of-type(2) {
    align-self: flex-end;
  }
`;

const Icon = styled.div`
  width: 8rem;
  position: absolute;
  top: -7rem;
  left: -1rem;
`;

const Title = styled.div`
  color: var(--color-grey-500);
  font-size: 1.4rem;
`;

const P = styled.p`
  color: ${(props) => (props.color ? `var(--color-${props.color}-700)` : 'black')};
  font-size: 2.5rem;
`;

type StatProps = {
  title: string;
  value: number;
  icon: ReactElement;
  color: string;
};

function Stat({ title, value, icon, color }: StatProps) {
  return (
    <StyledStat>
      <Icon>{icon}</Icon>
      <div>
        <Title>{title}</Title>
        <P color={color}>{value}</P>
      </div>
    </StyledStat>
  );
}

export default Stat;

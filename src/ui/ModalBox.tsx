import styled from 'styled-components';

type StyledBoxProps = {
  width?: string;
};

const ModalBox = styled.div<StyledBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width : '80%')};
  min-width: ${(props) => (props.width ? 'auto' : '700px')};
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-600);
  box-shadow: var(--shadow-md);
  padding: 4rem;
  max-height: 80%;
`;

export default ModalBox;

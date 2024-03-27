import styled from 'styled-components';

type InputProps = {
  wideness?: string;
};

const Input = styled.input<InputProps>`
  width: ${(props) => (props.wideness ? props.wideness : 'auto')};

  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem;

  &:focus {
    outline: none;
  }
`;

export default Input;

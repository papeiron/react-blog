import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;

  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  padding: 1rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:hover svg {
    color: var(--color-grey-00);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-grey-400);
  }
`;

export default ButtonIcon;

import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;

  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  padding: 0.6rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:hover svg {
    color: var(--color-grey-00);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-400);
  }
`;

export default ButtonIcon;

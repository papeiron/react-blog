import styled from 'styled-components';

const Form = styled.form`
  padding: 2.4rem 4rem;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
  font-size: 1.4rem;

  @media only screen and (max-width: 768px) {
    border: none;
    background-color: inherit;
  }
`;

export default Form;

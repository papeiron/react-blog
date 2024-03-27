import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledFormRow = styled.div`
  padding: 1.2rem 0;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-right: 1rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  margin-left: 1rem;
`;

type FormRowProps = {
  label?: string;
  error?: string;
  children: ReactNode;
};

function FormRow({ label, error, children }: FormRowProps) {
  return (
    <StyledFormRow>
      {label && React.isValidElement(children) && (
        <Label htmlFor={children.props.id}>{label}</Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;

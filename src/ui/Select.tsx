import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { Option } from '../types/types';

const StyledSelect = styled.select`
  font-size: 1.4 rem !important;
  position: relative;
  padding: 1rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 7px;
  color: black;
`;

type SelectProps = {
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

function Select({ options, onChange, value }: SelectProps) {
  return (
    <StyledSelect onChange={onChange} value={value}>
      {options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;

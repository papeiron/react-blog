import { useSearchParams } from 'react-router-dom';
import { ChangeEvent } from 'react';

import Select from './Select';
import { Option } from '../types/types';

type SortByProps = {
  options: Option[];
};

function SortBy({ options }: SortByProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} onChange={handleChange} value={sortBy} />;
}

export default SortBy;

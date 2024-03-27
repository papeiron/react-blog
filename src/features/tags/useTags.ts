import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { fetchTags } from '../../services/apiTags';

export function useTags(tagByPage?: number) {
  const [searchParams] = useSearchParams();

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'created_at-asc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { tags, count = 0 } = {},
    isPending,
    error
  } = useQuery({
    queryKey: ['tags', page, sortBy, tagByPage],
    queryFn: () => fetchTags({ page, sortBy, tagByPage })
  });

  return { tags, isPending, error, count };
}

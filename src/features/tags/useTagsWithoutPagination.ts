import { useQuery } from '@tanstack/react-query';

import { fetchTagsWithoutPagination } from '../../services/apiTags';

export function useTagsWithoutPagination() {
  const {
    data: tags,
    isPending,
    error
  } = useQuery({
    queryKey: ['tagsWP'],
    queryFn: fetchTagsWithoutPagination
  });

  return { tags, isPending, error };
}

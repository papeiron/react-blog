import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { fetchPosts } from '../../services/apiPosts';

export function usePosts(postByPage?: number) {
  const [searchParams] = useSearchParams();

  // SORT
  const sortByRaw = searchParams.get('sortBy') || 'created_at-asc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { postsWithTags: posts, count = 0 } = {},
    isPending,
    error
  } = useQuery({
    queryKey: ['posts', sortBy, page, postByPage],
    queryFn: () => fetchPosts({ sortBy, page, postByPage })
  });

  return { posts, isPending, error, count };
}

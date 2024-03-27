import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchPost as fetchPostApi } from '../../services/apiPosts';

export function usePost() {
  const { postName: slug } = useParams();

  const {
    data: post,
    isPending,
    error
  } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPostApi(slug as string)
  });

  return { post, isPending, error };
}

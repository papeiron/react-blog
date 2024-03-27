import { useQuery } from '@tanstack/react-query';
import { fetchPostTags } from '../../services/apiPosts';

export function useTag_Post() {
  const {
    data: tag_posts,
    isPending,
    error
  } = useQuery({
    queryKey: ['tag_posts'],
    queryFn: fetchPostTags
  });

  return { tag_posts, isPending, error };
}

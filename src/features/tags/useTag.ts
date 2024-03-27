import { useQuery } from '@tanstack/react-query';
import { fetchRelatedTag } from '../../services/apiTags';

export function useTag(postId: number) {
  const {
    data: relatedTags,
    isPending,
    error
  } = useQuery({
    queryKey: ['tag', postId],
    queryFn: () => fetchRelatedTag(postId)
  });

  return { relatedTags, isPending, error };
}

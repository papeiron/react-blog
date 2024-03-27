import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { addTags as addTagsApi } from '../../services/apiTags';

export function useAddTags() {
  const queryClient = useQueryClient();

  const {
    data: addedTags,
    isPending: isAdding,
    mutate: addTags
  } = useMutation({
    mutationFn: addTagsApi,
    onSuccess: () => {
      toast.success('New tag/tags successfully added.');
      queryClient.invalidateQueries({
        queryKey: ['tags']
      }),
        queryClient.invalidateQueries({
          queryKey: ['tagsWP']
        });
    },
    onError: (err) => toast.error(err.message)
  });

  return { addedTags, isAdding, addTags };
}

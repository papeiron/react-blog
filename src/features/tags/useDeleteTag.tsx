import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteTag as deleteTagApi } from '../../services/apiTags';

export function useDeleteTag() {
  const queryClient = useQueryClient();

  const { mutate: deleteTag, isPending } = useMutation({
    mutationFn: deleteTagApi,
    onSuccess: () => {
      toast.success('Tag successfully deleted.');
      queryClient.invalidateQueries({
        queryKey: ['tags']
      }),
        queryClient.invalidateQueries({
          queryKey: ['tagsWP']
        });
    },
    onError: () => {
      toast.error('An error occurred while deleting the tag.');
    }
  });

  return { deleteTag, isPending };
}

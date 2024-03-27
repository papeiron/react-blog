import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deletePost as deletePostApi } from '../../services/apiPosts';

export function useDeletePost() {
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending: isDeleting } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success('Post successfully deleted.');
      queryClient.invalidateQueries({
        queryKey: ['posts']
      });
    },
    onError: () => {
      toast.error('An error occurred while deleting the post.');
    }
  });

  return { deletePost, isDeleting };
}

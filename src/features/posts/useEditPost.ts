import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { editPost as editPostApi } from '../../services/apiPosts';

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: editPost, isPending: isPostEditing } = useMutation({
    mutationFn: ({ newEditPost, editPostId, tagIds }: any) =>
      editPostApi(newEditPost, editPostId, tagIds),
    onSuccess: () => {
      toast.success('Post succesfully edited.'),
        queryClient.invalidateQueries({
          queryKey: ['posts']
        });
      queryClient.invalidateQueries({
        queryKey: ['tag']
      });
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });
  return {
    editPost,
    isPostEditing
  };
}

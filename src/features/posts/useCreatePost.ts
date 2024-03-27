import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewPost as createNewPostApi } from '../../services/apiPosts';

import { newPostData } from '../../types/types';
import toast from 'react-hot-toast';

type mutateFcProps = {
  newPost: newPostData;
  tagIds: number[];
};

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: ({ newPost, tagIds }: mutateFcProps) => createNewPostApi(newPost, tagIds),
    onSuccess: () => {
      toast.success('New post successfully created.');
      queryClient.invalidateQueries({
        queryKey: ['posts']
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { createPost, isPending };
}

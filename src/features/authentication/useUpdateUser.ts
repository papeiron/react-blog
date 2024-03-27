import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUser as updateUserApi } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      //   queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('User data has been successfully updated.');
    },
    onError: (error) => toast.error(error.message)
  });

  return { updateUser, isPending };
}

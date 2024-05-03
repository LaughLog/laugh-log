import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase/app';

export const useDeleteBoard = (boardId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      organizationId,
      boardId
    }: {
      organizationId: string;
      boardId: string;
    }) => deleteDoc(doc(db, 'team', organizationId, 'board', boardId)),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['boardList'] });
      await deleteDoc(doc(db, 'text-editor', boardId));
    }
  });
};

export default useDeleteBoard;

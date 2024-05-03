import { useMutation, useQueryClient } from '@tanstack/react-query';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase/app';

export const useRenameBoard = ({
  organizationId,
  boardId
}: {
  organizationId: string;
  boardId: string;
}) => {
  const queryClient = useQueryClient();
  const docRef = doc(db, 'team', organizationId, 'board', boardId);

  return useMutation({
    mutationFn: (boardName: string) => updateDoc(docRef, { name: boardName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boardList'] });
    }
  });
};

export default useRenameBoard;

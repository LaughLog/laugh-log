import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection } from 'firebase/firestore';
import { format } from 'date-fns';

import { db } from '@/firebase/app';

export const useAddBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (organizationId: string) =>
      addDoc(collection(db, 'team', organizationId, 'board'), {
        name: format(new Date(), 'yyyy.MM.dd  hh:mm') + ' 회의록',
        date: format(new Date(), 'yyyy.MM.dd  hh:mm')
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boardList'] });
    }
  });
};

export default useAddBoard;

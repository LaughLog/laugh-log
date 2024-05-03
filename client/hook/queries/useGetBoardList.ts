import { db } from '@/firebase/app';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  DocumentData,
  getDocs,
  collection,
  QuerySnapshot
} from 'firebase/firestore';

const useGetBoardList = (organizationId: string) =>
  useSuspenseQuery<QuerySnapshot<DocumentData, DocumentData>>({
    queryKey: ['boardList', organizationId],
    queryFn: () => getDocs(collection(db, 'team', organizationId, 'board'))
  });

export default useGetBoardList;

import { useSuspenseQuery } from '@tanstack/react-query';
import {
  DocumentReference,
  DocumentData,
  getDoc,
  DocumentSnapshot
} from 'firebase/firestore';

const useGetBlocks = (
  textEditorRef: DocumentReference<DocumentData, DocumentData>
) =>
  useSuspenseQuery<DocumentSnapshot<DocumentData, DocumentData>>({
    queryKey: ['textEditorBlocks', textEditorRef],
    queryFn: () => getDoc(textEditorRef)
  });

export default useGetBlocks;

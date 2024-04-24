'use client';

import useGetBlocks from '@/hook/queries/useGetBlocks';
import EditablePage from './editablePage';
import { doc } from 'firebase/firestore';
import { db } from '@/firebase/app';
import { Block } from '@/types/textEditor';

const InitialBlocks = ({ children }: { children: React.ReactNode }) => {
  // Read Server Blocks
  const boardId = 'test1'; // 향후 query string으로 대체
  const textEditorRef = doc(db, 'text-editor', boardId);
  const { data } = useGetBlocks(textEditorRef);
  const initialBlocks: Block[] = data.data()?.updatedBlocks;

  return (
    <>
      {children}
      <EditablePage initialBlocks={initialBlocks} boardId={boardId} />
    </>
  );
};

export default InitialBlocks;

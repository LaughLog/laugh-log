'use client';

import { doc } from 'firebase/firestore';
import { useSearchParams } from 'next/navigation';

import { db } from '@/firebase/app';
import EditablePage from './editablePage';
import useGetBlocks from '@/hook/queries/useGetBlocks';
import { Block } from '@/types/textEditor';

const InitBlocks = () => {
  const params = useSearchParams();
  const boardId = params.get('id');
  const textEditorRef = doc(db, 'text-editor', boardId!);
  const { data } = useGetBlocks(textEditorRef);
  const initialBlocks: Block[] = data.data()?.updatedBlocks;

  return <EditablePage initialBlocks={initialBlocks} boardId={boardId!} />;
};

export default InitBlocks;

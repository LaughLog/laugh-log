'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/firebase/app';
import EditableBlock from './editableBlock';
import { SET_TIME } from '@/constants/textEditor';
import { Block, EditablePageProps } from '@/types/textEditor';

const EditablePage = ({ initialBlocks, boardId }: EditablePageProps) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  // useMutation + 디바운싱 (서버 상태 업데이트 비용 감소 ~
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);
  const { mutate: updateServerBlocks } = useMutation({
    mutationFn: (updatedBlocks: Block[]) =>
      updateDoc(doc(db, 'text-editor', boardId), { updatedBlocks })
  });

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(setTimeout(() => updateServerBlocks(blocks), SET_TIME.DEBOUNCE));
  }, [blocks]);
  // ~ 비용 감소)

  return (
    <>
      {blocks.map(block => (
        <EditableBlock
          key={block.id}
          blockId={block.id}
          blockContent={block.content}
          blockTag={block.tag}
          setBlocks={setBlocks}
        />
      ))}
    </>
  );
};

export default EditablePage;

'use client';

import { startTransition, useEffect, useState } from 'react';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

import EditableBlock from './editableBlock';
import { db } from '@/firebase/app';
import { uid } from '@/lib/utils';
import {
  AddBlockHandlerProps,
  DeleteBlockHandlerProps,
  Block
} from '@/types/textEditor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { start } from 'repl';

const EditablePage = ({
  initialBlocks,
  boardId
}: {
  initialBlocks: Block[];
  boardId: string;
}) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  // Update Server Blocks
  // useMutation과 디바운싱을 활용한 서버 상태 업데이트 비용 감소 ~
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);
  const { mutate: updateServerBlocks } = useMutation({
    mutationFn: (updatedBlocks: Block[]) =>
      updateDoc(doc(db, 'text-editor', boardId), { updatedBlocks })
  });

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(setTimeout(() => updateServerBlocks(blocks), 200));
  }, [blocks]);
  // ~ 비용 감소

  // 새로운 블록 추가 핸들러
  const addBlockHandler = (currentBlock: AddBlockHandlerProps) => {
    const newBlock = { id: uid(), html: currentBlock.newHtml, tag: 'p' };

    // 이전 블록 배열에 새로운 블록을 추가한 후 상태 업데이트
    setBlocks(prevBlocks => {
      const updatedBlocks = [...prevBlocks];
      let index = -1;

      // 해당 블록의 인덱스를 찾을 때까지 반복
      while (index === -1) {
        index = updatedBlocks.findIndex(block => block.id === currentBlock.id);
      }

      updatedBlocks.splice(index + 1, 0, newBlock);
      updatedBlocks[index].html = currentBlock.previousHtml;

      return updatedBlocks;
    });

    // 블록이 추가된 후 새로운 블록 포커스
    setTimeout(() => {
      (currentBlock.ref?.nextElementSibling as HTMLInputElement).focus();
    });
  };

  // 블록 삭제 핸들러
  const deleteBlockHandler = async (currentBlock: DeleteBlockHandlerProps) => {
    // 해당 블록을 제외한 blocks로 상태 업데이트
    setBlocks(prevBlocks => {
      const updatedBlocks = [
        ...prevBlocks.filter(block => block.id !== currentBlock.id)
      ];
      let index = -1;

      // 해당 블록의 인덱스를 찾을 때까지 반복
      while (index === -1) {
        index = updatedBlocks.findIndex(
          block => block.id === currentBlock.previousBlock.id
        );
      }

      updatedBlocks[index] = {
        ...updatedBlocks[index],
        html: updatedBlocks[index].html + currentBlock.content
      };

      return updatedBlocks;
    });
  };

  return (
    <>
      {blocks.map(block => (
        <EditableBlock
          key={block.id}
          block={block}
          addBlock={addBlockHandler}
          deleteBlock={deleteBlockHandler}
          setBlocks={setBlocks}
        />
      ))}
    </>
  );
};

// EditablePage 컴포넌트를 내보냅니다.
export default EditablePage;

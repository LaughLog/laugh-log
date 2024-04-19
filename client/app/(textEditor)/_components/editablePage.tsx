'use client';

import { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';

import EditableBlock from './editableBlock';
import useGetBlocks from '@/hook/queries/useGetBlocks';
import { db } from '@/firebase/app';
import { uid } from '@/lib/utils';
import {
  AddBlockHandlerProps,
  DeleteBlockHandlerProps,
  Block
} from '@/types/textEditor';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const EditablePage = ({ children }: { children: React.ReactNode }) => {
  // Read Server Blocks
  const boardId = 'test1'; // 향후 query string으로 대체
  const textEditorRef = doc(db, 'text-editor', boardId);
  const { data } = useGetBlocks(textEditorRef);
  const initialBlocks: Block[] = data.data()?.blocks;
  const [blocks, setBlocks] = useState(initialBlocks);

  // Update Server Blocks
  const queryClient = useQueryClient();
  const { mutateAsync: updateServerBlocks } = useMutation({
    mutationFn: () => setDoc(doc(db, 'text-editor', boardId), { blocks }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['textEditorBlocks'] });
    }
  });
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);

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

      return updatedBlocks;
    });

    // 블록이 추가된 후 새로운 블록 포커스
    setTimeout(() => {
      (currentBlock.ref?.nextElementSibling as HTMLInputElement).focus();
    });
  };

  // 블록 삭제 핸들러
  const deleteBlockHandler = (currentBlock: DeleteBlockHandlerProps) => {
    // 해당 블록을 제외한 blocks로 상태 업데이트
    setBlocks(prevBlocks => {
      return [...prevBlocks.filter(block => block.id !== currentBlock.id)];
    });
  };

  // 자동 저장
  const autoUpdateServerBlocks = () => {
    setTimer(
      setTimeout(async () => {
        await updateServerBlocks();
      }, 2000)
    );
  };

  // 디바운싱을 활용하여 한번만 서버 Update
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    autoUpdateServerBlocks();
  }, [blocks]);

  return (
    <>
      {children}
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

'use client';

import { useState } from 'react';

import { uid } from '@/lib/utils';
import EditableBlock from './editableBlock';
import {
  EditablePageProps,
  AddBlockHandlerProps,
  DeleteBlockHandlerProps
} from '@/types/textEditor';

const EditablePage = ({ initialBlocks }: EditablePageProps) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  // 새로운 블록 추가 핸들러
  const addBlockHandler = (currentBlock: AddBlockHandlerProps) => {
    const newBlock = { id: uid(), html: '', tag: 'p' };

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
    // 해당 블록을 제외한 나머지 블록으로 상태를 업데이트합니다.
    setBlocks(prevBlocks => [
      ...prevBlocks.filter(block => block.id !== currentBlock.id)
    ]);

    // 이전 블록으로 포커스를 이동합니다.
    setTimeout(() => currentBlock.previousBlock.focus());
  };

  return (
    <>
      <article className="mx-0 my-8 border-l-4 border-solid border-l-[#0f2e53] py-1 pl-2 pr-4">
        <h1 role="img" aria-label="greetings" className="pr-2">
          Hallo! 👋
        </h1>
        <p>
          <span className="rounded-s bg-orange-200 p-0.5">Enter</span> 키를 통해
          새로운 블록을 생성해 보세요.{' '}
          <span className="rounded-sm bg-orange-200 p-0.5">/</span> 기능은 향후
          추가될 예정입니다.
        </p>
      </article>

      {blocks.map(block => (
        <EditableBlock
          key={block.id}
          block={block}
          addBlock={addBlockHandler}
          deleteBlock={deleteBlockHandler}
        />
      ))}
    </>
  );
};

// EditablePage 컴포넌트를 내보냅니다.
export default EditablePage;

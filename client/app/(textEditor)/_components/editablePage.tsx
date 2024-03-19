'use client';

import { useState } from 'react';

import { uid } from '@/lib/utils';
import EditableBlock from './editableBlock';
import { EditablePageProps, addBlockHandlerProps } from '@/types/textEditor';

const EditablePage = ({ initialBlocks }: EditablePageProps) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  // 새로운 블록 추가 핸들러
  const addBlockHandler = (currentBlock: addBlockHandlerProps) => {
    const newBlock = { id: uid(), html: '', tag: 'p' };

    // 이전 블록 배열에 새로운 블록을 추가한 후 상태 업데이트
    setBlocks(prevBlocks => {
      const updatedBlocks = [...prevBlocks];
      const index = prevBlocks.findIndex(
        block => block.id === currentBlock.block.id
      );

      updatedBlocks.splice(index + 1, 0, newBlock);

      return updatedBlocks;
    });

    // 블록이 추가된 후 새로운 블록으로 포커스 설정
    setTimeout(() => {
      (currentBlock.ref.nextElementSibling as HTMLInputElement).focus();
    });
  };

  return (
    <>
      <p className="mx-0 my-8 border-l-4 border-solid border-l-[#0f2e53] py-1 pl-2 pr-4">
        Helloo{' '}
        <span role="img" aria-label="greetings" className="pr-2">
          👋
        </span>{' '}
        <span className="rounded-s bg-orange-200 p-0.5">Enter</span> 키를 통해
        새로운 블록을 생성해 보세요.{' '}
        <span className="rounded-sm bg-orange-200 p-0.5">/</span> 기능은 향후
        추가될 예정입니다.
      </p>

      {blocks.map((block, key) => (
        <EditableBlock
          key={key}
          block={block}
          setBlocks={setBlocks}
          addBlock={addBlockHandler}
        />
      ))}
    </>
  );
};

// EditablePage 컴포넌트를 내보냅니다.
export default EditablePage;

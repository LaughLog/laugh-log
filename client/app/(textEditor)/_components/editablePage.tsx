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

  return blocks.map(block => (
    <EditableBlock
      key={block.id}
      block={block}
      addBlock={addBlockHandler}
      deleteBlock={deleteBlockHandler}
      setBlocks={setBlocks}
    />
  ));
};

// EditablePage 컴포넌트를 내보냅니다.
export default EditablePage;

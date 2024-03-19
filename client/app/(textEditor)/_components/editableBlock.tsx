'use client';

import { useRef, useState, useEffect, KeyboardEvent } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

import { Block, EditableBlockProps } from '@/types/textEditor';

const EditableBlock = ({ block, setBlocks, addBlock }: EditableBlockProps) => {
  const id = block.id;
  const initialHtml = block.html;
  const initialTag = block.tag;

  const [html, setHtml] = useState(initialHtml);
  const [tag, setTag] = useState(initialTag);
  const [previousKey, setPreviousKey] = useState('');

  // ContentEditable 컴포넌트에 대한 참조
  const contentEditable = useRef<HTMLInputElement>(null);

  // block 조작으로 초기 HTML과 태그가 변경될 때마다 실행되는 useEffect 훅
  useEffect(() => {
    setHtml(initialHtml);
    setTag(initialTag);
  }, [initialHtml, initialTag]);

  // HTML 변경 핸들러
  const onChangeHandler = (e: ContentEditableEvent) => {
    setHtml(e.target.value);

    setBlocks((prevBlocks: Block[]) => {
      const index = prevBlocks.findIndex(prevBlocks => prevBlocks.id === id);
      const updatedBlocks = [...prevBlocks];

      updatedBlocks[index] = {
        ...updatedBlocks[index],
        html: e.target.value
      };

      return updatedBlocks;
    });
  };

  // 키 다운 이벤트 핸들러 함수를 정의합니다.
  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    // 엔터 키가 눌렸을 때 새로운 블록을 추가합니다.
    if (e.key === 'Enter') {
      if (previousKey !== 'Shift') {
        e.preventDefault();
        addBlock({ block, ref: contentEditable.current });
      }
    }

    setPreviousKey(e.key);
  };

  return (
    <ContentEditable
      className="mx-0 my-1 rounded bg-slate-50 p-2 hover:outline-[#f5f6fb]"
      innerRef={contentEditable}
      html={html}
      tagName={tag}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default EditableBlock;

'use client';

import { useRef, useState, KeyboardEvent } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

import { EditableBlockProps } from '@/types/textEditor';

const EditableBlock = ({
  block,
  addBlock,
  deleteBlock
}: EditableBlockProps) => {
  const [html, setHtml] = useState(block.html);
  const [tag, setTag] = useState(block.tag);
  const [previousKey, setPreviousKey] = useState('');

  // ContentEditable 컴포넌트에 대한 참조
  const contentEditable = useRef<HTMLInputElement>(null);

  // HTML 변경 핸들러
  const onChangeHandler = (e: ContentEditableEvent) => {
    setHtml(e.target.value);
    //updateBlock({ id: block.id, html, tag });
  };

  // 키 다운 이벤트 핸들러
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // 새로운 블록 추가
    if (e.key === 'Enter') {
      // 한글 key일 때 2번 입력되는 오류 방지
      if (e.nativeEvent.isComposing) return;

      // Shift + Enter 일 떄, block 안에서 줄 바꿈
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        addBlock({ id: block.id, ref: contentEditable.current });
      }
    }

    // 블록 삭제
    if (
      e.key === 'Backspace' &&
      ((e.nativeEvent.target as HTMLInputElement)?.innerHTML === '<br>' ||
        !(e.nativeEvent.target as HTMLInputElement)?.innerHTML)
    ) {
      const previousBlock = contentEditable.current?.previousElementSibling as
        | HTMLInputElement
        | undefined;

      // article 태그를 기준으로 가장 첫 번째 block 유지
      if (previousBlock && previousBlock.tagName !== 'ARTICLE') {
        deleteBlock({ id: block.id, previousBlock });
      }
    }
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

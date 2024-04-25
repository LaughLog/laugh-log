'use client';

import { useRef, useState, KeyboardEvent } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

import SelectMenu from './selectMenu';
import { EditableBlockProps } from '@/types/textEditor';
import { getCaretCoordinates } from '@/lib/utils';

const CMD_KEY = '/';

const EditableBlock = ({
  block,
  addBlock,
  deleteBlock
}: EditableBlockProps) => {
  const [html, setHtml] = useState(block.html);
  const [tag, setTag] = useState(block.tag);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectMenuPosition, setMenuPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: undefined,
    y: undefined
  });

  // ContentEditable 컴포넌트에 대한 참조
  const contentEditable = useRef<HTMLInputElement>(null);

  // HTML 변경 핸들러
  const onChangeHandler = (e: ContentEditableEvent) => {
    setHtml(e.target.value);
  };

  // 키 다운 이벤트 핸들러
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // 한글 key일 때 2번 입력되는 오류 방지
    if (e.nativeEvent.isComposing) return;

    // 새로운 블록 추가
    if (e.key === 'Enter') {
      // 새로운 박스 생성 전 menu close
      setMenuIsOpen(false);

      // 새로운 박스 생성 전 menu close
      setMenuIsOpen(false);

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

    // 블록 이동
    if (e.key === 'ArrowUp') {
      e.preventDefault();

      const currentBlock = contentEditable.current;
      const previousBlock = currentBlock?.previousElementSibling as
        | HTMLInputElement
        | undefined;

      // 이전 블록이 존재하고, article 태그가 아닌 경우에만 이동
      if (previousBlock && previousBlock.tagName !== 'ARTICLE') {
        const range = document.createRange();
        const selection = window.getSelection();

        // 기존 Selection의 range 삭제
        selection?.removeAllRanges();

        // 새로운 Range 객체에 대한 커서 위로 이동 후 새로운 range 추가
        range.selectNodeContents(previousBlock);
        range.collapse(false);
        selection?.addRange(range);

        previousBlock.focus();
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      const currentBlock = contentEditable.current;
      const nextBlock = currentBlock?.nextElementSibling as
        | HTMLInputElement
        | undefined;

      if (nextBlock) {
        const range = document.createRange();
        const selection = window.getSelection();

        // 기존 Selection의 range 삭제
        selection?.removeAllRanges();

        // 새로운 Range 객체에 대한 커서 아래로 이동 후 새로운 range 추가
        range.selectNodeContents(nextBlock);
        range.collapse(false);
        selection?.addRange(range);

        nextBlock.focus();
      }
    }
  };

  // 키 업 이벤트 핸들러
  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    // "/" 입력 시 새로운 menu open
    if (e.key === CMD_KEY) {
      openMenuHandler();
    } else setMenuIsOpen(false);
  };

  // 메뉴 open 핸들러
  const openMenuHandler = () => {
    const { x, y } = getCaretCoordinates();
    setMenuPosition({ x, y });
    setMenuIsOpen(true);
    document.addEventListener('click', closeMenuHandler);
  };

  // 메뉴 close 핸들러
  const closeMenuHandler = () => {
    setMenuPosition({ x: undefined, y: undefined });
    setMenuIsOpen(false);
    document.removeEventListener('click', closeMenuHandler);
  };

  const menuSelectionHandler = (selectedTag: string) => {
    setTag(selectedTag);
    closeMenuHandler();
  };

  return (
    <>
      {menuIsOpen && (
        <SelectMenu
          position={selectMenuPosition}
          onSelect={menuSelectionHandler}
        />
      )}
      <ContentEditable
        className="mx-0 my-1 rounded bg-slate-50 p-2 hover:outline-[#f5f6fb]"
        innerRef={contentEditable}
        html={html}
        tagName={tag}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        onKeyUp={onKeyUpHandler}
      />
    </>
  );
};

export default EditableBlock;

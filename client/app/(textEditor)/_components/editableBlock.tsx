'use client';

import { useRef, useState, useEffect } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

import { socket } from '@/socket/socket';
import SelectMenu from './selectMenu';
import { setCaretTo, uid } from '@/lib/utils/textEditor';
import { CMD_KEY, SET_TIME } from '@/constants/textEditor';
import {
  EditableBlockProps,
  BlockContentHandler,
  AddBlocksHandler,
  DeleteBlocksHandler,
  ChangeTagHandler,
  KeyEventHandler,
  MenuSelectionHandler
} from '@/types/textEditor';

const EditableBlock = ({
  blockId,
  blockContent,
  blockTag,
  setBlocks
}: EditableBlockProps) => {
  const [content, setContent] = useState(blockContent);
  const [tag, setTag] = useState(blockTag);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentEditable = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // socket events
  useEffect(() => {
    const addBlocksHandler: AddBlocksHandler = (id, previousHtml, newBlock) => {
      if (blockId === id) {
        setContent(previousHtml);
        setBlocks(pre => {
          const updatedBlocks = [...pre];
          let index = -1;

          // 해당 블록의 인덱스를 찾을 때까지 반복
          while (index === -1) {
            index = updatedBlocks.findIndex(block => block.id === id);
          }

          updatedBlocks.splice(index + 1, 0, newBlock);

          updatedBlocks[index].content = previousHtml;

          return updatedBlocks;
        });
      }
    };

    const deleteBlocksHandler: DeleteBlocksHandler = (
      deleteBlockId,
      previousBlockId,
      newContent
    ) => {
      if (blockId === previousBlockId) {
        if (newContent !== '') {
          setContent(newContent);
        }

        setBlocks(pre => {
          const updatedBlocks = [
            ...pre.filter(block => block.id !== deleteBlockId)
          ];

          if (newContent !== '') {
            let index = -1;

            while (index === -1) {
              index = updatedBlocks.findIndex(
                block => block.id === previousBlockId
              );
            }

            updatedBlocks[index] = {
              ...updatedBlocks[index],
              content: newContent
            };
          }

          return updatedBlocks;
        });
      }
    };

    const blockContentHandler: BlockContentHandler = (id, value) => {
      if (blockId === id) {
        setContent(value);
        setBlocks(pre => {
          const updatedBlocks = [...pre];
          const index = updatedBlocks.findIndex(block => block.id === id);

          if (index !== -1) {
            updatedBlocks[index] = {
              ...updatedBlocks[index],
              content: value
            };
          }

          return updatedBlocks;
        });
      }
    };

    const changeTagHandler: ChangeTagHandler = (id, tag) => {
      if (blockId === id) {
        menuSelectionHandler(tag);
        setBlocks(pre => {
          const updatedBlocks = [...pre];
          let index = -1;

          while (index === -1) {
            index = updatedBlocks.findIndex(block => block.id === id);
          }

          updatedBlocks[index] = {
            ...updatedBlocks[index],
            tag
          };

          return updatedBlocks;
        });
      }
    };

    socket.on('add-blocks', addBlocksHandler);
    socket.on('delete-blocks', deleteBlocksHandler);
    socket.on('set-block-content', blockContentHandler);
    socket.on('set-block-tag', changeTagHandler);

    setCaretTo('end', contentEditable.current);

    return () => {
      socket.off('add-blocks', addBlocksHandler);
      socket.off('delete-blocks', deleteBlocksHandler);
      socket.off('set-block-content', blockContentHandler);
      socket.off('set-block-tag', changeTagHandler);
    };
  }, []);

  // content 변경 핸들러
  const onChangeHandler = (e: ContentEditableEvent) => {
    const value = e.target.value;
    setContent(value);
    // 디바운스로 정확한 입력값 전달하기
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      socket.emit('set-block-content', blockId, value);
    }, SET_TIME.DEBOUNCE);
  };

  const onKeyDownHandler: KeyEventHandler = e => {
    // 한글 key일 때 2번 입력되는 오류 방지
    if (e.nativeEvent.isComposing) return;

    // 새로운 블록 추가
    if (e.key === CMD_KEY.ENTER) {
      // 새로운 박스 생성 전 menu close
      setIsMenuOpen(false);

      // Shift + Enter 일 떄, block 안에서 줄 바꿈
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        const element = contentEditable.current;
        const content = element?.innerHTML;
        const anchorIndex = window.getSelection()?.anchorOffset;
        const previousHtml = content?.substring(0, anchorIndex);
        const newHtml = content?.substring(anchorIndex!);

        if (previousHtml !== undefined && newHtml !== undefined) {
          const newBlock = { id: uid(), content: newHtml, tag: 'p' };

          socket.emit('add-blocks', blockId, previousHtml, newBlock);

          setTimeout(() => {
            (element?.nextElementSibling as HTMLInputElement).focus();
          }, SET_TIME.FOCUS_NEXT_EL);
        }
      }
    }

    // 블록 삭제
    if (e.key === CMD_KEY.BACKSPACE) {
      if (
        window.getSelection()?.anchorOffset === 0 &&
        !(
          (e.nativeEvent.target as HTMLInputElement)?.innerHTML === '<br>' ||
          !(e.nativeEvent.target as HTMLInputElement)?.innerHTML
        )
      ) {
        const element = contentEditable.current;
        const content = element?.innerHTML;
        const previousBlock = element?.previousElementSibling as
          | HTMLInputElement
          | undefined;

        if (
          previousBlock !== undefined &&
          previousBlock.tagName !== 'ARTICLE'
        ) {
          const newContent = previousBlock.innerHTML + content;

          if (content)
            socket.emit('delete-blocks', blockId, previousBlock.id, newContent);

          setTimeout(() => {
            // 이전 블록의 마지막 커서 위치 기억
            const offset = previousBlock.innerHTML.length;

            // 이전 블록의 마지막 커서 위치로 focus
            if (offset) {
              const range = document.createRange();
              const selection = window.getSelection();

              selection?.removeAllRanges();
              range.setStart(previousBlock.firstChild!, offset);
              range.setEnd(previousBlock.firstChild!, offset);
              selection?.addRange(range);
            } else {
              setCaretTo('start', previousBlock);
            }
          }, SET_TIME.FOCUS_PREVIOUS_EL);
        }
      }

      if (
        window.getSelection()?.anchorOffset === 0 &&
        ((e.nativeEvent.target as HTMLInputElement)?.innerHTML === '<br>' ||
          !(e.nativeEvent.target as HTMLInputElement)?.innerHTML)
      ) {
        e.preventDefault();

        const previousBlock = contentEditable.current
          ?.previousElementSibling as HTMLInputElement | undefined;

        // article 태그를 기준으로 가장 첫 번째 block 유지
        if (previousBlock && previousBlock.tagName !== 'ARTICLE') {
          socket.emit('delete-blocks', blockId, previousBlock.id, '');
          setCaretTo('end', previousBlock);
        }
      }
    }

    // 블록 이동
    if (e.key === CMD_KEY.ARROW_UP) {
      e.preventDefault();

      const currentBlock = contentEditable.current;
      const previousBlock = currentBlock?.previousElementSibling as
        | HTMLInputElement
        | undefined;

      // 이전 블록이 존재하고, article 태그가 아닌 경우에만 이동
      if (previousBlock && previousBlock.tagName !== 'ARTICLE') {
        setCaretTo('end', previousBlock);
      }
    }

    if (e.key === CMD_KEY.ARROW_DOWN) {
      e.preventDefault();

      const currentBlock = contentEditable.current;
      const nextBlock = currentBlock?.nextElementSibling as
        | HTMLInputElement
        | undefined;

      if (nextBlock) {
        setCaretTo('end', nextBlock);
      }
    }
  };

  const onKeyUpHandler: KeyEventHandler = e => {
    // 한글 key일 때 2번 입력되는 오류 방지
    if (e.nativeEvent.isComposing) return;

    // "/" 입력 시 새로운 menu open
    if (e.key === CMD_KEY.SLASH) {
      openMenuHandler();
    }
  };

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.addEventListener('click', closeMenuHandler);
    contentEditable.current?.blur();
  };

  const closeMenuHandler = () => {
    document.removeEventListener('click', closeMenuHandler);

    setTimeout(() => {
      if (contentEditable.current) {
        setCaretTo('end', contentEditable.current);
        setIsMenuOpen(false);
      }
    }, SET_TIME.FOCUS_CURRENT_EL);
  };

  const menuSelectionHandler: MenuSelectionHandler = selectedTag => {
    setTag(selectedTag);
    closeMenuHandler();
  };

  return (
    <>
      {isMenuOpen && (
        <SelectMenu
          id={blockId}
          setContent={setContent}
          onClose={closeMenuHandler}
        />
      )}
      <ContentEditable
        id={blockId}
        className="m-0 rounded px-2 py-1 outline-none hover:outline-[#f5f6fb]"
        innerRef={contentEditable}
        html={content}
        tagName={tag}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        onKeyUp={onKeyUpHandler}
      />
    </>
  );
};

export default EditableBlock;

'use client';

import { getCaretCoordinates } from '@/lib/utils';
import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction
} from 'react';

// menu 높이
const MENU_HEIGHT = 150;

// menu 목록
const menuItems = [
  {
    id: 'page-title',
    tag: 'h1',
    label: '제목 1'
  },
  {
    id: 'heading',
    tag: 'h2',
    label: '제목 2'
  },
  {
    id: 'subheading',
    tag: 'h3',
    label: '제목 3'
  },
  {
    id: 'paragraph',
    tag: 'p',
    label: '텍스트'
  }
];

const SelectMenu = ({
  setHtml,
  onSelect,
  onClose
}: {
  setHtml: Dispatch<SetStateAction<string>>;
  onSelect: (selectedTag: string) => void;
  onClose: () => void;
}) => {
  const { x, y } = getCaretCoordinates();
  const [menuStyle, setMenuStyle] = useState<{
    top: number | undefined;
    left: number | undefined;
  }>({ top: y! - MENU_HEIGHT, left: x });
  const [itemIndex, setItemIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.isComposing) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        onClose();
        onSelect(menuItems[itemIndex].tag);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevSelected =
          itemIndex === 0 ? menuItems.length - 1 : itemIndex - 1;
        setItemIndex(prevSelected);
      }

      if (e.key === 'ArrowDown' || e.key === 'Tab') {
        e.preventDefault();
        const nextSelected =
          itemIndex === menuItems.length - 1 ? 0 : itemIndex + 1;
        setItemIndex(nextSelected);
      }

      if (e.key === '/') {
        setHtml(pre => pre + e.key);
        setMenuStyle(pre => ({ ...pre, left: pre.left! + 10 }));
      }

      if (
        e.key !== 'Enter' &&
        e.key !== 'ArrowUp' &&
        e.key !== 'Tab' &&
        e.key !== 'ArrowDown' &&
        e.key !== '/'
      ) {
        onClose();
      }
    },
    [onClose, onSelect, itemIndex, setHtml]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="select-menu" style={menuStyle}>
      <div className="items">
        {menuItems.map((item, key) => {
          const isSelected = menuItems.indexOf(item) === itemIndex;

          return (
            <div
              className={isSelected ? 'selected' : undefined}
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(item.tag)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectMenu;

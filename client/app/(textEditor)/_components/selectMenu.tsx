'use client';

import { useState, useEffect, useCallback } from 'react';

import { socket } from '@/socket/socket';
import { getCaretCoordinates } from '@/lib/utils/textEditor';
import { CMD_KEY, MENU, MENU_ITEMS } from '@/constants/textEditor';
import { MenuKeyDownHandler, SelectMenuProps } from '@/types/textEditor';

const SelectMenu = ({ id, setContent, onClose }: SelectMenuProps) => {
  const [itemIndex, setItemIndex] = useState(0);
  const { x, y } = getCaretCoordinates();
  const [menuStyle, setMenuStyle] = useState<{
    top: number | undefined;
    left: number | undefined;
  }>({ top: y! - MENU.HEIGHT, left: x });

  const menuKeyDownHandler: MenuKeyDownHandler = useCallback(
    e => {
      if (e.isComposing) return;

      if (e.key === CMD_KEY.ENTER) {
        e.preventDefault();
        socket.emit('set-block-tag', id, MENU_ITEMS[itemIndex].tag);
      }

      if (e.key === CMD_KEY.ARROW_UP) {
        e.preventDefault();
        const prevSelected =
          itemIndex === 0 ? MENU_ITEMS.length - 1 : itemIndex - 1;
        setItemIndex(prevSelected);
      }

      if (e.key === CMD_KEY.ARROW_DOWN || e.key === CMD_KEY.TAB) {
        e.preventDefault();
        const nextSelected =
          itemIndex === MENU_ITEMS.length - 1 ? 0 : itemIndex + 1;
        setItemIndex(nextSelected);
      }

      if (e.key === CMD_KEY.SLASH) {
        setContent(pre => pre + e.key);
        setMenuStyle(pre => ({ ...pre, left: pre.left! + 10 }));
      }

      if (
        e.key !== CMD_KEY.ENTER &&
        e.key !== CMD_KEY.ARROW_UP &&
        e.key !== CMD_KEY.TAB &&
        e.key !== CMD_KEY.ARROW_DOWN &&
        e.key !== CMD_KEY.SLASH
      ) {
        onClose();
      }
    },
    [id, itemIndex, onClose, setContent]
  );

  useEffect(() => {
    document.addEventListener('keydown', menuKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', menuKeyDownHandler);
    };
  }, [menuKeyDownHandler]);

  return (
    <div className="select-menu" style={menuStyle}>
      <div className="items">
        {MENU_ITEMS.map((item, key) => {
          const isSelected = MENU_ITEMS.indexOf(item) === itemIndex;

          return (
            <div
              className={isSelected ? 'selected' : undefined}
              key={key}
              role="button"
              tabIndex={0}
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

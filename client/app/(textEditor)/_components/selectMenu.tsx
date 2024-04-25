'use client';

import { useState } from 'react';

//import { useState, useEffect } from 'react';
//import { matchSorter } from 'match-sorter';

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
  position,
  onSelect
}: {
  position: {
    x: number | undefined;
    y: number | undefined;
  };
  onSelect: (selectedTag: string) => void;
}) => {
  const x = position.x;
  const y = position.y! - MENU_HEIGHT;
  const positionAttributes = { top: y, left: x };

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className="select-menu" style={positionAttributes}>
      <div className="items">
        {menuItems.map((item, key) => {
          const isSelected = menuItems.indexOf(item) === selectedItemIndex;

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

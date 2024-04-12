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
  onSelect
}: {
  onSelect: (selectedTag: string) => void;
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <div>
        {menuItems.map((item, key) => {
          const isSelected = menuItems.indexOf(item) === selectedItemIndex;

          return (
            <div
              className={isSelected ? 'text-[aqua]' : undefined}
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

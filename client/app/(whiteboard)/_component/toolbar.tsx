'use client';

import { useState } from 'react';

// ICONS
import { MdOutlineHorizontalRule } from 'react-icons/md';
import {
  PiCursorFill,
  PiHandFill,
  PiSquareFill,
  PiDiamondFill,
  PiCircleFill,
  PiArrowRightBold,
  PiPencilSimpleLineFill,
  PiTextAaBold
} from 'react-icons/pi';

// CONSTANTS
import { TOOL, type ToolValueType, type MenuProps } from '@/constants/toolbar';

// COMPONENTS
import PostIt from './toolbar-component/PostIt';
import Stickers from './toolbar-component/stickers';
import MainTool from './toolbar-component/main-tool-container';
import { Canvas } from 'fabric/fabric-impl';

interface ToolbarProps {
  onSelect: React.Dispatch<React.SetStateAction<ToolValueType>>;
  onAddRect: (canvas: Canvas) => void;
  canvas: Canvas;
}

const Toolbar = ({ onSelect, onAddRect, canvas }: ToolbarProps) => {
  const menuConfig: MenuProps[] = [
    { name: TOOL.CLICK, icon: <PiCursorFill />, select: true },
    { name: TOOL.HAND, icon: <PiHandFill />, select: false },
    { name: TOOL.RECT, icon: <PiSquareFill />, select: false },
    { name: TOOL.DIA, icon: <PiDiamondFill />, select: false },
    { name: TOOL.CIRCLE, icon: <PiCircleFill />, select: false },
    { name: TOOL.ARROW, icon: <PiArrowRightBold />, select: false },
    { name: TOOL.LINE, icon: <MdOutlineHorizontalRule />, select: false },
    { name: TOOL.PEN, icon: <PiPencilSimpleLineFill />, select: false },
    { name: TOOL.TEXT, icon: <PiTextAaBold />, select: false }
  ];

  const [menu, setMenu] = useState(menuConfig);

  const clickIconboxHandler = (iconName: ToolValueType) => {
    setMenu(prev =>
      [...prev].map(item =>
        item.name === iconName
          ? { ...item, select: true }
          : { ...item, select: false }
      )
    );
    onSelect(iconName);
  };

  return (
    <div className="fixed bottom-[64px] left-[50%] h-[76px] w-[984px] translate-x-[-50%] overflow-hidden">
      <section className="actual-ceil rounded-2 absolute bottom-0 flex h-[50px] w-full border border-gray400 bg-white">
        <MainTool //
          menu={menu}
          canvas={canvas}
          onClick={clickIconboxHandler}
          onAddRect={onAddRect}
          canvas={canvas}
        />
        <PostIt />
        <Stickers />
      </section>
    </div>
  );
};

export default Toolbar;

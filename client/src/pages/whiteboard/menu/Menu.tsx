import { useState } from 'react';
import * as S from './Menu.style';
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
import { TOOL, ToolValueType } from 'constant/toolbox';

import PostIt from './postIt/PostIt';
import Stickers from '../stickers/Stickers';

import { selectedTool } from 'states/toolStates';
import { useSetAtom } from 'jotai';

const Menu = () => {
  type menuProps = { name: ToolValueType; icon: JSX.Element; select: boolean };

  const menuConfig: menuProps[] = [
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
  const setSelected = useSetAtom(selectedTool);

  const clickIconboxHandler = (iconName: ToolValueType) => {
    setMenu(prev =>
      prev
        .slice()
        .map(item =>
          item.name === iconName ? { ...item, select: true } : { ...item, select: false }
        )
    );
    setSelected(iconName);
  };

  return (
    <S.Container>
      <section className="actual-ceil">
        <S.MainToolsContainer>
          {menu.map(item =>
            item.select ? (
              <button className="icon-box select">{item.icon}</button>
            ) : (
              <button
                className="icon-box"
                data-name={item.name}
                onClick={() => clickIconboxHandler(item.name)}
              >
                {item.icon}
              </button>
            )
          )}
        </S.MainToolsContainer>
        <S.PostitContainer>
          <PostIt />
        </S.PostitContainer>
        <S.StickerContainer>
          <Stickers />
        </S.StickerContainer>
      </section>
    </S.Container>
  );
};

export default Menu;

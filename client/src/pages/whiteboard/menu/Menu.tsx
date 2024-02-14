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

const Menu = () => {
  type menuProps = { name: string; icon: JSX.Element; select: boolean };

  const menuConfig: menuProps[] = [
    { name: 'click', icon: <PiCursorFill />, select: true },
    { name: 'hand', icon: <PiHandFill />, select: false },
    { name: 'rect', icon: <PiSquareFill />, select: false },
    { name: 'dia', icon: <PiDiamondFill />, select: false },
    { name: 'circle', icon: <PiCircleFill />, select: false },
    { name: 'arrow', icon: <PiArrowRightBold />, select: false },
    { name: 'line', icon: <MdOutlineHorizontalRule />, select: false },
    { name: 'pen', icon: <PiPencilSimpleLineFill />, select: false },
    { name: 'text', icon: <PiTextAaBold />, select: false }
  ];

  const [menu, setMenu] = useState(menuConfig);

  const clickIconboxHandler = (iconName: string) => {
    setMenu(prev =>
      prev
        .slice()
        .map(item =>
          item.name === iconName ? { ...item, select: true } : { ...item, select: false }
        )
    );
  };

  return (
    <S.Container>
      <section className="actual-ceil">
        <S.primaryToolsContainer>
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
        </S.primaryToolsContainer>
      </section>
    </S.Container>
  );
};

export default Menu;

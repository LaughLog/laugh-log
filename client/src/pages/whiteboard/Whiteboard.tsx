import { useAtomValue } from 'jotai';
import * as S from './Whiteboard.style';
import Menu from './menu/Menu';
import { selectedTool } from 'states/toolStates';

const Whiteboard = () => {
  const selected = useAtomValue(selectedTool);
  return (
    <S.Container>
      {selected}
      <Menu />
    </S.Container>
  );
};

export default Whiteboard;

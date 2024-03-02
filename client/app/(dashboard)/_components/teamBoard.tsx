import Subtitle from './subtitle';
import EmptyBoards from './emptyBoards';
import BoardList from './boardList';

const TeamBoard = () => {
  return (
    <div className="flex h-[calc(100vh-332px)] w-full flex-col gap-6">
      <Subtitle>팀 보드</Subtitle>
      {/* <EmptyBoards /> */}
      <BoardList />
    </div>
  );
};

export default TeamBoard;

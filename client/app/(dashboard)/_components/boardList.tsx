import { BoardListProps } from '@/types/dashboard';
import BoardItem from './boardItem';

const BoardList = ({ boardList }: BoardListProps) => {
  return (
    <div className="grid grid-cols-1 gap-12 overflow-auto tablet:grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-3">
      {boardList.map(board => {
        return (
          <BoardItem
            key={board.id}
            boardId={board.id}
            boardName={board.name}
            date={board.date}
          />
        );
      })}
    </div>
  );
};

export default BoardList;

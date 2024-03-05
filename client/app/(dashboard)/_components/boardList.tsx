import { BoardListProps } from '@/types/dashboard';
import BoardItem from './boardItem';

const BoardList = ({ boardList }: BoardListProps) => {
  return (
    <div className="laptop:grid-cols-3 desktop:grid-cols-3 tablet:grid-cols-1 grid grid-cols-1 gap-12 overflow-auto">
      {boardList.map(board => {
        return (
          <BoardItem
            key={board.id}
            id={board.id}
            name={board.name}
            date={board.date}
          />
        );
      })}
    </div>
  );
};

export default BoardList;

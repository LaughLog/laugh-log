import BoardItem from './boardItem';

const BoardList = () => {
  return (
    <div className="laptop:grid-cols-3 desktop:grid-cols-3 tablet:grid-cols-1 grid grid-cols-1 gap-12 overflow-auto">
      <BoardItem />
    </div>
  );
};

export default BoardList;

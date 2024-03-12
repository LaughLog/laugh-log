import { useState, useEffect } from 'react';

import { TeamBoardProps, BoardListType } from '@/types/dashboard';
import { addBoard, getBoardList } from '@/lib/firebaseUtils';
import Subtitle from './subtitle';
import EmptyBoards from './emptyBoards';
import BoardList from './boardList';

const TeamBoard = ({ organizationId }: TeamBoardProps) => {
  const [boardList, setBoardList] = useState<BoardListType>();

  const fetchBoardList = async () => {
    const data = await getBoardList(organizationId);
    setBoardList(data);
  };

  useEffect(() => {
    fetchBoardList();
  });

  const onClick = async () => {
    await addBoard(organizationId);
  };

  return (
    <div className="flex h-[calc(100vh-332px)] w-full flex-col gap-6">
      <Subtitle>팀 보드</Subtitle>
      {boardList?.length ? (
        <BoardList boardList={boardList} />
      ) : (
        <EmptyBoards onClick={onClick} />
      )}
    </div>
  );
};

export default TeamBoard;

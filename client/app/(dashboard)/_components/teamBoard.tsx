import EmptyBoards from './emptyBoards';
import BoardList from './boardList';
import { TeamBoardProps } from '@/types/dashboard';
import useGetBoardList from '@/hook/queries/useGetBoardList';

const TeamBoard = ({ organizationId }: TeamBoardProps) => {
  const { data: querySnapshot } = useGetBoardList(organizationId);
  const boardList = querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      name: doc.data().name,
      date: doc.data().date
    };
  });

  return (
    <>
      {boardList?.length ? (
        <BoardList boardList={boardList} />
      ) : (
        <EmptyBoards organizationId={organizationId} />
      )}
    </>
  );
};

export default TeamBoard;

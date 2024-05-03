import { useRouter } from 'next/navigation';

import { addBoard, addTextEditor } from '@/lib/utils/firebase';
import { EmptyBoardsProps } from '@/types/dashboard';

const EmptyBoards = ({ organizationId, onClick }: EmptyBoardsProps) => {
  const router = useRouter();

  const handleClick = async () => {
    const boardId = await addBoard(organizationId);
    await addTextEditor(boardId);
    router.push(`/text-editor?id=${boardId}`);
  };

  return (
    <div className="flex h-[222px] w-full shrink-0 flex-col items-center justify-center gap-6 overflow-y-scroll rounded bg-coral200 p-4">
      <span className="text-center">
        현재 만들어진 팀 보드가 없어요.
        <br />
        새로운 보드를 생성해보세요!
      </span>
      <button
        className="body3b h-[46px] w-[149px] rounded-xl bg-coral600 text-white hover:cursor-pointer"
        onClick={handleClick}
      >
        새로운 보드 만들기
      </button>
    </div>
  );
};

export default EmptyBoards;

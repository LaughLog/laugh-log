import { BoardMenuProps } from '@/types/dashboard';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import MenuItem from './MenuItem';
import { useOrganization } from '@clerk/nextjs';

const BoardMenu = ({ children, boardId, boardName }: BoardMenuProps) => {
  const { organization } = useOrganization();
  const organizationId = organization?.id;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        onClick={e => e.stopPropagation()}
        className="flex flex-col"
      >
        <MenuItem
          organizationId={organizationId ? organizationId : ''}
          boardId={boardId}
          boardName={boardName}
          header="이름 변경"
          description="변경할 이름을 입력해주세요."
          button="수정"
        />
        <MenuItem
          organizationId={organizationId ? organizationId : ''}
          boardId={boardId}
          boardName={boardName}
          header="보드 삭제"
          description="보드를 삭제하시겠습니까?"
          button="삭제"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BoardMenu;

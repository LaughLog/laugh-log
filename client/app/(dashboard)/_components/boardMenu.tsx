import { BoardMenuProps } from '@/types/dashboard';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import MenuItem from './MenuItem';

const BoardMenu = ({ children, id, name }: BoardMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        onClick={e => e.stopPropagation()}
        className="flex flex-col"
      >
        <MenuItem
          boardId={id}
          name={name}
          header="이름 변경"
          description="변경할 이름을 입력해주세요."
          button="수정"
        />
        <MenuItem
          boardId={id}
          name={name}
          header="보드 삭제"
          description="보드를 삭제하시겠습니까?"
          button="삭제"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BoardMenu;

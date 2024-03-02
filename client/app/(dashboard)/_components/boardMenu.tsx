import { BoardMenuProps } from '@/types/dashboard';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

const BoardMenu = ({ children }: BoardMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuItem className="cursor-pointer">
          이름 변경
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-[#CD2929]">
          보드 삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BoardMenu;

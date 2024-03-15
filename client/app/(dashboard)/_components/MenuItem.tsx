import { MenuItemProps } from '@/types/dashboard';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MenuItem = ({ name, header, description, button }: MenuItemProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className={cn(
            'w-full cursor-pointer py-2 text-sm hover:bg-gray-50',
            header === '보드 삭제' && 'text-[#CD2929]'
          )}
        >
          {header}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-start">
            {header}
          </AlertDialogTitle>
          <AlertDialogDescription className="flex justify-start">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {header === '이름 변경' && <Input id="name" defaultValue={name} />}
        <AlertDialogFooter className="flex flex-row justify-end gap-2">
          <AlertDialogCancel asChild className="mt-0">
            <Button variant="secondary">취소</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>{button}</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MenuItem;

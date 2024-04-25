import Link from 'next/link';
import Image from 'next/image';

import { BoardItemProps } from '@/types/dashboard';
import BoardMenu from './boardMenu';

const BoardItem = ({ boardId, boardName, date }: BoardItemProps) => {
  return (
    <Link href={`/text-editor?id=${boardId}`}>
      <div className="aspect-[300/222] ">
        <div className="relative h-[80%] w-full rounded-md  bg-gray-200">
          <BoardMenu boardId={boardId} boardName={boardName}>
            <button className="absolute right-0 top-0">
              <Image
                src="/board-more.svg"
                alt="more button"
                width={64}
                height={64}
                className="object-fit hover:cursor-pointer"
              />
            </button>
          </BoardMenu>
        </div>
        <div className="flex w-full flex-col justify-center">
          <span className="body2m mt-1 font-normal">{boardName}</span>
          <span className="caption1m font-normal text-gray600">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BoardItem;

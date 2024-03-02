import Image from 'next/image';

import BoardMenu from './boardMenu';

const BoardItem = () => {
  return (
    <div className="aspect-[300/222] ">
      <div className="relative h-[80%] w-full rounded-md  bg-gray-200">
        <BoardMenu>
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
        <span className="body2m mt-1 font-normal">Untitled</span>
        <span className="caption1m font-normal text-gray600">어제 편집됨</span>
      </div>
    </div>
  );
};

export default BoardItem;

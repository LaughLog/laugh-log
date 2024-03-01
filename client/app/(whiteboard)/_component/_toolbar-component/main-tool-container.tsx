import { type ToolValueType, type MenuProps } from '@/constants/toolbar';

interface MainToolProps {
  menu: MenuProps[];
  onClick: (iconName: ToolValueType) => void;
}

const MainTool = ({ menu, onClick }: MainToolProps) => {
  return (
    <div className="flex h-full w-[529px] shrink-0 items-center justify-center gap-4 border-r border-gray400">
      {menu.map(item =>
        item.select ? (
          <button
            className="icon-box flex h-8 w-8 items-center justify-center rounded bg-coral300 text-[28px] text-coral600"
            key={item.name}
          >
            {item.icon}
          </button>
        ) : (
          <button
            className="icon-box flex h-8 w-8 items-center justify-center rounded text-[28px] text-gray400 hover:bg-gray100 hover:text-gray600"
            key={item.name}
            onClick={() => onClick(item.name)}
          >
            {item.icon}
          </button>
        )
      )}
    </div>
  );
};

export default MainTool;

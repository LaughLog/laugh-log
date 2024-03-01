import Subtitle from './subtitle';
import TemplateItem from './templateItem';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const StartTemplate = () => {
  const template = [
    { name: '새로운 보드', imageUrl: '/new-board.svg' },
    { name: '회의록', imageUrl: '/new-board.svg' },
    { name: '다이어그램', imageUrl: '/new-board.svg' },
    { name: '칸반차트', imageUrl: '/new-board.svg' },
    { name: '그래프', imageUrl: '/new-board.svg' }
  ];

  return (
    <main className="flex h-[272px] w-[calc(100vw-328px)] flex-col gap-[16px] px-[64px] py-[32px]">
      <Subtitle>템플릿으로 시작하기</Subtitle>
      <div className="template-container flex h-[180px] w-full shrink-0 items-center gap-[24px] overflow-y-scroll rounded bg-coral200 p-4">
        {template.map(({ name, imageUrl }) => (
          <TemplateItem key={name} name={name} imageUrl={imageUrl} />
        ))}
      </div>
    </main>
  );
};

export default StartTemplate;

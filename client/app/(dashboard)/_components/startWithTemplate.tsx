import { StartWithTemplateProps } from '@/types/dashboard';
import Subtitle from './subtitle';
import TemplateItem from './templateItem';

const StartWithTemplate = ({ organizationId }: StartWithTemplateProps) => {
  const template = [
    { name: '새로운 보드', imageUrl: '/new-board.svg' },
    { name: '회의록', imageUrl: '/new-board.svg' },
    { name: '다이어그램', imageUrl: '/new-board.svg' },
    { name: '칸반차트', imageUrl: '/new-board.svg' },
    { name: '그래프', imageUrl: '/new-board.svg' }
  ];

  return (
    <main className="mt-7 flex h-60 w-full flex-col justify-between">
      <Subtitle>템플릿으로 회의 작성하기</Subtitle>
      <div className="h-45 flex w-full shrink-0 items-center gap-[24px] overflow-y-scroll rounded bg-coral200 p-4">
        {template.map(({ name, imageUrl }) => (
          <TemplateItem
            key={name}
            organizationId={organizationId}
            name={name}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default StartWithTemplate;

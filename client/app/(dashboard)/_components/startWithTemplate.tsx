import Subtitle from './subtitle';
import TemplateItem from './templateItem';
import { StartWithTemplateProps } from '@/types/dashboard';
import imageUrl from '@/public/new-board.svg';

const StartWithTemplate = ({ organizationId }: StartWithTemplateProps) => {
  const template = ['새로운 보드', '회의록'];

  return (
    <main className="mt-7 flex h-60 w-full flex-col justify-between">
      <Subtitle>템플릿으로 회의 작성하기</Subtitle>
      <div className="h-45 flex w-full shrink-0 items-center gap-[24px] overflow-y-scroll rounded bg-coral200 p-4">
        {template.map((type, inx) => (
          <TemplateItem
            key={inx}
            organizationId={organizationId}
            type={type}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default StartWithTemplate;

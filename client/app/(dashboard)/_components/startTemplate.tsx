import Subtitle from './subtitle';
import TemplateItem from './templateItem';

const StartTemplate = () => {
  const template = [
    { name: '새로운 보드', imageUrl: '/client/public/desc-image1.png' },
    { name: '회의록', imageUrl: '/client/public/desc-image1.png' },
    { name: '다이어그램', imageUrl: '/client/public/desc-image1.png' }
  ];

  return (
    <main className="flex h-[240px] w-full flex-col gap-[16px] px-[64px] py-[32px]">
      <Subtitle>템플릿으로 시작하기</Subtitle>
      <div className="flex h-[180px] w-full shrink-0 items-center gap-[24px] bg-coral200">
        {template.map(({ name, imageUrl }) => (
          <TemplateItem key={name} name={name} imageUrl={imageUrl} />
        ))}
      </div>
    </main>
  );
};

export default StartTemplate;

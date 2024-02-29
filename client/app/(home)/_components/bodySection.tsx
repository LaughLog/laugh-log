import Image from 'next/image';
import descImage from '@/public/desc-image1.png';

const DescSection = () => {
  return (
    <main className="flex w-full items-center justify-center gap-6 px-6 py-60 tablet:px-20 desktop:px-[148px]">
      <div className="flex w-full max-w-[1400px] flex-wrap justify-center gap-20 desktop:flex-nowrap desktop:justify-between">
        <section className="grow-1 flex flex-col items-center gap-8 desktop:items-start">
          <span className="whitespace-nowrap text-center text-[64px] font-bold	tracking-tight desktop:text-left">
            화이트보드와 <br />
            텍스트 에디터의 조화
          </span>
          <span className="text-center text-[20px] font-normal leading-10 tracking-tight desktop:text-start">
            단순히 다 같이 편집할 수 있는 화이트보드가 끝이 아닙니다.
            <br />
            회의 기록을 정리할 수 있는 텍스트 에디터 영역도 같이 제공해요.
          </span>
        </section>
        <section className="grow-1 relative w-[850px] desktop:w-[650px]">
          <Image src={descImage} alt="desc-image1" />
        </section>
      </div>
    </main>
  );
};

export default DescSection;

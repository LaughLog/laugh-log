import Image from 'next/image';

import descImage from '@/public/desc-image1.png';

const DescSection = () => {
  return (
    <div className="flex items-center justify-center gap-6 px-6 py-52">
      <div className="flex h-[800px] w-[1000px] w-full  flex-col items-center justify-center gap-20">
        <section className="flex flex-col items-center gap-8">
          <span className="whitespace-nowrap text-center text-[60px] font-bold	tracking-tight">
            화이트보드와 <br />
            텍스트 에디터의 조화
          </span>
          <span className="text-center text-[20px] font-normal leading-10 tracking-tight">
            단순히 다 같이 편집할 수 있는 화이트보드가 끝이 아닙니다.
            <br />
            회의 기록을 정리할 수 있는 텍스트 에디터 영역도 같이 제공해요.
          </span>
        </section>
        <section className="relative flex w-[700px] justify-center">
          <Image src={descImage} alt="Laugh Log desc image" width={700} />
        </section>
      </div>
    </div>
  );
};

export default DescSection;

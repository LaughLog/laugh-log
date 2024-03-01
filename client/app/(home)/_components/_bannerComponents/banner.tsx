'use client';

import Image from 'next/image';

import mainText from '@/public/main-text.svg';

import starCircle from '@/public/star.png';
import starNoBg from '@/public/no-bg-star.png';
import pointingHand from '@/public/pointing-hand.png';
import goodJobSticker from '@/public/tomato-sticker.png';

import useInnerWidth from '@/hook/useInnerWidth';

const Banner = () => {
  const [innerWidth] = useInnerWidth();

  return (
    <main className="flex justify-center px-[24px] tablet:px-[80px] desktop:px-[148px]">
      <section className="relative">
        <Image
          className="hover-sticker absolute bottom-0 right-[40px] top-0 my-auto"
          src={starCircle}
          alt="star-circle"
          width={innerWidth / 10}
        />
        <Image
          className="hover-sticker absolute left-[20px] top-0 animate-spin-slow"
          src={starNoBg}
          alt="star-no-bg"
          width={innerWidth / 8}
        />
        <Image
          className="hover-sticker absolute bottom-[40px] left-[20px] tablet:bottom-[80px]"
          src={goodJobSticker}
          alt="goodjob-sticker"
          width={innerWidth / 6}
        />
        <Image
          className="hover-sticker absolute right-[40px] top-[24px] "
          src={pointingHand}
          alt="pointing-hand"
          width={innerWidth / 6}
        />
        <Image src={mainText} alt="Main-Banner-Text" height={1200} />
      </section>
    </main>
  );
};

export default Banner;

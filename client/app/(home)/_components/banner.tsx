import Image from 'next/image';

import mainText from '@/public/main-text.svg';
import starCircle from '@/public/star.png';
import starNoBg from '@/public/no-bg-star.png';
import pointingHand from '@/public/pointing-hand.png';
import goodJobSticker from '@/public/tomato-sticker.png';

const Banner = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center pt-16">
      <div className="relative items-center justify-center px-[24px] *:flex tablet:px-[80px] desktop:px-[148px]">
        <Image
          className="hover-sticker absolute bottom-0 right-[40px] top-0 my-auto"
          src={starCircle}
          alt="star-circle"
          width={75}
        />
        <Image
          className="hover-sticker absolute left-[20px] top-0 animate-spin-slow"
          src={starNoBg}
          alt="star-no-bg"
          width={180}
        />
        <Image
          className="hover-sticker absolute bottom-[40px] left-[20px] tablet:bottom-[80px]"
          src={goodJobSticker}
          alt="goodjob-sticker"
          width={145}
        />
        <Image
          className="hover-sticker absolute right-[40px] top-[24px] "
          src={pointingHand}
          alt="pointing-hand"
          width={240}
        />
        <Image src={mainText} alt="Main-Banner-Text" height={550} />
      </div>
    </section>
  );
};

export default Banner;

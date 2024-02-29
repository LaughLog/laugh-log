import Image from 'next/image';
import welcome from '@/public/sign-in-welcome.svg';
import lines2 from '@/public/lines2.svg';

import FooterText from './_footerComponents/footerText';

const FooterSection = () => {
  return (
    <main className="relative flex h-[600px] w-full flex-col items-center px-[24px] tablet:h-[1200px] tablet:px-20 desktop:px-[148px]">
      <Image
        src={welcome}
        width={600}
        alt="logo"
        className="absolute bottom-24 left-20 opacity-30 tablet:bottom-[300px] tablet:opacity-100"
      />
      <Image
        src={lines2}
        className="absolute bottom-0"
        layout="responsive"
        alt="background-line"
      />
      <FooterText />
    </main>
  );
};

export default FooterSection;

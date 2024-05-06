import Image from 'next/image';
import welcome from '@/public/sign-in-welcome.svg';
import lines2 from '@/public/lines2.svg';

import FooterText from './_footerComponents/footerText';

const FooterSection = () => {
  return (
    <footer className="relative flex h-[600px] w-full flex-col items-center px-[24px] tablet:h-[1300px] tablet:px-20 desktop:px-[148px]">
      <Image
        src={welcome}
        width={600}
        alt="logo"
        className="absolute bottom-[200px] left-20 opacity-100"
      />
      <Image
        src={lines2}
        className="absolute bottom-0"
        layout="responsive"
        alt="background-line"
      />
      <FooterText />
    </footer>
  );
};

export default FooterSection;

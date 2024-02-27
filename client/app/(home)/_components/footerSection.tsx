import Image from 'next/image';
import welcome from '@/public/sign-in-welcome.svg';
import lines2 from '@/public/lines2.svg';

import FooterText from './_footerComponents/footerText';

const FooterSection = () => {
  return (
    <main className="relative flex h-[1200px] w-full flex-col items-center">
      <FooterText></FooterText>
      <Image
        src={welcome}
        width={600}
        alt="logo"
        className="absolute bottom-[300px] left-[80px]"
      />
      <Image
        src={lines2}
        className="absolute bottom-[0px]"
        layout="responsive"
        alt="background-line"
      />
    </main>
  );
};

export default FooterSection;

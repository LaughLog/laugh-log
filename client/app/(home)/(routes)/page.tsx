import Header from '../_components/_bannerComponents/header';
import Image from 'next/image';

import lines from '@/public/lines.png';

import BannerSection from '../_components/bannerSection';
import DescSection from '../_components/bodySection';
import FooterSection from '../_components/footerSection';

export default function Home() {
  return (
    <main className="bg-signIn relative bg-coral200 pt-[40px]">
      <Header />
      <Image
        className="absolute top-[100px] w-full opacity-60 tablet:top-[32px]"
        src={lines}
        width={1440}
        alt="lines"
      ></Image>
      <BannerSection></BannerSection>
      <DescSection></DescSection>
      <FooterSection></FooterSection>
    </main>
  );
}

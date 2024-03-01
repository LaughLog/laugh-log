import Header from '../_components/_bannerComponents/header';
import Image from 'next/image';

import lines from '@/public/lines.png';

import BannerSection from '../_components/bannerSection';
import DescSection from '../_components/bodySection';
import FooterSection from '../_components/footerSection';

export default function Home() {
  return (
    <main className="relative w-full bg-coral200 bg-signIn pt-10">
      <Header />
      <Image
        className="absolute top-[100px] w-full opacity-60 tablet:top-8"
        src={lines}
        width={1440}
        alt="lines"
      />
      <BannerSection />
      <DescSection />
      <FooterSection />
    </main>
  );
}

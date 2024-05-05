import Header from '../_components/header';
import Image from 'next/image';

import lines from '@/public/lines.png';

import Banner from '../_components/banner';
import DescSection from '../_components/bodySection';
import FooterSection from '../_components/footerSection';

export default function Home() {
  return (
    <div className="relative w-full bg-coral200 bg-signIn pt-10">
      <Header />
      <main>
        <Image
          className="absolute top-[100px] w-full opacity-60 tablet:top-8"
          src={lines}
          width={1440}
          alt="Laugh Log lines"
        />
        <Banner />
        <DescSection />
      </main>
      <FooterSection />
    </div>
  );
}

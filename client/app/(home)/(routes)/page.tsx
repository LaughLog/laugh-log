import Header from '../_components/header';
import Image from 'next/image';

import line from '@/public/lines.svg';

import Banner from '../_components/banner';
import DescSection from '../_components/bodySection';
import FooterSection from '../_components/footerSection';

export default function Home() {
  return (
    <div className="relative w-full bg-coral200 bg-signIn pt-10">
      <Header />
      <main>
        <Image
          className="absolute top-[200px] w-full -rotate-6 scale-x-105 scale-y-75 opacity-60"
          src={line}
          alt="Laugh Log lines"
          width={1440}
          priority
        />
        <Banner />
        <DescSection />
      </main>
      <FooterSection />
    </div>
  );
}

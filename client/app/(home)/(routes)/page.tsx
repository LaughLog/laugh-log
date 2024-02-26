import Header from '../_components/_headerComponents/header';

import BannerSection from '../_components/bannerSection';
import DescSection from '../_components/bodySection';
import FooterSection from '../_components/footerSection';

export default function Home() {
  return (
    <main className="bg-signIn relative bg-coral200 pt-[40px]">
      <Header />
      <BannerSection></BannerSection>
      <DescSection></DescSection>
      <FooterSection></FooterSection>
    </main>
  );
}

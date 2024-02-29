import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./_bannerComponents/banner'), {
  ssr: false
});

const BannerSection = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-16">
      <Banner />
    </main>
  );
};

export default BannerSection;

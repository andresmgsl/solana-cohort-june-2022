import Button from 'components/common/button';
import Image from 'next/image';

const HeroSection = () => (
  <section title="hero">
    <div className="relative z-50">
      <div className="title flex h-64 items-center justify-center bg-neutral-800">
        <h1 className="text-lg text-white">Bounties.</h1>
        <h1 className="text-lg text-white">Do you have what it takes?</h1>
      </div>
      <div className="subtitle">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. d sed
          adipiscing volutpat tincidunt amet vulputate porta est.
        </h2>
      </div>
      <div className="buttonsContainer flex">
        <Button text="Fund Bounty" variant="green" />
        <Button text="Start Exploring" variant="transparent" />
      </div>
    </div>
    <Image
      className="z-0 w-screen sm:w-auto"
      src="/hero.svg"
      alt="hero background"
      layout="raw"
    />
  </section>
);

export default HeroSection;

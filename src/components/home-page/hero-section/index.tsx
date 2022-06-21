import Button from 'components/common/button';
import Image from 'next/image';

const HeroSection = () => (
  <section
    title="hero"
    className="flex h-screen w-screen items-center justify-center bg-black"
  >
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl font-medium text-white">
        Bounties.
        <br />
        Do you have what it takes?
      </h1>
      <p className="w-7/12 text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
        adipiscing volutpat tincidunt amet vulputate porta est.
      </p>
      <div className="flex gap-4">
        <Button text="Fund Bounty" variant="green" />
        <Button text="Start Exploring" variant="transparent" />
      </div>
    </div>
    <div className="absolute w-1/2 -top-1/10">
      <Image
        className="z-0 w-screen sm:w-auto"
        src="/hero.svg"
        alt="hero background"
        layout="fill"
      />
    </div>
  </section>
);

export default HeroSection;

import Button from 'components/common/button';

const HeroSection = () => (
  <section title="hero" className="flex w-screen h-screen items-center justify-center bg-transparent">
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl font-medium text-white">
        Bounties.<br />Do you have what it takes?
      </h1>
      <p className="w-7/12 text-white text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
        adipiscing volutpat tincidunt amet vulputate porta est.
      </p>
      <div className="flex gap-4">
        <Button text="Fund Bounty" variant="green" />
        <Button text="Start Exploring" variant="transparent" />
      </div>
    </div>
  </section>
);

export default HeroSection;

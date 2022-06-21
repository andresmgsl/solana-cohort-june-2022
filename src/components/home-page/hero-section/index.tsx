import Button from 'components/common/button';

const HeroSection = () => (
  <section title="hero">
    <div className="flex w-screen h-screen items-center justify-center bg-transparent">
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
  </section>
);

export default HeroSection;

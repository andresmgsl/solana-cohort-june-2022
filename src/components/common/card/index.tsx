import Button from 'components/common/button';

const Card = () => (
  <div className="flex">
    <div className="card relative flex h-80 max-w-full flex-col items-center">
      <div className="flex h-full flex-col justify-between rounded-2xl bg-[#83f192] px-10 py-11">
        <div className="flex max-w-xl flex-col gap-5">
          <h2 className="text-6xl font-medium">Bounty Text Here</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
            adipiscing volutpat tincidunt amet vulputate porta est.
          </p>
        </div>
        <Button />
      </div>
      <div className="absolute h-1/6 bg-gradient-to-b from-[#83f192]" />
    </div>
  </div>
);

export default Card;

import Card from "components/common/card";

const ActionsSection = () => (
  <section title="actions">
    <div className="flex flex-col gap-5 w-full md:flex-row">
      <Card 
        cardSize="40rem"
        headerText="Fund a Bounty"
        bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est.'
        buttonText="Get Started" 
      />
      <Card 
        cardSize="40rem"
        headerText="Explore Open Bounties"
        bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est.'
        buttonText="Start Exploring" 
      />
    </div>
  </section>
);

export default ActionsSection;

import Card from 'components/common/card';

const ActionsSection = () => (
    <section
        title="actions"
        className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
    >
        <div className="flex w-full flex-col gap-5 md:flex-row">
            <Card
                cardSize="40rem"
                headerText="Fund a Bounty"
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est."
                buttonText="Get Started"
            />
            <Card
                cardSize="40rem"
                headerText="Explore Open Bounties"
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est."
                buttonText="Start Exploring"
            />
        </div>
    </section>
);

export default ActionsSection;

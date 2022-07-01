import Button from 'components/common/button';
import Card from 'components/common/card';

const ActionsSection = () => (
    <section
        title="actions"
        className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
    >
        <div className="flex w-full flex-col gap-5 md:flex-row">
            <Card className="w-full bg-primary px-10 py-11">
                <div className="flex h-full flex-col justify-between gap-10">
                    <div className="flex max-w-xl flex-col gap-5">
                        <h2 className="text-4xl font-medium md:text-6xl">
                            Fund a Bounty
                        </h2>
                        <p className="text-lg">
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ad sed adipiscing volutpat tincidunt amet
                            vulputate porta est.{' '}
                        </p>
                    </div>
                    <Button text="Get Started" />
                </div>
            </Card>
            <Card className="h-full w-full bg-secondary px-10 py-11">
                <div className="flex flex-col justify-between gap-10">
                    <div className="flex max-w-xl flex-col gap-5">
                        <h2 className="text-4xl font-medium md:text-6xl">
                            Explore Open Bounties
                        </h2>
                        <p className="text-lg">
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ad sed adipiscing volutpat tincidunt amet
                            vulputate porta est.{' '}
                        </p>
                    </div>
                    <Button text="Start Exploring" />
                </div>
            </Card>
        </div>
    </section>
);

export default ActionsSection;

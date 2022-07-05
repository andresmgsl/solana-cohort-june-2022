import Button from 'components/common/button';
import Card from 'components/common/card';

const ActionsSection = () => (
    <section
        title="actions"
        className="w-full p-5 sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20 bg-gradient-to-tr from-primary to-secondary"
    >
        <div className="flex w-full flex-col gap-5 md:flex-row">
            <Card className="w-full p-12">
                <div className="flex h-full flex-col justify-between gap-10">
                    <div className="flex max-w-xl flex-col gap-4">
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
                    <Button text="Get Started" variant="outlined" />
                </div>
            </Card>
            <Card className="h-full w-full p-12">
                <div className="flex flex-col justify-between gap-10">
                    <div className="flex max-w-xl flex-col gap-4">
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
                    <Button text="Start Exploring" variant="outlined" />
                </div>
            </Card>
        </div>
    </section>
);

export default ActionsSection;

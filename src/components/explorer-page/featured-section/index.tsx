import FeaturedBountyCard from './featured-bounty-card';
import Text from 'components/common/text';

const FeaturedSection = () => (
    <section
        title="featured"
        className="flex w-full flex-col gap-7 bg-gradient-to-tr from-primary/75 to-secondary/75 text-white p-5 sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20"
    >
        <Text variant="label">
              Featured      
        </Text>
        <Text variant="big-heading">
            Popular Bounties
        </Text>
        <div className="flex flex-row justify-start gap-5 w-full overflow-x-auto scroll-smooth">
            <FeaturedBountyCard
                name="Really long bounty name"
                reward="300"
                tags={[
                    { value: 'landing-page' },
                    { value: 'enhancement' },
                    { value: 'explorer-page' },
                    { value: 'bug' },
                    { value: 'explorer-page' },
                    { value: 'explorer-page' },
                    { value: 'explorer-page' },
                ]}
                responsive={false}
            />

            <FeaturedBountyCard
                name="Really long bounty name"
                reward="10,000,000"
                tags={[
                    { value: 'landing-page' },
                    { value: 'bug' },
                    { value: 'explorer-page' },
                    { value: 'enhancement' }
                ]}
                responsive={false}
            />
        </div>
    </section>
);

export default FeaturedSection;

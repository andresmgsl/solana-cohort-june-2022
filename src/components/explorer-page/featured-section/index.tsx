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
        <div className="flex flex-row gap-5 w-full overflow-x-auto scroll-smooth">
            {/* Create 4 FeaturedBountyCard components with 4 tags each */}
            <FeaturedBountyCard
                name="Bounty 1"
                reward="10,000,000"
                tags={[
                    { highlightValue: '4', value: 'Hunters' },
                    { highlightValue: '4', value: 'Funders' },
                    { value: 'Category' },
                    { value: 'GitHub tag' },
                ]}
            />
            <FeaturedBountyCard
                name="Bounty 2"
                reward="10,000,000"
                tags={[
                    { highlightValue: '4', value: 'Hunters' },
                    { highlightValue: '4', value: 'Funders' },
                    { value: 'Category' },
                    { value: 'GitHub tag' },
                ]}
            />
            <FeaturedBountyCard
                name="Bounty 3"
                reward="10,000,000"
                tags={[
                    { highlightValue: '4', value: 'Hunters' },
                    { highlightValue: '4', value: 'Funders' },
                    { value: 'Category' },
                    { value: 'GitHub tag' },
                ]}
            />
            <FeaturedBountyCard
                name="Bounty 4"
                reward="10,000,000"
                tags={[
                    { highlightValue: '4', value: 'Hunters' },
                    { highlightValue: '4', value: 'Funders' },
                    { value: 'Category' },
                    { value: 'GitHub tag' },
                ]}
            />
        </div>
    </section>
);

export default FeaturedSection;

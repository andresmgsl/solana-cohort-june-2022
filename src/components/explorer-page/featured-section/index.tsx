import FeaturedBountyCard from '../bounty-card';
import Text from 'components/common/text';
import { mockBounties } from 'mocks/bounties';

const FeaturedSection = () => (
    <section
        title="featured"
        className="flex w-full flex-col gap-7 bg-gradient-to-tr from-primary/75 to-secondary/75 p-5 text-white sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20"
    >
        <Text variant="label">Featured</Text>
        <Text variant="big-heading">Popular Bounties</Text>
        <div className="flex w-full flex-row justify-start gap-5 overflow-x-auto scroll-smooth">
            {mockBounties.map((bounty, index) => (
                <FeaturedBountyCard
                    key={index}
                    responsive={false}
                    {...bounty}
                />
            ))}
        </div>
    </section>
);

export default FeaturedSection;

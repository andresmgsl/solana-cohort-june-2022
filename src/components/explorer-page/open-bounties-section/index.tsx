import FilterPart from 'components/common/filter-section';
import BountyCard from 'components/common/main-bounty-card';
import FeaturedBountyCard from '../featured-section/featured-bounty-card';

const OpenBounties = () => (
    <section className="flex flex-col gap-4">
        <div>
            <FilterPart />
           
        </div>
        <div className="flex flex-col gap-6">
            <BountyCard
                imageSource="/dummyImg.png"
                bountyTitle="Bounty title"
                bountyPrize="$10,000,000"
            />
            <BountyCard
                imageSource="/dummyImg.png"
                bountyTitle="Bounty title"
                bountyPrize="$10,000,000"
            />
            <BountyCard
                imageSource="/dummyImg.png"
                bountyTitle="Bounty title"
                bountyPrize="$10,000,000"
            />
            <BountyCard
                imageSource="/dummyImg.png"
                bountyTitle="Bounty title"
                bountyPrize="$10,000,000"
            />
            <BountyCard
                imageSource="/dummyImg.png"
                bountyTitle="Bounty title"
                bountyPrize="$10,000,000"
            />

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
            />
        </div>
    </section>
);

export default OpenBounties;

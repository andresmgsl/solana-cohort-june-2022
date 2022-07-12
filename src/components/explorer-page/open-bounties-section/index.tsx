import BountyCard from 'components/common/main-bounty-card';
import FilterSection from 'components/common/filter-section';
const OpenBounties = () => (
    <section className="flex flex-col gap-4">
        <div>
            <FilterSection />
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
        </div>
    </section>
);

export default OpenBounties;

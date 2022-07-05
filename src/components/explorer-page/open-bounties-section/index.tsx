import FilterPart from 'components/common/filter-section';
import BountyCard from 'components/common/main-bounty-card';
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
        </div>
    </section>
);

export default OpenBounties;

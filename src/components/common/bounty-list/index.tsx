import { ChangeEvent, useState } from 'react';
import { filterBounties, numberToUsd } from 'utils';

import { Bounty } from 'types/bounty';
import BountyCard from 'components/common/main-bounty-card';
import FilterMenu from 'components/common/filter-section';

type BountyListProps = { bounties: Bounty[] };

const BountyList = ({ bounties: initialBounties }: BountyListProps) => {
    const [filterData, setFilterData] = useState({
        bounties: initialBounties,
        query: '',
    });

    const bounties = filterData.bounties;

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        const filteredBounties = initialBounties?.filter(bounty =>
            filterBounties(bounty, query),
        );
        setFilterData({ bounties: filteredBounties, query });
    };

    return (
        <div className="flex flex-col gap-4">
            <FilterMenu onSearchInputChange={onSearchInputChange} />
            <div className="flex flex-col gap-6">
                {bounties.length ? (
                    bounties.map(({ name, prize, thumbnail }) => (
                        <BountyCard
                            imageSource={thumbnail}
                            key={name}
                            bountyPrize={numberToUsd(prize)} // TODO: Format `prize` inside `BountyCard` instead of here
                            bountyTitle={name}
                        />
                    ))
                ) : (
                    <div className="flex h-20 items-center justify-center">
                        <p className="text-secondary">No results found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BountyList;

import { ChangeEvent, useState } from 'react';

import { Bounty } from 'types/bounty';
import BountyCard from 'components/explorer-page/bounty-card';
import FilterMenu from 'components/common/filter-section';
import Text from '../text';
import { filterBounties } from 'utils';

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
            <div className="hidden flex-row justify-between gap-5 px-6 text-base-content 2lg:flex">
                <Text variant="label" className="w-full">
                    Basics
                </Text>
                <div className="flex w-full justify-between">
                    <Text variant="label">Reward · SOL</Text>
                    <Text variant="label">Tags</Text>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {bounties.length ? (
                    bounties.map((bounty, index) => (
                        <BountyCard key={index} {...bounty} />
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

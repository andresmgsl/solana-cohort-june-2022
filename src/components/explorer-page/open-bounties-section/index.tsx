import Text from 'components/common/text';
import FilterPart from 'components/common/filter-section';
import BountyCard from '../featured-section/bounty-card';

const OpenBountiesSection = () => (
    <section className="flex flex-col gap-4">
        <FilterPart />
        <div className="px-6 flex-row justify-between gap-5 text-base-content hidden 2lg:flex">
            <Text variant="label" className="w-full"> Basics </Text>
            <div className="flex justify-between w-full">
                <Text variant="label"> Reward · SOL </Text>
                <Text variant="label"> Tags </Text>
            </div>
        </div>
        <div className="flex flex-col gap-6">
            <BountyCard
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
            <BountyCard
                name="Really long bounty name"
                reward="1,000,000"
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
            <BountyCard
                name="Really long bounty name"
                reward="3"
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
            <BountyCard
                name="Really long bounty name"
                reward="57"
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
            <BountyCard
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

export default OpenBountiesSection;

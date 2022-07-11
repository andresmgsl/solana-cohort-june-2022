import BountyList from 'components/common/bounty-list';
import Hero from 'components/profile-page/hero';
import { NextPage } from 'next';
import Text from 'components/common/text';
import { mockBounties } from 'mocks/bounties';

const Profile: NextPage = () => (
    <div className="mt-8">
        <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
            <Hero />
            <div className="flex flex-col gap-7">
                <Text className="text-white" variant="sub-heading">
                    My Bounties
                </Text>
                <BountyList bounties={mockBounties} />
            </div>
        </div>
    </div>
);

export default Profile;

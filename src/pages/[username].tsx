import Hero from 'components/profile-page/hero';
import { NextPage } from 'next';
import OpenBountiesSection from 'components/explorer-page/open-bounties-section';

const Profile: NextPage = () => (
    <div className="mt-8">
        <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
            <Hero />
            <div className="flex flex-col gap-7">
                <h2 className="text-2xl font-medium text-white">My Bounties</h2>
                <OpenBountiesSection />
            </div>
        </div>
    </div>
);

export default Profile;

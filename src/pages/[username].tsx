import Hero from 'components/profile-page/hero';
import { NextPage } from 'next';

const Profile: NextPage = () => (
    <div className="mt-8">
        <div className="px-4 sm:px-8 md:gap-32 md:px-16 lg:px-32 xl:px-48">
            <Hero />
        </div>
    </div>
);

export default Profile;

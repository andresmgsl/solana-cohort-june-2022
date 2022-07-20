import { GetServerSideProps, NextPage } from 'next';
import { getUser, withPageAuth } from '@supabase/auth-helpers-nextjs';

import BountyList from 'components/common/bounty-list';
import Hero from 'components/profile-page/hero';
import { User } from 'types/user';
import { mockBounties } from 'mocks/bounties';
import { mockUser } from 'mocks/user';
import { useRouter } from 'next/router';

type ProfilePageProps = {
    authenticatedUser: User;
};

const ProfilePage: NextPage<ProfilePageProps> = ({ authenticatedUser }) => {
    const { query } = useRouter();

    const isOwnProfile = query.username === authenticatedUser.username;

    const heroProps = {
        isOwnProfile,
        ...(isOwnProfile ? authenticatedUser : mockUser),
    };

    const fullName = isOwnProfile
        ? authenticatedUser.fullName
        : mockUser.fullName;
    const firstName = fullName.split(' ')[0];
    const bountyListTitlePronoun = isOwnProfile ? 'My' : `${firstName}'s`;

    return (
        <div className="mt-8">
            <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
                <Hero {...heroProps} />
                <div className="flex flex-col gap-7">
                    <h2 className="text-2xl font-medium text-white">
                        {bountyListTitlePronoun} Bounties
                    </h2>
                    <BountyList bounties={mockBounties} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = withPageAuth({
    async getServerSideProps(context) {
        const { user } = await getUser(context);
        const userMetadata = user?.user_metadata;

        return {
            props: {
                authenticatedUser: {
                    avatarUrl: userMetadata.avatar_url,
                    fullName: userMetadata.full_name,
                    username: userMetadata.user_name,
                },
            },
        };
    },
});

import { MdFace, MdSearch } from 'react-icons/md';

import Button from 'components/common/button';
import Image from 'components/common/image';
import Link from 'next/link';
import NavElement from './nav-element';
import SearchBar from 'components/common/search-bar';
import Text from 'components/common/text';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers-react';

const Header = () => {
    const router = useRouter();
    const { user } = useUser();

    const signIn = async () => {
        await supabaseClient.auth.signIn({ provider: 'github' });
    };

    const signOut = async () => {
        await supabaseClient.auth.signOut();
        await router.push('/');
    };

    return (
        <header className="sticky top-0 z-50 flex h-20 w-full flex-row items-center justify-between border-b-1.5 border-b-line bg-black/25 px-6 backdrop-blur-xl backdrop-filter">
            <div className="flex w-fit flex-row items-center gap-3">
                <Image
                    src="/logo-icon.svg"
                    alt="solana icon"
                    width={29.16}
                    height={26.08}
                />
                <Image
                    src="/logo-text.svg"
                    alt="solana text"
                    className="hidden md:inline"
                    width={134.46}
                    height={20.1}
                />
            </div>
            <div className="flex h-full flex-row items-center gap-5 text-white">
                <div className="flex flex-row gap-3 sm:gap-7">
                    <NavElement label="home" href="/" />
                    <NavElement label="explorer" href="/explorer" />
                </div>
                <div className="hidden flex-row items-center gap-5 md:flex">
                    <SearchBar />

                    <div className="h-8 w-px bg-line" />

                    <div className="flex flex-row items-center gap-3">
                        {user && (
                            <Text variant="label">
                                <Link
                                    href={`${user.user_metadata.user_name}`}
                                    passHref
                                >
                                    {user.user_metadata.user_name}
                                </Link>
                            </Text>
                        )}
                        <Button
                            onClick={user ? signOut : signIn}
                            text={user ? 'Sign out' : 'Sign up'}
                            variant="orange"
                        >
                            <MdFace className="aspect-square h-4" />
                        </Button>
                    </div>
                </div>

                <div className="flex w-fit gap-3 md:hidden">
                    <Button variant="transparent">
                        <MdSearch className="aspect-square h-4" />
                    </Button>
                    <Button variant="orange">
                        <MdFace className="aspect-square h-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;

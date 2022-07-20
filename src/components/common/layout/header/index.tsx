import Button from 'components/common/button';
import Image from 'next/image';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import NavElement from './nav-element';
import SearchBar from 'components/common/search-bar';
import Text from 'components/common/text';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';

const Header = () => {
    const { user } = useUser();

    const signIn = async () => {
        await supabaseClient.auth.signIn({ provider: 'github' });
    };

    const signOut = async () => {
        await supabaseClient.auth.signOut();
    };

    return (
        <header className="sticky top-0 z-50 flex h-20 w-full flex-row items-center justify-between border-b-1.5 border-b-line bg-black/25 px-6 backdrop-blur-xl backdrop-filter">
            <Image src="/logo.svg" alt="logo" width={175} height={27} />

            <div className="hidden h-fit flex-row items-center gap-5 text-white md:flex">
                <div className="flex flex-row gap-7">
                    {/* TODO Add `TabbedLayout? */}
                    <NavElement label="home" href="/" />
                    <NavElement label="explorer" href="/explorer" />
                </div>

                <div className="h-8 w-px bg-line" />

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
                        text={user ? 'Sign out' : 'Log in / Sign up'}
                        variant="orange"
                    />
                </div>
            </div>

            <div className="inline md:hidden">
                <Button variant="transparent">
                    <MdMenu className="aspect-square h-4" />
                </Button>
            </div>
        </header>
    );
};

export default Header;

import Button from 'components/common/button';
// import Image from 'components/common/image';
import Image from 'next/image';
import Text from 'components/common/text';
import Link from 'next/link';
import SearchBar from 'components/common/search-bar';
import SideNavigation from './side-navigation';
import { useState } from 'react';
import { cn } from 'utils';

import { MdMenu } from 'react-icons/md';
import NavElement from './nav-element';

const Header = () => (
    <header className="sticky top-0 z-50 flex h-20 w-full flex-row items-center justify-between bg-black/25 px-6 backdrop-blur-xl backdrop-filter border-b-1.5 border-b-line">
        <Image
            src="/logo.svg"
            alt="logo"
            width={175}
            height={27}
            // priority
        />

        <div className="hidden h-fit flex-row items-center gap-5 text-white md:flex">
            <div className="flex flex-row gap-7">
                {/* TODO Add `TabbedLayout? */}
                <NavElement label="home" href="/" />
                <NavElement label="explorer" href="/explorer" />
            </div>

            <div className="w-px h-8 bg-line" />

            <SearchBar />

            <div className="w-px h-8 bg-line" />

            <div className="flex flex-row gap-3">
                <Button text="Log in / Sign up" variant="orange" />
            </div>
        </div>

        <div className="inline md:hidden">
            <Button  variant="transparent">
                <MdMenu className="h-4 aspect-square" />
            </Button>
        </div>
    </header>
);

export default Header;

import Button from 'components/common/button';
import Image from 'components/common/image';
import SearchBar from 'components/common/search-bar';

import { MdFace, MdSearch } from 'react-icons/md';
import NavElement from './nav-element';

const Header = () => (
    <header className="sticky top-0 z-50 flex h-20 w-full flex-row items-center justify-between bg-black/25 px-6 backdrop-blur-xl backdrop-filter border-b-1.5 border-b-line">
        <div className="flex flex-row items-center gap-3 w-fit">
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
        <div className="h-full flex flex-row items-center gap-5 text-white">
            <div className="flex flex-row gap-3 sm:gap-7">
                <NavElement label="home" href="/" />
                <NavElement label="explorer" href="/explorer" />
            </div> 

            <div className="w-px h-8 bg-line" />

            <div className="hidden flex-row items-center gap-5 md:flex">
                <SearchBar />

                <div className="w-px h-8 bg-line" />

                <div className="flex flex-row gap-3">
                    <Button text="Sign up" variant="orange">
                        <MdFace className="h-4 aspect-square" />
                    </Button>
                </div>
            </div>

            <div className="w-fit flex gap-3 md:hidden">
                <Button variant="transparent">
                    <MdSearch className="h-4 aspect-square" />
                </Button>
                <Button variant="orange">
                    <MdFace className="h-4 aspect-square" />
                </Button>
            </div>
        </div>
    </header>
);

export default Header;

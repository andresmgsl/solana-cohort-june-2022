import Button from 'components/common/button';
// import Image from 'components/common/image';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from 'components/common/search-bar';

const Header = () => (
    <header className="fixed top-0 z-50 flex h-20 w-full flex-row items-center justify-between bg-black/25 px-6 backdrop-blur-xl backdrop-filter">
        <div className="flex gap-10">
            <Image
                src="/logo.svg"
                alt="logo"
                width={175}
                height={27}
                // priority
            />

            <div className="flex flex-row gap-3 text-white">
                <Link href="./"> Home </Link>
                <Link href="./explorer"> Explorer </Link>
            </div>
        </div>

        <div className="hidden h-fit flex-row gap-5 sm:flex">
            <SearchBar />

            <div className="w-px bg-white" />

            <div className="hidden flex-row gap-3 md:flex">
                <Button text="Log in" variant="transparent" />
                <Button text="Sign up" variant="orange" />
            </div>
        </div>

        <div className="inline md:hidden">
            <Button text="☰" variant="transparent" />
        </div>
    </header>
);

export default Header;

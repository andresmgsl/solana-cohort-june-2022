import Button from 'components/common/button';
// import Image from 'components/common/image';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from 'components/common/search-bar';
import { MdMenu } from 'react-icons/md';

const SideNavigation = () => (
    <div className="fixed top-0 z-50 flex h-screen w-1/3 flex-row items-center justify-between bg-black/25 px-6 backdrop-blur-xl backdrop-filter border-b-1.5 border-b-line">
        <div className="hidden h-fit flex-row items-center gap-5 text-white md:flex">
            <div className="flex flex-row gap-3">
                <Link href="./">
                    Home 
                </Link>
                <Link href="./explorer"> 
                    Explorer 
                </Link>
            </div>

            <div className="w-px h-8 bg-line" />

            <SearchBar />

            <div className="w-px h-8 bg-line" />

            <div className="flex flex-row gap-3">
                <Button text="Log in" variant="transparent" />
                <Button text="Sign up" variant="orange" />
            </div>
        </div>

        <div className="inline md:hidden">
            <Button  variant="transparent">
                <MdMenu className="h-4 aspect-square" />
            </Button>
        </div>
    </div>
);

export default SideNavigation;

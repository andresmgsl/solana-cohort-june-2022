import Button from 'components/common/button';
import SearchBar from 'components/common/search-bar';
// import Image from 'components/common/image';
import Image from 'next/image';

const Header = () => (
    <header className="flex flex-row justify-between fixed top-0 z-50 w-full items-center bg-black/25 p-6 backdrop-blur-xl backdrop-filter">
        <Image
            src="/logo.svg"
            alt="logo"
            width={175}
            height={27}
            // priority
        />

        <div className="flex flex-row gap-3 h-fit">
            <SearchBar />
            <div className="flex flex-row gap-3">
                <Button text="Log in" variant="transparent" />
                <Button text="Sign up" variant="orange" />
            </div>
        </div>
    </header>
);

export default Header;

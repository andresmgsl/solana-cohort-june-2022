import Image from 'next/image';

const Header = () => (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center bg-black/25 px-4 backdrop-blur-xl backdrop-filter">
        <Image
            src="/logo.svg"
            alt="Solana Logo"
            layout="fixed"
            width={175}
            height={100}
        />
    </header>
);

export default Header;

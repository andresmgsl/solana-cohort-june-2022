import Image from 'next/image';

const Header = () => (
    <header className="fixed top-0 flex h-16 w-full items-center bg-black/25 px-4 backdrop-blur-xl backdrop-filter z-50">
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

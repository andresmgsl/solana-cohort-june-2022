import Image from "next/image";

const Header = () => (
  <header className="fixed top-0 z-10 flex px-4 h-16 w-full items-center bg-black/25 backdrop-filter backdrop-blur-xl">
    <Image src="/logo.svg" alt="Solana Logo" layout="fixed" width={175} height={100}></Image>
  </header>
);

export default Header;

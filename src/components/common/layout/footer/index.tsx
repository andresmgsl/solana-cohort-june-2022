const Footer = () => (
    <footer className="my-16 flex flex-col justify-center gap-16 px-4 md:px-16 lg:px-32 xl:px-48">
        {/* draw a thin grey line */}
        <div className="h-[1.5px] w-full bg-gray-600" />
        <div className="w-full rounded-xl bg-white p-7 text-black">
            <p className="text-right text-sm font-light uppercase">
                {' '}
                solana.com{' '}
            </p>
        </div>
    </footer>
);

export default Footer;

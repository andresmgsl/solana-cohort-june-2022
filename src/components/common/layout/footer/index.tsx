import Card from "components/common/card";

const Footer = () => (
    <footer className="my-16 flex flex-col justify-center gap-16 px-4 md:px-16 lg:px-32 xl:px-48">
        {/* draw a thin grey line */}
        <div className="h-[1.5px] w-full bg-gray-600" />
        <Card className="w-full rounded-xl bg-white p-7" blur="true">
            <p className="text-white text-right text-sm font-light uppercase">
                Powered by <span className="text-[#d7753e] font-medium">Solana</span>
            </p>
        </Card>
    </footer>
);

export default Footer;

import Card from 'components/common/card';
import Text from 'components/common/text';
import Image from 'components/common/image';

const Footer = () => (
    <footer className="my-16 flex flex-col justify-center gap-16 px-4 md:px-16 lg:px-32 xl:px-48 text-white">
        {/* draw a thin grey line */}
        <div className="h-px w-full bg-line"/>
        <Card className="w-full flex flex-row justify-between rounded-xl p-7">
            <Image
                src="/logo-icon.svg"
                alt="solana icon"
                width={20}
                height={17.89}
                className="saturate-0"
            />
            <Text variant="label" className="font-light">
                Powered by{' '}
                <span className="font-medium text-primary">Solana</span>
            </Text>
        </Card>
    </footer>
);

export default Footer;

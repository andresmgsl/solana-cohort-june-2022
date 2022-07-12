import Button from 'components/common/button';
import Image from 'next/image';
import cn from 'utils';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Headline from './component/Headline';


const height = 'h-[calc(100vh_-_theme(space.20))]';

const HeroSection = () => {
    return (
    <section
        title="hero"
        className={cn(
            'relative top-20 flex w-full flex-col items-center justify-center bg-black px-4 md:flex-row md:justify-start sm:px-8 md:mt-0 md:px-16 lg:px-32 xl:px-64',
            height,
        )}
    >
        {/* <div
            style={{
                background:
                    'radial-gradient(45.5% 47.88% at 45% 50.47%, #F07546 0%, rgba(0, 0, 0, 0) 100%)',
            }}
            className={`hidden md: relative top-32 z-0 hidden w-screen`}
        >
        </div> */}
        <div className="relative z-40 flex w-full h-full flex-col items-center md:items-start justify-evenly text-left">
            <h1 className="text-justify text-[38px] font-medium leading-snug sm:leading-normal text-white sm:text-6xl ">
                <span style={{ color: '#F07546' }}>Bounties</span> are here.
                <br />
                Do you have what it takes?
            </h1>
            <Headline />
            <div className="flex gap-4">
                <Button text="Fund Bounty" variant="orange" />
                <Button text="Start Exploring" variant="transparent" />
            </div>
        </div>
    </section>
)};

export default HeroSection;

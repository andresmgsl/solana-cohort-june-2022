import Button from 'components/common/button';
import Image from 'next/image';
import { cn } from 'utils';


const height = 'h-[calc(100vh_-_theme(space.20))]';

const HeroSection = () => {
    return (
    <section
        title="hero"
        className="relative flex h-screen w-screen flex-col items-center justify-center bg-black sm:flex-row sm:justify-start"
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
            <div className="align-center flex justify-evenly">
                <div>
                    <h1 className="w-full pb-6 text-3xl font-semibold text-white">
                        Headline
                    </h1>
                    <p className="w-full text-lg text-white sm:w-7/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ad sed adipiscing volutpat tincidunt amet vulputate
                        porta est.
                    </p>
                </div>
                <div>
                    <h1 className="w-full pb-6 text-3xl font-semibold text-white">
                        Headline
                    </h1>
                    <p className="w-full text-lg text-white sm:w-7/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ad sed adipiscing volutpat tincidunt amet vulputate
                        porta est.
                    </p>
                </div>
                <div>
                    <h1 className="bold w-full pb-6 text-3xl font-semibold text-white">
                        Headline
                    </h1>
                    <p className="w-full text-lg text-white sm:w-7/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ad sed adipiscing volutpat tincidunt amet vulputate
                        porta est.
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                <Button text="Fund Bounty" variant="orange" />
                <Button text="Start Exploring" variant="transparent" />
            </div>
        </div>
    </section>
)};

export default HeroSection;

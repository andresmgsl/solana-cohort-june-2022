import Button from 'components/common/button';
import Image from 'next/image';
import { cn } from 'utils';

const height = 'h-[calc(100vh_-_theme(space.20)_-_theme(space.12))]';

const HeroSection = () => (
    <section
        title="hero"
        className="relative flex h-screen w-screen flex-col items-center justify-center bg-black sm:flex-row sm:justify-start"
    >
        <div
            style={{
                background:
                    'radial-gradient(45.5% 47.88% at 45% 50.47%, #F07546 0%, rgba(0, 0, 0, 0) 100%)',
            }}
            className={`relative top-32 z-0 w-screen sm:absolute sm:top-0 sm:right-0 sm:${height} sm:w-1/2`}
        >
            <img className="invisible" src="/hero.svg" alt="placeholder"></img>
        </div>
        <div className="relative -top-[10%] z-40 flex flex-col gap-20 px-5 text-left sm:top-0 xl:ml-32">
            <h1 className="leading-snug text-6xl font-medium text-white">
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
);

export default HeroSection;

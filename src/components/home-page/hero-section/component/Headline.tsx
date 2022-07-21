import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../style/hero.module.css';

function Headline() {
    return (
        <>
            <div className="align-center w-full flex justify-evenly gap-4 text-center md:hidden">
                <Carousel autoPlay={true} showArrows={false} showStatus={false} infiniteLoop={true} className={"w-full " + styles.carousel}>
                    <div className="mb-16">
                        <h1 className="w-full pb-6 text-3xl font-semibold text-white">
                            Headline
                        </h1>
                        <p className="w-full text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ad sed adipiscing volutpat tincidunt amet
                            vulputate porta est.
                        </p>
                    </div>
                    <div className="mb-16">
                        <h1 className="w-full pb-6 text-3xl font-semibold text-white">
                            Headline
                        </h1>
                        <p className="w-full text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ad sed adipiscing volutpat tincidunt amet
                            vulputate porta est.
                        </p>
                    </div>
                    <div className="mb-16">
                        <h1 className="bold w-full pb-6 text-3xl font-semibold text-white">
                            Headline
                        </h1>
                        <p className="w-full text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ad sed adipiscing volutpat tincidunt amet
                            vulputate porta est.
                        </p>
                    </div>
                </Carousel>
            </div>
            <div className="align-center hidden justify-evenly gap-4 text-left md:flex">
                <div>
                    <h1 className="w-full pb-6 text-3xl font-semibold text-white">
                        Headline
                    </h1>
                    <p className="w-full text-lg text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ad sed adipiscing volutpat tincidunt amet vulputate
                        porta est.
                    </p>
                </div>
                <div>
                    <h1 className="w-full pb-6 text-3xl font-semibold text-white">
                        Headline
                    </h1>
                    <p className="w-full text-lg text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ad sed adipiscing volutpat tincidunt amet vulputate
                        porta est.
                    </p>
                </div>
                <div>
                    <h1 className="bold w-full pb-6 text-3xl font-semibold text-white">
                        Headline
                    </h1>
                    <p className="w-full text-lg text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ad sed adipiscing volutpat tincidunt amet vulputate
                        porta est.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Headline;

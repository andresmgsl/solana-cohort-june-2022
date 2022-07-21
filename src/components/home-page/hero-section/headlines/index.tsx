import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../style/hero.module.css';
import Headline from './headline';

const Headlines = () => (
    <>
        <Carousel showArrows={false} showStatus={false} infiniteLoop={true} className={"w-full pb-14 text-center inline md:hidden" + styles.carousel}>
            <Headline heading="Headline" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est." />
            <Headline heading="Headline" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est." />
            <Headline heading="Headline" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est." />
        </Carousel>

        <div className="align-center hidden justify-evenly gap-4 text-left md:flex">
            <Headline heading="Headline" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est." />
            <Headline heading="Headline" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est." />
            <Headline heading="Headline" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est." />
        </div>
    </>
)

export default Headlines;

import AboutSection from 'components/home-page/about-section';
import ActionsSection from 'components/home-page/actions-section';
import FaqSection from 'components/home-page/faq-section';
import HeroSection from 'components/home-page/hero-section';
import { NextPage } from 'next';
import StatsSection from 'components/home-page/stats-section';

const Home: NextPage = () => (
    <>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FaqSection />
        <ActionsSection />
    </>
);

export default Home;

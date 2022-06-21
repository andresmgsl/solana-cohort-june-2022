import AboutSection from 'components/home-page/about-section';
import ActionsSection from 'components/home-page/actions-section';
import FaqSection from 'components/home-page/faq-section';
import HeroSection from 'components/home-page/hero-section';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <div className='bg-black'>
    <HeroSection />
    <AboutSection />
    <FaqSection />
    <ActionsSection />
  </div>
);

export default Home;

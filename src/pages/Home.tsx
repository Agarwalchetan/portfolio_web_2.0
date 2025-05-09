import React from 'react';
import Hero from '../components/home/Hero';
import SocialLinks from '../components/home/SocialLinks';
import AboutMe from '../components/home/AboutMe';
import SkillsSection from '../components/home/SkillsSection';
import CurrentFocus from '../components/home/CurrentFocus';
import Recognition from '../components/home/Recognition';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <SocialLinks />
      <AboutMe />
      <SkillsSection />
      <CurrentFocus />
      <Recognition />
    </div>
  );
};

export default Home;
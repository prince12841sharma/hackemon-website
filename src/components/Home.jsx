import React from 'react'
import Herosection from './HeroSection'
import Navbar from './Navbar'
import AboutSection from './AboutSection'
import Theme from './Theme'
import Prizes from './Prizes'
import Footer from './Footer'
import CommunityPartners from './CommunityPartners'
import { ShootingStars } from '../components/ui/shooting-stars';
import { StarsBackground } from '../components/ui/stars-background';
import { SmoothScrollHero } from './ParallaxHero'
import Schedule from './Schedule'
import Sponsor from './Sponsor'
import ClickSpark from './ui/ClickSpark'

const Home = () => {
  return (
    <div>
        <div className='relative bg-gradient-to-b from-[#010012] to-[#05042c]'>
      <ClickSpark sparkColor="#fff" sparkSize={15} sparkRadius={18} sparkCount={10} duration={500}>
        <Herosection/>
      <SmoothScrollHero />
          <AboutSection />
          <Theme />
        <Prizes/>
          <ShootingStars minSpeed={10} minDelay={4200} starWidth={20} starHeight={2} />
          <StarsBackground starDensity={0.0002} maxTwinkleSpeed={1} />
        <Schedule />
        <Sponsor />
        <CommunityPartners />
        </ClickSpark>
        </div>
    </div>
  )
}

export default Home;
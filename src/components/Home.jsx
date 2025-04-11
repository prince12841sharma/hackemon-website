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

const Home = () => {
  return (
    <div>
        <div className='relative bg-gradient-to-b from-[#010012] to-[#05042c]'>
        <Herosection/>
      <SmoothScrollHero />
          <AboutSection />
          <Theme />
        <Prizes/>
          <ShootingStars minSpeed={10} minDelay={4200} starWidth={20} starHeight={2} />
          <StarsBackground starDensity={0.0002} maxTwinkleSpeed={1} />
        <Schedule />
        {/* <Sponsor /> */}
        <CommunityPartners />
        </div>
    </div>
  )
}

export default Home;
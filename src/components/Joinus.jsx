import React from 'react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { HoverEffect } from '../components/ui/card-hover-effect';

// Updated projects array with new descriptions and image URLs
export const projects = [
  {
    title: "Call For Mentors",
    description:
      "Empower the next generation of innovators by guiding them through an intense 48-hour hackathon. Share your expertise and help shape groundbreaking AI-driven solutions.",
    link: "https://www.commudle.com/login?redirect=%2Ffill-form%2F3296",
    image: "https://placehold.co/600x400/052e16/FFFFFF?text=Call For Mentors",
  },
  {
    title: "Call For Judges",
    description:
      "Join a panel of industry leaders to evaluate cutting-edge game development projects. Your insights will help recognize the most innovative gaming experiences.",
    link: "https://www.commudle.com/login?redirect=%2Ffill-form%2F3098",
    image: "https://placehold.co/600x400/1e1b4b/FFFFFF?text=Call For Judges"
  },
  {
    title: "Call For Community Partners",
    description:
      "Collaborate with us to support data science enthusiasts in analyzing and predicting real-world trends. Expand your impact by connecting with a vibrant tech community.",
    link: "https://www.commudle.com/login?redirect=%2Ffill-form%2F3097",
    image: "https://placehold.co/600x400/172554/FFFFFF?text=Call+For+Community+Partners"
  },
  {
    title: "Call For Sponsors",
    description:
      "Support a new wave of developers and technologists by sponsoring an inclusive and engaging hackathon. Gain visibility while fostering innovation and creativity.",
    link: "https://www.commudle.com/login?redirect=%2Ffill-form%2F3098",
    image: "https://placehold.co/600x400/312e81/FFFFFF?text=Call For Sponsors"
  }
];

const Joinus = () => {
  return (
    <div className='bg-gradient-to-b from-[#010012] to-[#05042c]'>
      <div className="pt-40 pb-20 px-4 md:px-12 lg:px-20 rounded-md bg-transparent flex flex-col items-center justify-center relative w-full">
        <h1 className="text-4xl text-center md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
          Join Us
        </h1>
        <p className="text-white text-sm px-10 md:text-xl max-w-3xl text-center mb-12 opacity-80">
          Become a part of our community by participating in hackathons, mentoring, judging, or sponsoring!
        </p>
        
        {/* Using the enhanced HoverEffect component */}
        <div className="w-full max-w-7xl px-4 md:px-8">
          <HoverEffect items={projects} />
        </div>
        
        <ShootingStars minSpeed={10} minDelay={4200} starWidth={20} starHeight={2} />
        <StarsBackground starDensity={0.0002} maxTwinkleSpeed={2} />
      </div>
    </div>
  )
}

export default Joinus;

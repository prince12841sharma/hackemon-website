import React from 'react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { HoverEffect } from '../components/ui/card-hover-effect';

// Updated projects array with reorganized events, status labels, and modified links
export const projects = [
  {
    title: "🎮 Online Game Night – Let's Play!",
    description:
      "We're hosting an online gaming night every day from 6th to 13th April at 10 PM on our Discord server – and you're invited! 🎉 Join us for a whole week of fun games, chill vibes, and great company. Whether you're a pro or just in it for the laughs, there's something for everyone. No pressure, just pure fun. Be there! 🕹",
    link: "https://discord.gg/5MSpmyJK?event=1358442757764677853",
    image: "https://placehold.co/600x400/4c1d95/FFFFFF?text=Game+Night",
    status: "Ended"
  },
  {
    title: "🤖 Build with AI – Delhi Chapter at Opstree Solutions",
    description:
      "AI took center stage at our exclusive Build with AI event hosted at Opstree Solutions, Delhi. From thought-provoking speaker talks to demo sessions that blew minds, this was a day filled with curiosity, creativity, and cutting-edge innovation. We explored how AI is reshaping the future — and had some serious fun while doing it! Brains, bots, and brilliant people — what more could you ask for?",
    link: "",
    image: "https://placehold.co/600x400/172554/FFFFFF?text=Build+with+AI",
    status: "Ended"
  },
  {
    title: "🌟 Road to Hackemon – Nagpur, Chandigarh & Varanasi",
    description:
      "Our Road to Hackemon series was all about lighting up the build-up to Hackemon with energy and excitement! We hosted interactive workshops, speaker sessions, and community mixers in Nagpur, Chandigarh, and Varanasi, bringing together passionate minds from all walks of tech. From hands-on learning to meaningful conversations — these stops created real impact. Learning, bonding, and gearing up for Hackemon in style.",
    link: "",
    image: "https://placehold.co/600x400/312e81/FFFFFF?text=Road+to+Hackemon",
    status: "Ended"
  },
  {
    title: "🚀 Code & Connect Series – 6 Cities, Countless Stories",
    description:
      "We hit the road with our Code & Connect meetup series across six amazing cities, bringing together developers, creators, and community enthusiasts under one roof. With power-packed speaker sessions, engaging discussions, and a vibe full of learning and networking, each city turned into a mini celebration of tech and connections. 6 cities. Inspiring speakers. Lifelong connections. This was more than just an event — it was a movement.",
    link: "",
    image: "https://placehold.co/600x400/1e40af/FFFFFF?text=Code+%26+Connect",
    status: "Ended"
  },
];

const Events = () => {
  return (
    <div className='bg-gradient-to-b from-[#010012] to-[#05042c]'>
      <div className="pt-40 pb-20 px-4 md:px-12 lg:px-20 rounded-md bg-transparent flex flex-col items-center justify-center relative w-full">
        <h1 className="text-4xl text-center md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
          Events
        </h1>
        <p className="text-white text-sm px-10 md:text-xl max-w-3xl text-center mb-12 opacity-80">
          Join our exciting hackathons and competitions throughout the year
        </p>
        
        {/* Using the enhanced HoverEffect component */}
        <div className="w-full max-w-7xl px-4 md:px-8">
          <HoverEffect items={projects} />
        </div>
        
        <ShootingStars minSpeed={10} minDelay={4200} starWidth={20} starHeight={2} />
        <StarsBackground starDensity={0.0002} maxTwinkleSpeed={1} />
      </div>
    </div>
  )
}

export default Events;
import React from 'react'
import { ParallaxScroll } from "../components/ui/parallax-scroll.jsx";
import { ShootingStars } from './ui/shooting-stars.jsx';
import { StarsBackground } from './ui/stars-background.jsx';

import Parth from "../assets/judges/Parth.jpg";
import Dolly from "../assets/judges/Dolly.jpg";
import Shivangi from "../assets/judges/Shivangi.jpg";

import { Link } from 'react-router-dom';


const Judes = () => {

  const teamMembers = [
        { image: Parth, name: "Parth", linkedin: "https://www.linkedin.com/in/kumarparth28/", role: "Cloud Infrastructure Analyst || @DXC" },
        { image: Dolly, name: "Dolly", linkedin: "https://www.linkedin.com/in/dollybhasin/", role: "Founder @ SmartEdge" },
        { image: Shivangi, name: "Shivangi", linkedin: "https://www.linkedin.com/in/shivi-singh/", role: "UI/UX Engineer @ Hyathi Technologies" },
  ];
  

  return (
        <div className='pt-40 text-center bg-gradient-to-b from-[#010012] to-[#05042c]'>
          <ShootingStars minSpeed={10} minDelay={4200} starWidth={20} starHeight={2} />
          <StarsBackground starDensity={0.0002} maxTwinkleSpeed={1} />
          
          <div className='flex flex-col items-center justify-center relative w-full'>
            <h1 className="text-4xl text-center md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
              Our Team
            </h1>
    
            <p className="text-white text-sm px-10 md:text-xl max-w-3xl text-center opacity-80">
              Our team is a passionate group of innovators, developers, designers, and leaders dedicated to creating impactful solutions and driving meaningful change.
            </p>

            <div className=' flex mt-8 md:text-2xl font-bold text-stone-300 '>
                <Link className='pb-2  border-b-4 pl-2' to={"/team"}>
                    Core Team
                </Link>
                <Link className='border-b-4 pl-4  pb-2 pr-2' to={"/mentor"}>
                    Mentors Team
                </Link>
                <Link className='border-b-4 pl-4 border-pink-600 pb-2 pr-2' to={"/mentor"}>
                    Judges Team
                </Link>
            </div>
          </div>
    
          <ParallaxScroll teamMembers={teamMembers} />
        </div>
  )
}

export default Judes
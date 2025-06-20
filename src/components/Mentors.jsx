import React from 'react'
import { ParallaxScroll } from "../components/ui/parallax-scroll.jsx";
import { ShootingStars } from './ui/shooting-stars.jsx';
import { StarsBackground } from './ui/stars-background.jsx';

import Ayan from "../assets/mentors/Ayan.jpeg";
import Karan from "../assets/mentors/karan.jpg";
import Krish from "../assets/mentors/krish.jpeg";
import Krishna from "../assets/mentors/Krishna.jpeg";
import  TUSHIKA from "../assets/mentors/TUSHIKA.jpg";
import  Yash from "../assets/mentors/Yash.jpeg";
import  Harshavardhan from "../assets/mentors/Harshavardhan.jpg";

import { Link } from 'react-router-dom';

const Mentors = () => {

      const teamMembers = [
        { image: Ayan, name: "Ayan Khan", linkedin: "https://in.linkedin.com/in/ayankhan3105", role: " Cloud DevOps Engineer at RTDS" },
        { image: TUSHIKA, name: "Tushika", linkedin: "https://www.linkedin.com/in/tushika-rawat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", role: "Founder 15Forteen | Data Analyst@PW" },
        { image: Yash, name: "Yash Chatrath ", linkedin: "http://linkedin.com/in/chatrath-yash", role: "Data analyst/scientist at Sony" },
        { image: Krishna, name: "Krishna Rana", linkedin: "https://www.linkedin.com/in/krishnarana672/", role: "Android Engineer | Tech Enthusiast | Speaker " },
        { image: Karan, name: "Karan Vaswani", linkedin: "https://www.linkedin.com/in/karan-v-270102", role: "SDE at NEC Corporation India Pvt Ltd" },
        { image: Harshavardhan, name: "Harshavardhan Bajoria ", linkedin: "https://www.linkedin.com/in/harshavardhan-bajoria", role: "Associate Product Manager @Unstop | GitHub Campus Expert | Azure Developer Lead" },
        { image: Krish, name: "Krish Khattar", linkedin: "https://www.linkedin.com/in/krishkhattar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", role: "Software Developer Trainee @Antino Labs" },
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

            <div className=' flex mt-8  md:text-2xl font-bold text-stone-300 '>
                <Link className='pb-2  border-b-4 pl-2' to={"/team"}>
                    Core Team
                </Link>
                <Link className='border-b-4 pl-4 border-pink-600 pb-2 pr-2' to={"/mentor"}>
                    Mentors
                </Link>
                <Link className='border-b-4 pl-4  pb-2 pr-2' to={"/judge"}>
                    Judges
                </Link>
            </div>
          </div>
    
          <ParallaxScroll teamMembers={teamMembers} />
        </div>
  )
}

export default Mentors
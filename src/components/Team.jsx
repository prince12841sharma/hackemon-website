import React from 'react'
import { ParallaxScroll } from "../components/ui/parallax-scroll.jsx";
import { BackgroundBeams } from './ui/background-beams.jsx';
import Bhawna from "../assets/Bhawna.jpeg";

import Ekta from "../assets/Ekta.jpg";
import Keshav from "../assets/Keshav.jpeg";
import Khushi from "../assets/Khushi.jpg";
import Manik from "../assets/Manik.jpg";
import Nikitaji from "../assets/Nikitaji.jpg";
import Ridhim from "../assets/Ridhim.jpg";
import Shikhar from "../assets/Shikhar.jpg";
import Teeksha from "../assets/Teeksha.jpeg";
import Utkarsh from "../assets/Utkarsh.png";
import Prince from "../assets/Prince.jpg";
import Nandini from "../assets/Nandini.jpg";
import Umesh from "../assets/Umesh.jpg";
import madhur from "../assets/madhur.jpg";
import ananya from "../assets/ananya.jpg";
import { ShootingStars } from './ui/shooting-stars.jsx';
import { StarsBackground } from './ui/stars-background.jsx';


const Team = () => {
  // Array with both images and team member information
  const teamMembers = [
    { image: Nikitaji, name: "Nikita", linkedin: "https://www.linkedin.com/in/nikita-kumari-58455b284/" , role : "Overall Incharge"},
    { image: Khushi, name: "Khushi ", linkedin: "https://linkedin.com/in/smilewithkhushi" , role : "Sponsorship Team" },
    { image: Prince, name: "Prince", linkedin: "https://www.linkedin.com/in/prince-sharma-047973253" , role : "Technical Lead" },
    { image: Manik, name: "Manik ", linkedin: "https://www.linkedin.com/in/mrmanik" , role : "Sponsorship Team" },
    { image: Keshav, name: "Keshav", linkedin: "https://www.linkedin.com/in/keshav-dayal/" , role : "PR/Outreach Lead" },
    { image: Ekta, name: "Ekta ", linkedin: "https://www.linkedin.com/in/theektaagrawal/" , role : "Agenda Team" },
    { image: Teeksha, name: "Teeksha ", linkedin: "https://www.linkedin.com/in/teeksha-harish-5895a0234/" , role : "Agenda Team" },
    { image: Ridhim, name: "Ridhim", linkedin: "https://www.linkedin.com/in/ridhim-gupta/" , role : "PR/Outreach Lead"},
    // { image: Bhawna, name: "Bhawna ", linkedin: "https://www.linkedin.com/in/connectbhawna/" , role : "Founder" },
    { image: Shikhar, name: "Shikhar", linkedin: "https://www.linkedin.com/in/shikharsingh0712" ,role : "Sponsorship Team" },
    { image: Utkarsh, name: "Utkarsh", linkedin: "https://www.linkedin.com/in/utkarsh-yadav-079ba327b?" ,role : "Graphics Lead" },
    { image: Nandini, name: "Nandini", linkedin: "https://www.linkedin.com/in/nandini-079ba327b?" ,role : "Graphics Lead" },
    { image: ananya, name: "Ananya", linkedin: "https://www.linkedin.com/in/ananya-agarwal5501?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ,role : "Content Lead" },
    { image: Umesh, name: "Umesh", linkedin: "https://www.linkedin.com/" ,role : "Social Lead" },
    { image: madhur, name: "Madhur", linkedin: "https://linktr.ee/Madhur_Sapra" ,role : "Content Lead" },
  ];

  // Extract just the images for the ParallaxScroll component
  const images = teamMembers.map(member => member.image);
  // Extract just the names for the ParallaxScroll component
  const names = teamMembers.map(member => member.name);
  // Extract just the LinkedIn IDs for the ParallaxScroll component
  const linkedinIds = teamMembers.map(member => member.linkedin);
  // Extract just the LinkedIn IDs for the ParallaxScroll component
  const roles = teamMembers.map(member => member.role);

  return (
    <div className=' pt-40 text-center  bg-gradient-to-b from-[#010012] to-[#05042c]'>
                  <ShootingStars minSpeed={10} minDelay={4200} starWidth={20} starHeight={2} />
                  <StarsBackground starDensity={0.0002} maxTwinkleSpeed={1} />
        <div className='flex flex-col items-center justify-center relative w-full'>
        <h1 className="text-4xl text-center md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
          Our Team
        </h1>

        <p className="text-white text-sm px-10 md:text-xl max-w-3xl text-center  opacity-80">
        Our team is a passionate group of innovators, developers, designers, and leaders dedicated to creating impactful solutions and driving meaningful change.        </p>

        </div>

        <ParallaxScroll 
          images={images} 
          names={names} 
          linkedinIds={linkedinIds} 
          roles={roles} 
          
        />
    </div>
  )
}

export default Team
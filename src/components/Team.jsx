// Team.jsx
import React from 'react'
import { ParallaxScroll } from "../components/ui/parallax-scroll.jsx";
import { ShootingStars } from './ui/shooting-stars.jsx';
import { StarsBackground } from './ui/stars-background.jsx';

// Import all team member images
import Bhawna from "../assets/Bhawna.jpg";
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
import Yukti from "../assets/Yukti.jpg";
import Parth from "../assets/Parth.jpg";
import Pratyush from "../assets/Pratyush.jpg";
import Manas from "../assets/Manas.jpg";
import Ujjwal from "../assets/Ujjwal.jpg";
import Vibhor from "../assets/Vibhor.jpg";
import Akshat from "../assets/Akshat.jpeg";
import Vikshita from "../assets/Vikshita.jpg";

import Shivangi from "../assets/shivangi.jpg";
import Vani from "../assets/vani.jpg";
import Ayush from "../assets/Ayush.jpg";
import Ashwany from "../assets/Ashwany.jpg";

import Sakshi from "../assets/Sakshi.png";
import Ragini from "../assets/Ragini.jpg";
import { Link } from 'react-router-dom';

const Team = () => {
  // Define team members as a single array of objects
  const teamMembers = [
    { image: Bhawna, name: "Bhawna", linkedin: "https://www.linkedin.com/in/connectbhawna/", role: "Organizer" },
    { image: Nikitaji, name: "Nikita", linkedin: "https://www.linkedin.com/in/nikita-kumari-58455b284/", role: "Organizer" },
    { image: Ekta, name: "Ekta", linkedin: "https://www.linkedin.com/in/theektaagrawal/", role: "Organizer" },
    { image: Yukti, name: "Yukti", linkedin: "https://www.linkedin.com/in/yukti-thakral-28192b253/", role: "Organizer" },
    { image: Vikshita, name: "Vikshita", linkedin: "https://www.linkedin.com/in/vikshita", role: "Voice of the Community" },
    { image: Teeksha, name: "Teeksha", linkedin: "https://www.linkedin.com/in/teeksha-harish-5895a0234/", role: "Operations/ Logistic Head" },
    { image: Akshat, name: "Akshat", linkedin: "https://www.linkedin.com/in/akshat-kumar-40b991261/", role: "Operations/ Logistic Head" },
    { image: Shikhar, name: "Shikhar", linkedin: "https://www.linkedin.com/in/shikharsingh0712", role: "Hospitality Head" },
    { image: madhur, name: "Madhur", linkedin: "https://linktr.ee/Madhur_Sapra", role: "Editorial Head" },
    { image: ananya, name: "Ananya", linkedin: "https://www.linkedin.com/in/ananya-agarwal5501", role: "Sponsorship Head" },
    { image: Umesh, name: "Umesh", linkedin: "https://www.linkedin.com/", role: "Media Head" },
    { image: Vani, name: "Vani", linkedin: "https://www.linkedin.com/in/vani-gupta-952125253", role: "Graphic Head" },
    { image: Utkarsh, name: "Utkarsh", linkedin: "https://www.linkedin.com/in/utkarsh-yadav-079ba327b?", role: "Graphic Head" },
    { image: Ridhim, name: "Ridhim", linkedin: "https://www.linkedin.com/in/ridhim-gupta/", role: "PR/Outreach Head" },
    { image: Keshav, name: "Keshav", linkedin: "https://www.linkedin.com/in/keshav-dayal/", role: "PR/Outreach Head" },
    { image: Prince, name: "Prince", linkedin: "https://www.linkedin.com/in/prince-sharma-047973253", role: "Techical Head" },
    { image: Pratyush, name: "Pratyush", linkedin: "https://linktr.ee/pratyush", role: "Discord Administrator" },
    { image: Parth, name: "Parth", linkedin: "https://linktr.ee/parth", role: "Graphic Team" },
    { image: Shivangi, name: "Shivangi", linkedin: "https://www.linkedin.com/in/shivangi-singh-10a900242/", role: "Graphic Team" },
    { image: Manik, name: "Manik", linkedin: "https://www.linkedin.com/in/mrmanik", role: "Sponsorship Team" },
    // { image: Umesh, name: "Vani", linkedin: "https://www.linkedin.com/", role: "Social Lead" },
    { image: Ujjwal, name: "Ujjwal", linkedin: "https://www.linkedin.com/in/ujjwal-agarwal-67b6a0323", role: "Sponsorship Team" },
    { image: Ayush, name: "Ayush", linkedin: "https://www.linkedin.com/in/ayugate/", role: "Media Partner: OnnOff" },
    { image: Ashwany, name: "Ashwany", linkedin: "https://www.linkedin.com/in/ashwany-kumar-sharma-aab7a9213/", role: "Media Partner: OnnOff" },

    { image: Sakshi, name: "Sakshi", linkedin: "https://www.linkedin.com/in/sakshiip", role: "Sponsorship Team" },
    { image: Ragini, name: "Ragini", linkedin: "https://www.linkedin.com/in/ragini-pandey-594564261", role: "Sponsorship Team" },

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

            <div className=' flex mt-8 md:text-2xl font-bold text-stone-300'>
                <Link className='border-b-4 border-pink-600 pr-4 pb-2 pl-2' to={"/team"}>
                    Core Team
                </Link>
                <Link className=' border-b-4 pb-2 pr-2' to={"/mentor"}>
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

export default Team
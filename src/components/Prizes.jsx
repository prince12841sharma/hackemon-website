import React, { useEffect, useRef } from 'react';
import "../styles/prizes.css";
import SpotlightCard from '../components/ui/SpotlightCard.jsx';

// images

import first from "../assets/prizes/first.jpg";
import second from "../assets/prizes/second.jpg";
import girls from "../assets/prizes/allgirls.jpg";

import social from "../assets/prizes/social.jpg";
import inovation from "../assets/prizes/inovation.jpg";



// New animation styles with popup effect
const animationStyles = `
  @keyframes popupEffect {
    0% {
      opacity: 0;
      transform: scale(0.7) translateY(30px);
    }
    70% {
      transform: scale(1.05) translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .prize-card-container {
    opacity: 0;
    transform: scale(0.7) translateY(30px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .prize-card-container.animate {
    animation: popupEffect 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
  }

  .prize-card-container:nth-child(1).animate {
    animation-delay: 0.1s;
  }

  .prize-card-container:nth-child(2).animate {
    animation-delay: 0.3s;
  }

  .prize-card-container:nth-child(3).animate {
    animation-delay: 0.5s;
  }
  
  .custom-spotlight-card {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .custom-spotlight-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Prizes = () => {
  // Create refs for each prize section
  const championshipRef = useRef(null);
  const trackRef = useRef(null);
  const specialRef = useRef(null);

  useEffect(() => {
    // Add animation styles to document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = animationStyles;
    document.head.appendChild(styleSheet);

    // Set up intersection observer
    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.2 // 20% of the element needs to be visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When section comes into view, add animation class to all cards
          const cards = entry.target.querySelectorAll('.prize-card-container');
          cards.forEach(card => {
            card.classList.add('animate');
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all three prize sections
    if (championshipRef.current) observer.observe(championshipRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    if (specialRef.current) observer.observe(specialRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  // Prize card component to avoid repeating code
  const PrizeCard = ({ image, position, prize, color , money }) => {
    return (
      <div className="prize-card-container">
        <SpotlightCard 
          className="custom-spotlight-card h-[14rem] md:h-[28rem] flex flex-col items-center justify-center text-center" 
          spotlightColor={color}
        >
          <div className='relative flex flex-col items-center justify-center w-full'>
            <div className="h-[7rem] w-[9rem] md:h-[15rem] md:w-[15rem] flex items-center justify-center">
              <img 
                className='w-[15rem] h-[15rem] object-contain' 
                src={image} 
                alt={`${position} prize`} 
              />
            </div>
            <h1 
              className='text-xl md:text-3xl text-white mt-4' 
              dangerouslySetInnerHTML={{ __html: position }}
            ></h1>
            <p className='text-base md:text-2xl text-stone-300 font-normal'>{prize}</p>
            <p className='text-lg md:text-6xl  text-amber-300 font-extrabold'>{money}</p>
          </div>
        </SpotlightCard>
      </div>
    );
  };

  // Common styles for award sections to ensure consistent width in mobile view
  const awardSectionStyle = {
    borderRadius: "25px",
    border: "2px solid rgb(133, 179, 252)",
    boxShadow: "0px 0px 10px 10px rgba(0, 238, 255, 0.09)",
    transition: "background 0.5s ease-in-out, box-shadow 0.3s ease-in-out",
    maxWidth: "calc(100% - 2rem)"
  };
  

  const headingStyle = {
    background: "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "opacity 0.5s ease-in-out",
    display: "inline-block",
    paddingBottom: "5px",
  };

  return (
    <div id='prizes' className='pt-16 pb-4 md:pt-24 md:px-32'>
      <div>
        <h1 className="text-4xl text-center md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
          Prizes Pool
        </h1>
                
        {/* Championship Awards */}
        <div className='flex flex-col items-center justify-center'>
          <div 
            ref={championshipRef} 
            className='mx-4 text-center max-w-6xl' 
            style={awardSectionStyle}
          >
            <h1 className="z-20  my-8 text-center text-4xl font-bold text-white" style={headingStyle}>
              Championship Awards
            </h1>

            <div className='flex flex-col md:flex-row gap-8 px-4 md:px-8 py-4 justify-center'>
              <PrizeCard 
                image={first} 
                position="1st Position" 
                prize="Prize Worth" 
                money="50K"
                color="#96151F"
              />
              <PrizeCard 
                image={second} 
                position="2nd Position" 
                prize="Prize Worth" 
                money="45K"
                color="#21B916"
              />
            </div>
          </div>
        </div>

        {/* Special Awards */}
        <div className='flex flex-col items-center justify-center w-full mt-10 md:mt-14'>
          <div 
            ref={specialRef} 
            className='mx-4 text-center w-full md:w-auto max-w-6xl' 
            style={awardSectionStyle}
          >
            <h1 className="z-20 my-8 text-center text-4xl font-bold text-white" style={headingStyle}>
              Special Awards
            </h1>

            <div className='flex flex-col md:flex-row  gap-8 px-4 md:px-8 py-4 justify-center'>
              <PrizeCard 
                image={social} 
                position="Social Impact Award" 
                prize="Prize Pool" 
                money="25K"
                color="#21B916"
              />
              <PrizeCard 
                image={girls} 
                position="Best Girls Team" 
                prize="Prize Pool" 
                money="25K"
                color="#21B916"
              />
              <PrizeCard 
                image={inovation} 
                position="Innovation Award" 
                prize="Prize Pool" 
                money="25K"
                color="#21B916"
              />
              {/* <PrizeCard 
                image={offline3} 
                position="3rd Position" 
                prize="10,000" 
                color="#2275FA"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;

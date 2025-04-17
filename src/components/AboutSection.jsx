import React, { useEffect, useRef, useState } from 'react';
import "../styles/about.css";
import Particles from '../components/ui/Particles.jsx';
import ash from "../assets/ash.png";
import pika from "../assets/pika.png";


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.6 } // Trigger when 20% of the element is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      id='about' 
      className='relative min-h-screen'
      ref={sectionRef}
    >

      {/* Main content container - Added responsive padding */}
      <div className='absolute top-28 md:pl-20 pl-4 w-full md:mt-14 '>
        <div className='h-full flex flex-col'>
          <div>
            {/* <h1 
              className={`z-10 text-5xl md:text-[7rem] mb-10 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-16'
              }`} 
              style={{ 
                fontWeight: "500",
                fontFamily: "'Fredoka One', sans-serif",
                WebkitTextStroke: "6px #0A3B89",
                WebkitTextFillColor: "#EEC212"
              }}
            >
              <span>About</span>
            </h1> */}
        <h1 className="text-4xl  text-center  md:text-left  md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600  font-sans font-bold mb-8">
          About Hackémon
        </h1>
          </div>

          {/* Changed to flex-col on mobile, kept grid on desktop */}
          <div className='md:grid md:grid-cols-2 flex flex-col'>
            <div className='w-full'>
              <p 
                className={`p-8 text-justify text-white md:p-12 z-40 text-base md:text-[1.4rem] leading-8 relative transition-all duration-1000 delay-300 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-16'
                }`}
                style={{
                  borderRadius: "25px",
                  border: "2px solid #2275FA",
                  // background: "radial-gradient(circle, rgba(1, 183, 255, 0.17) 0%, rgba(233, 242, 255, 0.2) 50%, rgba(233, 242, 255, 0.2) 100%)",
                  boxShadow: "0px 00px 10px 10px rgba(255,255,255,0.1)",
                  transition: "background 0.5s ease-in-out, opacity 1s ease-in-out, transform 1s ease-in-out",
                }}
              >
                Hackémon is an exciting 36-hour hackathon organized by the rapidly growing tech community SheBuilds. Inspired by the versatile character Pokémon, the hackathon challenges participants to showcase their creativity and problem-solving skills. With an amazing prize pool and exclusive goodies for participants, Hackemon promises to be an unforgettable experience for tech enthusiasts! 🌟
              </p>
            </div>
            
            {/* Adjust positioning for mobile */}
            <div className='md:absolute relative mt-8 md:mt-0 z-40 md:right-36 flex justify-center md:block md:top-10'>
              <div className="relative group">
                <img  
                  className={`md:w-[16rem] hidden md:inline w-[10rem] relative shadow-none drop-shadow-[0px_60px_60px_rgba(0,0,0,1)] transition-all duration-1000 delay-600 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 rotate-0' 
                      : 'opacity-0 -translate-y-16 -rotate-12'
                  }`} 
                  src={ash} 
                  alt='ash' 
                />
              </div>

              <div className="relative group">
                <img  
                  className={` md:w-[10rem] w-[6rem] relative md:bottom-[14.6rem] bottom-[8rem] md:right-[6rem] -right-[7.6rem] shadow-none drop-shadow-[0px_60px_60px_rgba(0,0,0,1)] transition-all duration-1000 delay-900 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 bounce-animation' 
                      : 'opacity-0 translate-y-16'
                  }`} 
                  src={pika} 
                  alt='pika' 
                />
                
                <div className={`absolute md:bottom-16 bottom-8 md:-left-40 left-20 text-center font-sans rounded-xl md:bottom-[25rem] bottom-[15rem] transform -translate-x-1/2 bg-blue-600 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-lg transition-all duration-500 ${
                  isVisible && 'group-hover:opacity-100'
                } opacity-0`}>
                  Register for Hackémon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
import React, { useRef, useEffect, useState } from 'react';
import VariableProximity from './ui/VariableProximity.jsx';
import hoverrobotix from "../assets/hoverrobotix.png";

const SponsorTrack = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Make sure the font is loaded
  useEffect(() => {
    // Add Google Fonts link if not already in document
    if (!document.getElementById('roboto-flex-font')) {
      const link = document.createElement('link');
      link.id = 'roboto-flex-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..1000&display=swap';
      document.head.appendChild(link);
    }
    
    // Set up intersection observer to detect when section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only trigger animation once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
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
    <div ref={sectionRef} className='mt-20 mb-20 text-center md:px-20 overflow-hidden'>
      <h1 className="text-4xl text-center md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
        Sponsor Track
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex items-center justify-center'>
          <div 
            className="overflow-hidden rounded-lg"
            style={{ 
              maxWidth: '100%',
              transform: isInView ? 'translateX(0)' : 'translateX(-30%)',
              opacity: isInView ? 1 : 0,
              transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
            }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img 
              className='w-full object-contain'
              src={hoverrobotix} 
              alt="Hover Robotix Logo" 
              style={{
                maxHeight: '300px',
                transform: isImageHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
                transformOrigin: 'center',
              }}
            />
          </div>
        </div>
        <div 
          className='flex flex-col'
          style={{ 
            transform: isInView ? 'translateX(0)' : 'translateX(10%)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
            transitionDelay: '0.2s'
          }}
        >
          <h2 className='text-3xl text-amber-200/80 font-extrabold text-center mb-4'>Problem Statement</h2>
          <div
            ref={containerRef}
            style={{ 
              position: 'relative',
              padding: '20px',
              minHeight: '150px',
              cursor: 'default',
              textAlign: 'left'
            }}
          >
            <VariableProximity
              label="Design and develop a mobile application that simulates integration with personal electric vehicles or delivery robots, enabling performance monitoring, route planning, safety features, and eco-friendly usage insights — all without the need for physical hardware"
              style={{
                fontSize: '1.4rem',
                lineHeight: '1.6',
                fontFamily: '"Roboto Flex", sans-serif',
                transition: 'all 0.1s ease-out',
                display: 'inline-block',
                textAlign: 'left'
              }}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 800, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorTrack;
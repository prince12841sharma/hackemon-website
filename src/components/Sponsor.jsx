import React, { useEffect, useRef, useState } from 'react';
import { WobbleCard } from "../components/ui/wobble-card.jsx";
import bluecolor from "../assets/gif/bluecolor.gif";
import turtle from "../assets/gif/turtle.gif";
import char from "../assets/gif/char.gif";

import geekroom from "../assets/sponsor/geekroom.png"
import gcet from "../assets/sponsor/gcet.jpg"

const Sponsor = () => {
  // Sponsor data with name, image URL and website URL
  const sponsors = [
    {
      name: "GeekRoom",
      imageUrl: geekroom,
      websiteUrl: "https://www.geekroom.in/"
    },
    {
      name: "Galgotias College of Engineering & Technology",
      imageUrl: gcet,
      websiteUrl: "https://galgotiacollege.edu/"
    },

  ];

  return (
    <div id="sponsors" className="pb-20 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 mb-4">
          Our Sponsors
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          We're proud to partner with these amazing organizations making our event possible
        </p>
      </div>

      {/* Platinum Sponsors */}
      <div className="mb-16 relative">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white border-b border-amber-500 pb-2 max-w-xs mx-auto">
          Platinum Sponsors
        </h2> */}
        <div
          className="hidden md:inline md:absolute z-90 right-20 -top-16 md:-top-16 w-32 h-32 md:w-56 md:h-56  pointer-events-none"
          style={{
            backgroundImage: `url(${bluecolor})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.slice(0, 1).map((sponsor, index) => (
            <SponsorCard 
              key={index}
              sponsor={sponsor} 
              index={index}
              size="large"
              cardClass="bg-gradient-to-br from-zinc-300/50 to-zinc-400/90 rounded-xl p-6 border border-zinc-700 h-80"
              imageClass="h-48"
              titleClass="text-xl font-semibold text-white"
              linkClass="text-amber-500 mt-2 hover:underline block"
            />
          ))}
        </div>
      </div>


      <h1 className="text-4xl text-center md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 mb-4">
          Venue Partner
        </h1>
        <p className="text-white text-center mb-16 text-lg md:text-xl max-w-3xl mx-auto opacity-80">
  We're grateful to our venue partner for providing the perfect space to bring our event to life
</p>


        <div
          className="hidden md:inline md:absolute z-90 right-20 -top-16 md:-top-16 w-32 h-32 md:w-56 md:h-56  pointer-events-none"
          style={{
            backgroundImage: `url(${bluecolor})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.slice(1, 2).map((sponsor, index) => (
            <SponsorCard 
              key={index}
              sponsor={sponsor} 
              index={index}
              size="large"
              cardClass="bg-gradient-to-br from-zinc-300/50 to-zinc-400/90 rounded-xl p-6 border border-zinc-700 h-80"
              imageClass="h-48"
              titleClass="text-xl font-semibold text-white"
              linkClass="text-amber-500 mt-2 hover:underline block"
            />
          ))}
        </div>

      {/* gold sponsor */}
      {/* <div className="mb-16 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white border-b border-amber-400 pb-2 max-w-xs mx-auto">
          Gold Sponso
        </h2>
        <div 
          className="hidden md:inline md:absolute z-90 -left-10 -top-16 md:-top-16 w-40 h-40 md:w-[20rem] md:h-[20rem]  pointer-events-none"
          style={{
            backgroundImage: `url(${char})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="flex flex-wrap justify-center gap-6">
          {sponsors.slice(1, 2).map((sponsor, index) => (
            <SponsorCard 
              key={index} 
              sponsor={sponsor} 
              index={index}
              size="medium"
              cardClass="bg-gradient-to-br from-zinc-400 to-zinc-700 rounded-xl p-5 border border-zinc-700 h-64"
              imageClass="h-36"
              titleClass="text-lg font-semibold text-white"
              linkClass="text-amber-400 mt-1 text-sm hover:underline block"
            />
          ))}
        </div>
      </div> */}

     
        {/* <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white border-b border-gray-400 pb-2 max-w-xs mx-auto">
            Venue Partner
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.slice(1, 2).map((sponsor, index) => (
              <SponsorCard 
                key={index} 
                sponsor={sponsor} 
                index={index}
                size="small"
                cardClass="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-4 border border-zinc-700 h-52"
                imageClass="h-32"
                titleClass="text-base font-medium text-white"
                linkClass="text-gray-300 mt-1 text-xs hover:underline block"
              />
            ))}
          </div>
        </div> */}

    </div>
  );
};

// Sponsor Card Component with fade-in animation
const SponsorCard = ({ sponsor, index, size, cardClass, imageClass, titleClass, linkClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);
  
  // Set width based on size prop
  let containerClass = "";
  switch(size) {
    case "large":
      containerClass = "w-full sm:w-96 max-w-md";
      break;
    case "medium":
      containerClass = "w-full sm:w-72 max-w-sm";
      break;
    case "small":
      containerClass = "w-full sm:w-56 max-w-xs";
      break;
    default:
      containerClass = "w-full sm:w-64";
  }

  // Setup intersection observer to detect when card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation if it hasn't been shown yet
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          // Once animation is triggered, we can unobserve this element
          observer.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.1,  // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Slightly above bottom viewport
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);
  
  // Calculate animation delay based on index for cascade effect
  const animationDelay = `${index * 150}ms`;
  
  return (
    <a 
      href={sponsor.websiteUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`block ${containerClass} transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'
      }`}
      ref={cardRef}
      style={{ transitionDelay: animationDelay }}
    >
      <WobbleCard className={cardClass}>
        <div className="flex flex-col items-center justify-between h-full">
          <div className={`flex items-center justify-center ${imageClass} w-full overflow-hidden`}>
            <img 
              src={sponsor.imageUrl} 
              alt={`${sponsor.name} logo`} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className={titleClass}>{sponsor.name}</h3>
            <span className={linkClass}>Visit website</span>
          </div>
        </div>
      </WobbleCard>
    </a>
  );
};

export default Sponsor;
import React from "react";
import footerbg from "../assets/footerBg.png";
import abesitlogo from "../assets/abesitlogo.png";
import whatsapplogo from "../assets/whatsapplogo.png";
import instalogo from "../assets/instalogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
import discordlogo from "../assets/discordlogo.png";
import xxxlogo from "../assets/xxxlogo.png";
import linktreelogo from "../assets/linktreelogo.png";
import Map from "./Map";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/faq");
    window.scrollTo(0, 0); // Scroll to the top
  };

  return (
    <div
      className="w-full bg-cover bg-center relative px-4 sm:px-8 py-10 text-white  flex flex-col items-center"
      style={{ 
        backgroundImage: `url(${footerbg})`,

      }}
    >
      {/* Newspaper Border Top - using simple zigzag border instead of SVG */}

      
      {/* Header Section styled as newspaper headline */}
      <div className="relative flex flex-col w-full max-w-[1200px] mx-auto mb-8 mt-4 border-b-2 border-amber-800/50 pb-4">
        <div className="flex flex-col items-center">

          
          {/* Main Headline */}
          <h2 className="text-3xl  md:text-5xl xl:text-6xl text-amber-400 font-serif font-bold text-center mt-16 mb-2 leading-tight"
              style={{ 
                textShadow: "4px 4px 8px rgba(0,0,0,1)",
                fontVariant: "small-caps" 
              }}>
            HACKNOVATE 6.0
          </h2>
          
          {/* Subheading */}
          <p className="text-base md:text-lg text-amber-200 italic text-center mb-2">
            "The Most Extraordinary Coding Competition of Our Time"
          </p>
          
          {/* ABESIT Logo as newspaper masthead */}
          <div className="flex items-center justify-center mt-2">
            <img
              src={abesitlogo}
              alt="ABESIT"
              className="w-28 md:w-32 mx-2"
              style={{ filter: "sepia(20%) brightness(1.2)" }}
            />
            <div className="text-left border-l-2 border-amber-700/50 pl-4 ml-2">
              <h3 className="text-base md:text-xl font-serif text-amber-200 whitespace-nowrap">
                ABESIT Group of Institutions
              </h3>
              <p className="text-xs md:text-sm text-amber-300/80 italic">
                "Where Magic Meets Technology"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Wrapper styled as newspaper columns */}
      <div className="relative flex flex-col md:flex-row justify-between w-full max-w-[1200px] gap-8 md:gap-6 px-2 md:px-4">
        
        {/* Left Column - Social Links */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="border-b-2 border-amber-800/50 mb-4 pb-2">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300 uppercase tracking-wide">
              Ministry Contacts
            </h2>
          </div>
          
          <p className="text-amber-100/90 text-sm mb-4 italic">
            Connect with us through these magical communication channels:
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { src: instalogo, alt: "Instagram", name: "Moving Pictures" , href:"https://www.instagram.com/hacknovate.abesit" },
              { src: discordlogo, alt: "Discord", name: "Common Room" , href:"https://discord.com/invite/kaGJwHqW8t" },
              { src: linktreelogo, alt: "Linktree", name: "Floo Network" , href:"https://bio.link/hacknovate" },
              { src: linkedinlogo, alt: "LinkedIn", name: "Ministry Records" , href:"https://www.linkedin.com/company/hacknovate/" },
              { src: xxxlogo, alt: "Other", name: "Secret Society" , href:"https://x.com/hacknovate" },
            ].map((icon, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-amber-900/30 rounded-lg p-2 hover:bg-amber-800/50 transition duration-300">
                <a href={icon.href}> 
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-10 h-10 md:w-12 md:h-12 transition duration-300 ease-in-out"
                    style={{ filter: "sepia(20%)" }}
                  />
                  </a>
                </div>
                <span className="text-amber-200 text-xs mt-1 text-center">{icon.name}</span>
              </div>
            ))}
          </div>

          
          <div className="mt-8 pl-4">
            <div className="flex justify-center items-center"> 
              <span className="text-2xl cursor-pointer" onClick={handleNavigation}>
                  <span className="text-xl">Hacknovate 6.0 FAQs</span> 📜
              </span>
            </div>
          </div>

        </div>


        {/* Center Column - Map styled as magical artifact */}
        <div className="w-full md:w-1/3 flex flex-col border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 border-amber-800/30 py-6 md:py-0 md:px-6">
          <div className="border-b-2 border-amber-800/50 mb-4 pb-2">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300 uppercase tracking-wide text-center">
              Location Charm
            </h2>
          </div>
          
          <div className="w-full max-w-xs sm:max-w-sm mx-auto relative">
            {/* Parchment-like border */}
            <div className="absolute -inset-2 bg-amber-900/20 rounded-lg -z-10"></div>
            <div className="relative overflow-hidden rounded-lg border-2 border-amber-800/70">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-800/10 to-transparent pointer-events-none z-10"></div>
              <Map />
            </div>
          </div>
          
          <p className="mt-4 text-sm md:text-base text-center text-amber-100/90 italic">
            <span className="font-bold not-italic">Address:</span> ABESIT Campus Road, NE
            3, near Crossing Republic, Ghaziabad, Uttar Pradesh{" "}
            <span className="font-bold not-italic">201009</span>
          </p>
        </div>

        {/* Right Column - Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="border-b-2 border-amber-800/50 mb-4 pb-2">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300 uppercase tracking-wide">
              Owl Post Details
            </h2>
          </div>
          
          <div className="flex flex-col space-y-4 text-amber-100/90">
            <div className="flex items-start border-l-2 border-amber-800/50 pl-3">
              <div>
                <h3 className="font-serif font-bold text-amber-300">By Owl:</h3>
                <p className="text-sm md:text-base">hacknovate@abesit.edu.in</p>
              </div>
            </div>
            
            <div className="flex items-start border-l-2 border-amber-800/50 pl-3">
            <div>
  <h3 className="font-serif font-bold text-amber-300">By Enchanted Telephone:</h3>
  <p className="text-sm md:text-base">
    <a href="http://wa.me/919103226627" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
      +91 91032 26627 - Sushant Sharma
    </a>
  </p>
  <p className="text-sm md:text-base">
    <a href="http://wa.me/917302330762" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
      +91 73023 30762 - Abhinav Gupta
    </a>
  </p>
  <p className="text-sm md:text-base">
    <a href="http://wa.me/918273738353" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
      +91 82737 38353 - Keshav Bajaj
    </a>
  </p>
</div>

            </div>
            
            <div className="mt-4 p-4 bg-amber-900/20 rounded-lg border border-amber-800/30">
              <h3 className="font-serif font-bold text-amber-300 text-center mb-2">DAILY PROPHET NOTICE</h3>
              <p className="text-sm text-amber-100/90 italic text-center">
                "The grand event shall commence when the moon is high. Bring your wands (laptops) and prepare for a magical competition like no other!"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newspaper Footer */}
      <div className="w-full max-w-[1200px] mt-8 pt-4 border-t-2 border-amber-800/50 text-center">
        <p className="text-amber-200/90 text-xs md:text-sm font-serif">
          © 2025 The Hacknovate Herald | All Rights Reserved | "Mischief Managed"
        </p>
        <p className="text-amber-300/70 text-xs mt-1 italic">
          Printed by ABESIT Magical Press
        </p>
      </div>
      
      {/* Newspaper Border Bottom - using simple zigzag border instead of SVG */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-amber-800/40"></div>
      <div className="absolute bottom-6 left-0 w-full h-2 bg-amber-700/30" 
           style={{ clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)" }}>
      </div>
    </div>
  );
};

export default Footer;
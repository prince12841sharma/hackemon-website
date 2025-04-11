import React from "react";
import footerbg from "../assets/footer/footerBg.png"
import instalogo from "../assets/footer/instalogo.png";
import linkedinlogo from "../assets/footer/linkedinlogo.png";
import discordlogo from "../assets/footer/discordlogo.png";
import xxxlogo from "../assets/footer/xxxlogo.png";
import linktreelogo from "../assets/footer/linktreelogo.png";
import Map from "./Map";
import { useNavigate } from "react-router-dom";
import shebuild from "../assets/logo.png";
import {Link} from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/faq");
    window.scrollTo(0, 0); // Scroll to the top
  };

  return (
    <div
      className=" w-full mt-0 bg-cover bg-center relative px-4 sm:px-8 text-white flex flex-col items-center bg-slate-950"
    >
      {/* Header Section styled as Pokémon League announcement */}
      <div className="relative flex flex-col w-full max-w-[1200px] mx-auto mb-8 mt-4 border-b-2 border-neutral-400 pb-4">
        <div className="flex flex-col items-center">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl xl:text-6xl text-amber-400 font-serif font-bold text-center mt-16 mb-2 leading-tight"
              style={{ 
                textShadow: "4px 4px 8px rgba(0,0,0,1)",
                fontVariant: "small-caps", 
                fontFamily: "'Fredoka One', sans-serif",
              }}>
            Hackémon
          </h2>
          
          {/* Subheading */}
          <p className="text-base md:text-lg text-amber-200 italic text-center mb-2">
            "To Code Them Is My Real Test, To Build Them Is My Cause!"
          </p>
          
          {/* ABESIT Logo as Pokémon Gym badge */}
          <div className="flex items-center justify-center mt-2">
            <a href="https://www.shebuilds.tech/">
            <img
              src={shebuild}
              alt="ABESIT"
              className="w-32 md:w-36 mx-2"
              style={{ filter: "sepia(20%) brightness(1.2)" }}
              />
              </a>
            <div className="text-left border-l-2 border-amber-700/50 pl-4 ml-2">
              <h3 className="text-base md:text-xl font-serif text-amber-200 whitespace-nowrap">
                Shebuilds
              </h3>
              <p className="text-xs md:text-sm text-amber-300/80 italic">
                "Gotta Code 'Em All!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Wrapper styled as Pokémon regions */}
      <div className="relative flex flex-col md:flex-row justify-between w-full max-w-[1200px] gap-8 md:gap-6 px-2 md:px-4">
        
        {/* Left Column - Social Links */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="border-b-2 border-neutral-400 mb-4 pb-2">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300 uppercase tracking-wide">
              Pokémon Centers
            </h2>
          </div>
          
          <p className="text-amber-100/90 text-sm mb-4 italic">
            Connect with us through these Pokémon communication channels:
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { src: instalogo, alt: "Instagram", name: "Instamon", href: "https://www.instagram.com/shebuildshack?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
              { src: discordlogo, alt: "Discord", name: "Pokéchat", href: "https://discord.com/invite/AJkQDnDg" },
              // { src: linktreelogo, alt: "Linktree", name: "Link Cable", href: "https://bio.link/" },
              { src: linkedinlogo, alt: "LinkedIn", name: "Trainer Network", href: "https://www.linkedin.com/company/shebuildshack/" },
              { src: xxxlogo, alt: "Other", name: "PokéTweet", href: "https://x.com/shebuildshack?t=wPGe1_FzF-be4N8OVPM_Kw&s=09" },
            ].map((icon, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-purple-500/50 rounded-lg p-2 hover:bg-purple-700/50 transition duration-100">
                  <a href={icon.href}> 
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-10 h-10 md:w-12 md:h-12 transition duration-100 ease-in-out"
                      style={{ filter: "sepia(20%)" }}
                    />
                  </a>
                </div>
                <span className="text-amber-200 text-xs mt-1 text-center">{icon.name}</span>
              </div>
            ))}
          </div>
            <div className="text-center pt-8"> 
              <Link className="text-2xl" to="/faq"> Frequently Asked Question ➝  </Link>
            </div>
        </div>

        {/* Center Column - Map styled as Pokémon region map */}
        <div className="w-full md:w-1/3 flex flex-col border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 border-stone-300 py-6 md:py-0 md:px-6">
          <div className="border-b-2 border-neutral-400 mb-4 pb-2">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300 uppercase tracking-wide text-center">
              Region Map
            </h2>
          </div>
          
          <div className="w-full max-w-xs sm:max-w-sm mx-auto relative">
            {/* PokéNav-like border */}
            <div className="absolute -inset-2 bg-amber-900/20 rounded-lg -z-10"></div>
            <div className="relative overflow-hidden rounded-lg border-2 border-stone-500">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-800/10 to-transparent pointer-events-none z-10"></div>
              <Map />
            </div>
          </div>
          
          <p className="mt-4 text-sm md:text-base text-center text-amber-100/90 italic">
            <span className="font-bold not-italic">Gym Location:</span> Shebuids Community{" "}
          </p>
        </div>

        {/* Right Column - Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="border-b-2 border-neutral-400 mb-4 pb-2">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-amber-300 uppercase tracking-wide">
              Pokémon Professor Contacts
            </h2>
          </div>
          
          <div className="flex flex-col space-y-4 text-amber-100/90">
            <div className="flex items-start border-l-2 border-neutral-400 pl-3">
              <div>
                <h3 className="font-serif font-bold text-amber-300">By PokéMail:</h3>
                <p className="text-sm md:text-base"> shebuilds.hacks@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start border-l-2 border-neutral-400 pl-3">
              <div>
                <h3 className="font-serif font-bold text-amber-300">By PokéGear:</h3>
                <p className="text-sm md:text-base">
                  <a href="http://wa.me/+917065924258" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                    +91 70659 24258 - Nikita
                  </a>
                </p>
                <p className="text-sm md:text-base">
                  <a href="http://wa.me/+919911937945" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                    +91 99119 37945 - Ekta
                  </a>
                </p>
                <p className="text-sm md:text-base">
                  <a href="http://wa.me/+918824487707" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                  +91 88244 87707 - Shikhar
                  </a>
                </p>
                <p className="text-sm md:text-base">
                  <a href="http://wa.me/+919990461758" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                  +91 99904 61758 - Teeksha
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-purple-400/10 rounded-lg border border-stone-300">
              <h3 className="font-serif font-bold text-amber-300 text-center mb-2">POKÉMON LEAGUE NOTICE</h3>
              <p className="text-sm text-amber-100/90 italic text-center">
                "The grand tournament shall commence soon! Bring your Pokémon (laptops) and prepare for a coding battle like no other! Your code journey awaits!"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full max-w-[1200px] mt-8 pt-4 border-t-2 border-neutral-400 text-center">
        <p className="text-amber-200/90 text-xs md:text-sm font-serif">
          © 2025 The Pokémon League | All Rights Reserved | "Battle Complete!"
        </p>
        <p className="text-amber-300/70 text-xs mt-1 italic">
          Printed by Shebuilds Pokémon Press
        </p>
      </div>
      
      {/* Decorative Bottom Border - using Poké Ball pattern */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-stone-800/40"></div>
      <div className="absolute bottom-6 left-0 w-full h-2 bg-stone-700/30" 
           style={{ clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)" }}>
      </div>
    </div>
  );
};

export default Footer;
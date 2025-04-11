import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex text-white items-center px-2 md:px-6 py-0 absolute z-[10]" 
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <div className="flex justify-between items-center w-full">
      <div className='flex'>
      <div>
        <a href="https://www.shebuilds.tech/">
          <img className="w-[9.5rem] md:w-[14.5rem] md:h-[5.68rem]" src={logo} alt="She Build Logo" />
        </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
  <Link 
    className='font-bold text-lg relative group' 
    href="#about"
    to="/"
  >
    About
    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
  <Link 
    to="/team"
    className='font-bold text-lg relative group' 
    href="#team"
  >
    Team
    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
  <Link 
    to="/events"
    className='font-bold text-lg relative group' 
    href="#events"
  >
    Events
    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
  <Link 
    to="/contact"
    className='font-bold text-lg relative group' 
    href="#contactus"
  >
    Contact Us
    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
  <Link 
    to="/joinus"
    className='font-bold text-lg relative group glowing-border' 
    href="#joinus"
  >
    Join Us
    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>
</div>
      </div>
    <div className='hidden md:inline'>
 
    </div>


        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-[5.68rem] left-0 w-full bg-black bg-opacity-90 transition-all duration-300 md:hidden overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col justify-start px-10 py-4 gap-6">
          <Link 
            to="/"
            className='font-bold text-sm relative group' 
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link 
            to="team"
            className='font-bold text-sm relative group' 
            href="#team"
            onClick={() => setMenuOpen(false)}
          >
            Team
            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link 
            to="events"
            className='font-bold text-sm relative group' 
            href="#events"
            onClick={() => setMenuOpen(false)}
          >
            Events
            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link 
            to="contact"
            className='font-bold text-sm relative group' 
            href="#contactus"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link 
            to="joinus"
            className='font-bold text-sm relative group' 
            href="#joinus"
            onClick={() => setMenuOpen(false)}
          >
            Join Us
            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          {/* <Link 
            to="sponsor"
            className='font-bold text-sm relative group' 
            href="#sponsor"
            onClick={() => setMenuOpen(false)}
          >
            Sponsor Us
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
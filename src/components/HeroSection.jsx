import React from 'react'
import { motion } from 'framer-motion'
import moon from "../assets/Moon.png"
import pika from "../assets/pikachu.png"
import "../styles/herosection.css"
import ShiftingCountdown from './ShiftingCountdown.jsx'
import Dock from '../components/ui/Dock.jsx';
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'

const Herosection = () => {

  // Updated items array with actual URLs to redirect to
  const items = [
    { 
      icon: <SiDiscord size={18} />, 
      label: 'Discord', 
      onClick: () => window.open('https://discord.com/invite/AJkQDnDg', '_blank')
    },
    { 
      icon: <FiInstagram size={18} />, 
      label: 'Instagram', 
      onClick: () => window.open('https://www.instagram.com/shebuildshack?igsh=MWd6d3k0MWFzNm4yMw==', '_blank') 
    },
    { 
      icon: <FiTwitter size={18} />, 
      label: 'Twitter', 
      onClick: () => window.open('https://x.com/shebuildshack?t=wPGe1_FzF-be4N8OVPM_Kw&s=09', '_blank') 
    },
    { 
      icon: <FiLinkedin size={18} />, 
      label: 'Linkedin', 
      onClick: () => window.open('https://www.linkedin.com/company/shebuildshack/', '_blank') 
    },
  ];

  // Animation variants for the title
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  }

  // Animation variants for the dock
  const dockvariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  }

  // Animation variants for the register button
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        delay: 0.3, 
        duration: 0.5, 
        type: "spring", 
        stiffness: 200 
      } 
    }
  }

  //div
  const timerdiv = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.9, 
        ease: "easeIn" 
      } 
    }
  }

  return (
    <div id='herosection' className="relative flex min-h-screen w-full overflow-hidden"
    
    >
      
      
      {/* Moon and Pikachu images container */}
      <div className='hidden  md:block absolute h-full right-0 md:w-3/4 md:block'>
        {/* Moon image - Adjusted for mobile */}
        <div className='absolute top-0 md:w-full md:left-60 left-0 scale-75 md:scale-100 origin-top-right md:origin-top-left'>
            <img
              className=' md:w-[80%] w-full md:h-[50%] moon-glow'
              src={moon}
              alt='moon'
            />
          </div>

        <div className='hidden  md:block absolute top-0 md:w-full md:left-[25rem] left-[40%] scale-75 md:scale-100'>
          <img           
            className='md:w-[50%] w-[70%] '  src={pika} alt='pikachu' />
        </div>

        <motion.div className='hidden md:block md:absolute z-[90] md:right-[22rem]  md:bottom-8'
          initial="hidden"
          animate="visible"
          variants={dockvariant}
          >
            
              <Dock 
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
          </motion.div>
        
        
      </div>

      {/* Hero Content Section */}
      <div className='h-[100%] w-full flex items-center'>
        <div className='pl-4 md:pl-10 flex w-full flex-col md:absolute pt-12 md:pt-0 w-full md:w-auto'>
          {/* Title with responsive text size and animation */}
          <motion.h1 
            className="text-[1rem] md:text-[8rem]"
            style={{ 
                fontWeight: "500",
                fontFamily: "'Fredoka One', sans-serif",
                WebkitTextStroke: "4px #0A3B89", // Thinner stroke for mobile
                WebkitTextFillColor: "#EEC212",
            }}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <span className='text-[3.5rem] md:text-[8rem]'>Hackémon</span>
          </motion.h1>
          
          {/* Register Button - Made responsive with animation */}
          <div className='flex justify-center md:justify-center'>
            <motion.button
              className="w-40 h-14 md:w-72 md:h-20 rounded-full border-3 md:border-5 border-[#E9836A] 
                        bg-rose-600 hover:bg-rose-700  shadow-md md:shadow-lg text-white font-bold flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              onClick={() => window.location.href = 'https://unstop.com/o/1a9RmCt?lb=msdOFslC'}
            >
              <p className="text-[#EEF2F8] cursor-pointer font-[Fredoka_One] text-2xl md:text-4xl font-extrabold leading-normal">
                Register
              </p>
            </motion.button>
          </div>

          <motion.div
          initial="hidden"
          animate="visible"
          variants={timerdiv}
           className="bg-white/10 flex justify-center items-center w-[70%] md:w-[60%] mx-auto mt-8 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-xl">               
                  <ShiftingCountdown />
          </motion.div>

        </div>
      </div>
          


    </div>
  )
}

export default Herosection

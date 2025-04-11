import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import car from "../assets/travel/car.jpg";
// import broomstick from "../assets/travel/broomstick.jpg";
// import train from "../assets/travel/train.jpg";

const GoogleMap = () => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <iframe
        style={{
          borderImageSource: "url('/footermapborder.png')",
          borderImageSlice: 14,
          borderWidth: "10px",
        }}
        title="Google Map"
        className="w-full h-72 lg:h-96 border-0 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4211901692296!2d77.4978!3d28.4571329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGCET!5e0!3m2!1sen!2sin!4v1711748612301!5m2!1sen!2sin"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-transparent text-gray-100 pt-32 min-h-screen px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-full mx-auto">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-purple-600 text-center mt-6 md:mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How to Reach Hackemon Hackathon by SheBuild
        </motion.h1>
        
        {/* Map at top with full width */}
        <div className="mb-6 md:mb-10">
          <GoogleMap />
        </div>
        
        <div className="px-0 sm:px-2 md:px-6 max-w-6xl mx-auto">
          
          <motion.div 
            className="mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="flex items-center font-extrabold justify-center text-lg md:text-xl mb-2">
              <span className="mr-2">📍</span> Venue: Galgotias College of Engineering & Technology
            </p>
            <a 
              href="https://www.google.com/search?q=gcet&rlz=1C1CHBF_enIN1094IN1094&oq=gcet&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGEMYgwEYsQMYgAQYigUyDQgCEC4YkQIYgAQYigUyBwgDEC4YgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNTk3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 font-extrabold hover:text-pink-400 transition"
            >
              View on Google Maps
            </a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-purple-900 p-4 md:p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3 md:mb-4">
                {/* <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <img src={car} alt="Car" className="w-full h-full object-cover" />
                </div> */}
                <h2 className="text-xl md:text-2xl font-bold text-pink-400">By Car</h2>
              </div>
              <p className="text-gray-200 text-sm md:text-base">
                You can directly navigate to the Hackemon Hackathon venue at GCET using Google Maps. 
                The venue is easily accessible via NH9 and is well-connected to major roads.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-purple-900 p-4 md:p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3 md:mb-4">
                {/* <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <img src={train} alt="Train" className="w-full h-full object-cover" />
                </div> */}
                <h2 className="text-xl md:text-2xl font-bold text-pink-400">By Train</h2>
              </div>
              <ul className="text-gray-200 space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <span className="font-semibold">From Ghaziabad Railway Station:</span> Book a cab or 
                  take an auto-rickshaw directly to the SheBuild Hackathon at Galgotias College of Engineering & Technology.
                </li>
                <li>
                  <span className="font-semibold">From New Delhi Railway Station:</span> Take the metro 
                  from New Delhi Metro Station (Yellow Line) to Noida Electronic City Metro 
                  Station (Blue Line). Then, book a cab or take an auto to GCET.
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-purple-900 p-4 md:p-6 rounded-lg shadow-lg md:col-span-2"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3 md:mb-4">
                {/* <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <img src={broomstick} alt="Air Travel" className="w-full h-full object-cover" />
                </div> */}
                <h2 className="text-xl md:text-2xl font-bold text-pink-400 leading-tight">By Air (Indira Gandhi International Airport, Delhi)</h2>
              </div>
              <ul className="text-gray-200 space-y-1 md:space-y-2 text-sm md:text-base">
                <li>
                  <span className="font-semibold">Option 1:</span> Book a cab directly to Hackemon Hackathon venue at Galgotias College of Engineering & Technology.
                </li>
                <li>
                  <span className="font-semibold">Option 2:</span> Take the metro from the airport to Noida 
                  Electronic City Metro Station (Blue Line) and then book a cab or take an auto to the venue.
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Organizer Contact Section */}
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-600 text-center mb-4 md:mb-8">SheBuild Organizer Contacts</h2>
            <div className="bg-purple-900 p-4 md:p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl">👩‍💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Bhawna</h3>
                      <a href="tel:+91 88513 63766" className="text-pink-300 hover:text-pink-200 text-sm md:text-base">+91 99970 72797</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl">👩‍💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold"> Manik</h3>
                      <a href="tel:+91 80594 22804" className="text-pink-300 hover:text-pink-200 text-sm md:text-base">+91 99993 09305</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl">👩‍💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Shikhar</h3>
                      <a href="tel:+91 88244 87707" className="text-pink-300 hover:text-pink-200 text-sm md:text-base">+91 95409 78070</a>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl">👩‍💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Teeksha</h3>
                      <a href="tel:+91 99904 61758" className="text-pink-300 hover:text-pink-200 text-sm md:text-base">+91 95409 78070</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
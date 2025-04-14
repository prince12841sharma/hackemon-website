import React from 'react';
import "../styles/theme.css";
import CircularGallery from '../components/ui/CircularGallery.jsx';



import mew from "../assets/gif/mew.gif";

const Theme = () => {


  return (
    <div id='theme' className='relative md:mt-40'>
      <div className='absolute top-0 w-full'>

        <div style={{ height: '600px', position: 'relative' }}>
          
          {/* Background GIF for h1 */}


          {/* Heading with Background GIF */}
          <h1 className="relative z-10 text-4xl md:absolute text-center pb-0 md:pl-20 text-left top-20 md:-top-10 md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
            Theme Tracks
            <div 
            className=" absolute -left-10 -top-16 md:-top-16 w-40 h-40 md:w-56 md:h-56 pointer-events-none"
            style={{
              backgroundImage: `url(${mew})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          ></div>
          </h1>

          <CircularGallery bend={3} textColor="#EEC212" borderRadius={0.05} />

          
        </div>
      </div>
    </div>
  );
}

export default Theme;

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

import WomensDay from "../assets/womensDay.png";
import pikabg from "../assets/pikabg.jpg";
import bird from "../assets/gif/bird.gif";

import meet from "../assets/previous_year/meet.jpg";
import allgirls from "../assets/previous_year/allgirls.jpg";
import shebuilds from "../assets/previous_year/shebuilds.jpg";
import group from "../assets/previous_year/group.jpg";


export const SmoothScrollHero = () => {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="relative hidden md:block pt-0 w-full pb-0 px-0 md:pb-[25rem]">
      {/* <Nav /> */}

      <Hero />
    </div>
  );
};


// Reduced section height for mobile view
const SECTION_HEIGHT_MOBILE = 800; 
const SECTION_HEIGHT_DESKTOP = 1100;

const Hero = () => {
  // Use useScroll to detect if we're on mobile or desktop based on viewport width
  const { scrollY } = useScroll();
  const isMobile = window.innerWidth < 768;
  const sectionHeight = isMobile ? SECTION_HEIGHT_MOBILE : SECTION_HEIGHT_DESKTOP;

  return (
    <div
      style={{ height: `calc(${sectionHeight}px +  100vh)` }}
      className=" relative w-full pb-20"
    >
            <h1 className="relative z-10 -top-16 text-4xl md:absolute text-center pb-0 md:pl-20 text-left  md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 font-sans font-bold mb-8">
        SheBuilds Glimpses  
        <div className=" absolute md:-top-10 -right-32">
          <img src={bird} alt="bird" />
        </div>
      </h1>
      <CenterTitle />
      <ParallaxImages />
      
      {/* Reduced height on mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-96" /> 
    </div>
  );
};

const CenterTitle = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [20, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [80, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT_DESKTOP + 500], ["200%", "120%"]);
  
  // Adjust fade out point for mobile to be earlier
  const isMobile = window.innerWidth < 768;
  const fadePoint = isMobile ? SECTION_HEIGHT_MOBILE : SECTION_HEIGHT_DESKTOP;
  const opacity = useTransform(scrollY, [fadePoint, fadePoint + 300], [1, 0]);

  return (
    <motion.div
      className="sticky mt-28 md:top-0 p-0 mx-auto h-[110vh] w-full flex flex-col items-center justify-center bg-white"
      style={{
        clipPath,
        opacity,
        backgroundSize,
      }}
    >

      {/* Removed the width constraint (w-11/12 md:w-4/5) to make it full width */}
      <div
        className="w-full h-full  flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${WomensDay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="">
          <h1 
            className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-stone-950 to-stone-900">Hackémon</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg mt-4"
        >
          <p className="text-base md:text-2xl text-white font-bold">Powered By - XYZ</p>
          <p className="text-sm md:text-lg text-gray-300 font-bold">Copowered By - ABC</p>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full flex justify-center mt-6"
        >
          
          <div className="bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-xl">
            <ShiftingCountdown />
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-[150px] md:pt-[200px]"> {/* Reduced top padding on mobile */}
      <ParallaxImg
        src={allgirls}
        alt="Space launch"
        start={-200}
        end={200}
        className="w-2/5 md:w-3/3"
      />
      <ParallaxImg
        src={shebuilds}
        alt="Rocket launch"
        start={200}
        end={-250}
        className="mx-auto w-4/5 md:w-3/3 mt-8 md:mt-16" /* Reduced vertical spacing on mobile */
      />
      <ParallaxImg
        src={meet}
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-2/5 md:w-1/3 mt-8 md:mt-16" /* Reduced vertical spacing on mobile */
      />
      <ParallaxImg
        src={group}
        alt="Satellite"
        start={0}
        end={-500}
        className="ml-12 md:ml-24 w-12/12 md:w-6/12 mt-8 md:mt-16 mb-8 md:mb-0" /* Added bottom margin only on mobile */
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  
  // Adjust parallax effect for mobile
  const isMobile = window.innerWidth < 768;
  const mobileStart = isMobile ? start * 0.6 : start; // Reduce parallax effect on mobile
  const mobileEnd = isMobile ? end * 0.6 : end;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${mobileStart}px end`, `end ${mobileEnd * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [mobileStart, mobileEnd]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
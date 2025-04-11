import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";
import { Linkedin } from "lucide-react";

export const ParallaxScroll = ({ images, className, names = [], linkedinIds = [] , roles }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Helper function to render an image card with hover effect
  const renderImageCard = (image, idx, columnIdx, translateY) => {
    // Calculate the actual index in the original array
    const actualIndex = idx + (columnIdx * third);
    
    // Get name if available, or use a placeholder
    const name = names[actualIndex] || `Team Member ${actualIndex + 1}`;

    // Get roles if available, or use a placeholder
    const role = roles[actualIndex] || `Team Member ${actualIndex + 1}`;
    
    // Get LinkedIn ID if available, or use a default
    const linkedinId = linkedinIds[actualIndex] || "demo-profile";
    
    return (
<motion.div 
  style={{ 
    y: typeof window !== 'undefined' && window.innerWidth < 640 ? 0 : translateY, 
    borderRadius: "20px"
  }} 
  key={`grid-${columnIdx + 1}-${idx}`}
  className="relative group overflow-hidden border-4 border-stone-400/50 mb-6 sm:mb-0"
>
        <img 
          src={image} 
          className="h-72 sm:h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 transition-transform duration-500 group-hover:scale-105" 
          alt={name} 
        />

        
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
          <a 
            href={`${linkedinId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          > 
            <Linkedin size={36} className="text-white mb-2" /> 
          </a>
          <h3 className="text-white text-lg font-medium">{name}</h3>
          <h4 className="text-white text-sm font-thin">( {role} )</h4>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={cn("items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto md:gap-10 pt-20 md:pb-60 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => renderImageCard(el, idx, 0, translateFirst))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => renderImageCard(el, idx, 1, translateSecond))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => renderImageCard(el, idx, 2, translateThird))}
        </div>
      </div>
    </div>
  );
};
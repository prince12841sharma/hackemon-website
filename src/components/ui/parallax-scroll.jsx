import { useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";
import { Linkedin } from "lucide-react";

export const ParallaxScroll = ({ images, className, names = [], linkedinIds = [], roles }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  // Calculate the three parts for desktop view
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Create a flattened array for mobile view to show cards in serial order
  const mobileOrderedImages = useMemo(() => {
    const ordered = [];
    const maxLength = Math.max(firstPart.length, secondPart.length, thirdPart.length);
    
    // Interleave the images to maintain the original order when displaying serially
    for (let i = 0; i < maxLength; i++) {
      if (i < firstPart.length) ordered.push({
        image: firstPart[i],
        index: i,
        column: 0
      });
      
      if (i < secondPart.length) ordered.push({
        image: secondPart[i],
        index: i,
        column: 1
      });
      
      if (i < thirdPart.length) ordered.push({
        image: thirdPart[i],
        index: i,
        column: 2
      });
    }
    
    return ordered;
  }, [firstPart, secondPart, thirdPart]);

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

  // Render the mobile card (for small screens)
  const renderMobileCard = (item) => {
    const actualIndex = item.index + (item.column * third);
    const name = names[actualIndex] || `Team Member ${actualIndex + 1}`;
    const role = roles[actualIndex] || `Team Member ${actualIndex + 1}`;
    const linkedinId = linkedinIds[actualIndex] || "demo-profile";
    
    return (
      <div 
        key={`mobile-grid-${item.column}-${item.index}`}
        className="relative group overflow-hidden border-4 border-stone-400/50 mb-6"
      >
        <img 
          src={item.image} 
          className="h-72 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 transition-transform duration-500 group-hover:scale-105" 
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
      </div>
    );
  };

  return (
    <div className={cn("items-start overflow-y-auto w-full", className)} ref={gridRef}>
      {/* Mobile View: Display in serial order (1,2,3,4...) */}
      <div className="grid grid-cols-1 md:hidden items-start max-w-5xl mx-auto pt-20 px-10">
        {mobileOrderedImages.map(renderMobileCard)}
      </div>
      
      {/* Desktop View: Original 3-column layout with parallax */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto md:gap-10 pt-20 md:pb-60 px-10">
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
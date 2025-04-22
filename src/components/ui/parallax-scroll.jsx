// parallax-scroll.jsx
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";
import { Linkedin } from "lucide-react";

export const ParallaxScroll = ({ teamMembers, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Create three columns with members distributed evenly
  const columnCount = 3;
  const columns = Array.from({ length: columnCount }, () => []);
  
  // Distribute members evenly across columns
  teamMembers.forEach((member, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(member);
  });

  // Helper function to render an image card with hover effect
  const renderImageCard = (member, columnIdx, translateY) => {
    return (
      <motion.div 
        style={{ 
          y: typeof window !== 'undefined' && window.innerWidth < 640 ? 0 : translateY, 
          borderRadius: "20px"
        }} 
        key={`${member.name}-${columnIdx}`}
        className="relative group overflow-hidden border-4 border-purple-100/10 mb-6 sm:mb-0"
      >
        <img 
          src={member.image} 
          className="h-72 sm:h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 transition-transform duration-500 group-hover:scale-105" 
          alt={member.name} 
        />
        
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          > 
            <Linkedin size={36} className="text-white mb-2" /> 
          </a>
          <h3 className="text-white text-lg font-medium">{member.name}</h3>
          <h4 className="text-white text-sm font-thin">( {member.role} )</h4>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={cn("items-start overflow-y-auto w-full", className)} ref={gridRef}>
      {/* Mobile View */}
      <div className="grid grid-cols-1 md:hidden items-start max-w-5xl mx-auto pt-20 px-10">
        {teamMembers.map((member, idx) => (
          <div 
            key={`mobile-${member.name}-${idx}`}
            className="relative group overflow-hidden border-4 border-stone-500/80 mb-6"
            style={{ borderRadius: "15px" }}
          >
            <img 
              src={member.image} 
              className="h-72 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 transition-transform duration-500 group-hover:scale-105" 
              alt={member.name} 
            />
            
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              > 
                <Linkedin size={36} className="text-white mb-2" /> 
              </a>
              <h3 className="text-white text-lg font-medium">{member.name}</h3>
              <h4 className="text-white text-sm font-thin">( {member.role} )</h4>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto md:gap-10 pt-20 md:pb-60 px-10">
        {/* First column */}
        <div className="grid gap-10">
          {columns[0].map((member) => renderImageCard(member, 0, translateFirst))}
        </div>
        
        {/* Second column */}
        <div className="grid gap-10">
          {columns[1].map((member) => renderImageCard(member, 1, translateSecond))}
        </div>
        
        {/* Third column */}
        <div className="grid gap-10">
          {columns[2].map((member) => renderImageCard(member, 2, translateThird))}
        </div>
      </div>
    </div>
  );
};
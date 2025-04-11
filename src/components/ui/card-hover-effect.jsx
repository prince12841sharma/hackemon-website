import { cn } from "../../lib/utils.js";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-zinc-200/80 to-zinc-900/80 block rounded-3xl border border-zinc-600/50"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image} isLive={item.isLive}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardFooter />
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children, image, isLive }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-gradient-to-br from-bg-purple-500 to-zinc-900/80 border border-zinc-700/70 group-hover:border-zinc-600/50 transition-all duration-300 relative z-20",
        className
      )}
    >
      {/* Image container with overlay gradient */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt="Event thumbnail" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
        </div>
      )}
      
      {/* Live badge */}
      {isLive && (
        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center z-10">
          <span className="h-2 w-2 bg-white rounded-full mr-1 animate-pulse"></span>
          LIVE NOW
        </div>
      )}
      
      <div className="relative z-50 p-6 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-white font-bold text-xl group-hover:text-amber-400 transition-colors", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-2 text-zinc-300 tracking-wide leading-relaxed text-sm flex-grow", className)}>
      {children}
    </p>
  );
};

export const CardFooter = () => {
  return (
    <div className="mt-4 flex items-center text-amber-400 text-sm">
      <span> Go to Page </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};
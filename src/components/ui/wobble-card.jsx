import React, { useState } from "react";
import { cn } from "../../lib/utils.js"; // Ensure this utility is correctly imported

export const WobbleCard = ({ children, containerClassName, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 40; // Reduced sensitivity for smoother movement
    const y = (clientY - (rect.top + rect.height / 2)) / 40; // Reduced sensitivity for smoother movement
    setMousePosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.4s ease-out", // Slower transition for smoother effect
      }}
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden",
        containerClassName
      )}
    >
      {/* Colorful border overlay */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl z-0",
          isHovering ? "opacity-100" : "opacity-0",
          "transition-opacity duration-700" // Slower transition for the border
        )}
        style={{
          background: `linear-gradient(45deg, 
            rgba(255, 0, 128, 0.8), 
            rgba(255, 153, 0, 0.8), 
            rgba(102, 204, 0, 0.8), 
            rgba(0, 204, 255, 0.8), 
            rgba(153, 51, 255, 0.8))`,
          backgroundSize: "200% 200%",
          animation: isHovering ? "gradientShift 3s ease infinite" : "none",
          padding: "2px", // Border thickness
        }}
      ></div>

      {/* Main content container */}
      <div
        className={cn(
          "bg-indigo-800 relative z-10 rounded-2xl h-full w-full",
          className
        )}
      >
        {children}
      </div>

      {/* CSS Animation for the gradient */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

// Optional Noise component that can be used inside the WobbleCard
export const Noise = () => {
  return (
    <div
      className="absolute inset-0 opacity-20 pointer-events-none z-20"
      style={{
        backgroundImage: "url('/noise.png')", // Make sure this asset exists
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
};
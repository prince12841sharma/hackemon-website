import React from "react";

const Banner = ({ className = "", reverse = false }) => {
  return (
    <div className={`relative w-screen overflow-hidden bg-stone-200/30 ${className}`}>
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            <div className="mx-6 text-4xl text-[#BEBEBE] py-5">Prize Pool Worth 5 Lacs</div>
            <div className="mx-6 text-4xl text-[#BEBEBE] py-5">Prize Pool Worth 5 Lacs</div>
            <div className="mx-6 text-4xl text-[#BEBEBE] py-5">Prize Pool Worth 5 Lacs</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Banner;

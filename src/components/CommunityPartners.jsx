import ImageTicker from "../components/ui/Ticker";
import tree from "../assets/gif/tree.gif";

import aws from "../assets/cp/aws.png";
import codechef from "../assets/cp/codechef.png";
import codejvm from "../assets/cp/codejvm.png";
import codeMafia from "../assets/cp/codeMafia.png";
import csi from "../assets/cp/csi.png";
import cyborgs from "../assets/cp/cyborgs.png";
import DevCircle from "../assets/cp/DevCircle.jpg";
import logoblack from "../assets/cp/logoblack.jpg";
import microsoft from "../assets/cp/microsoft.jpg";
import netaug from "../assets/cp/netaug.jpg";
import fft from "../assets/cp/fft.png";
import soarX from "../assets/cp/soarX.png";
import stark from "../assets/cp/stark.jpg";
import TechMasters from "../assets/cp/TechMasters.jpeg";
import Techsoc from "../assets/cp/Techsoc.jpeg";
import Webforge from "../assets/cp/Webforge.jpeg";
import gdgcabesit from "../assets/cp/gdgcabesit.png";


const CommunityPartners = () => {
    const images = [
      aws,
      codechef,
      codejvm,
      gdgcabesit,
      codeMafia,
      csi,
      cyborgs,
      DevCircle,
      logoblack,
      microsoft,
      netaug,
      fft,
      soarX,
      stark,
      TechMasters,
      Techsoc,
      Webforge
    
    ];
    
  return (
    <div className="border-slate-800  relative w-full border-t-0 border-b-0 p-4  mb-0 pb-[13rem]">
            {/* <h1 
              className={`z-10 text-center md:-top-10  text-5xl md:text-[7rem] mb-10 transition-all duration-1000`} 
              style={{ 
                fontWeight: "500",
                fontFamily: "'Fredoka One', sans-serif",
                WebkitTextStroke: "6px #0A3B89",
                WebkitTextFillColor: "#EEC212"
              }}
            >
              <span>Community Partners</span>
            </h1> */}

            <div className="relative">
                <h1 className="text-4xl z-4 text-center  md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600  font-sans font-bold mb-8">
              Community Partners
            </h1>
              <p className="text-white text-center text-lg md:text-xl max-w-3xl mx-auto opacity-80 mb-20">
                Proudly collaborating with our community partners to drive innovation and impact.
              </p>
               <div 
                      className="hidden  md:inline md:absolute right-0 -top-16 md:-top-16 w-32 h-32 md:w-56 md:h-56 pointer-events-none"
                      style={{
                        backgroundImage: `url(${tree})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                      }}
                    ></div>
            </div>


      {/* Image Scrolling Ticker */}
      <div className="z-80 rounded-xl  w-full h-54 max-lg:mt-8 max-lg:h-36  overflow-hidden">
        <ImageTicker images={images} speed={20} />
      </div>
    </div>
  );
};

export default CommunityPartners;
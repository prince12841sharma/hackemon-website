import { motion } from "framer-motion";

const ImageTicker = ({ images, speed = 50 }) => {
  return (
    <div className="overflow-hidden rounded-xl w-full  py-4">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-200%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="h-52 max-lg:h-28 rounded-xl w-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageTicker;
import React from "react";
import { motion } from "framer-motion";
function Marquee({ imageURL, direction }) {
  return (
    <div className="flex w-full overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-6 pr-28 "
      >
        {imageURL.map((url, index) => (
          <img key={index} className="h-7 w-20" src={url} alt="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-6 pr-40 "
      >
        {imageURL.map((url, index) => (
          <img key={index} className="h-7 w-20" src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;

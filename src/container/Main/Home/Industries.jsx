import React from "react";
import { motion } from "framer-motion";

const PaidMedia = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="flex items-center justify-center bg-black py-12 w-full">
      <div className="w-full max-w-[1400px] p-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative flex flex-col md:flex-row gap-8 md:gap-12"
        >
          {/* Left - Video Section */}
          <motion.div variants={item} className="flex-1">
            <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden shadow-lg border-4 border-blue-600 rounded-lg">
              <video
                className="w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/3245638/3245638-sd_640_360_25fps.mp4"
                autoPlay
                loop
                muted
                poster="your-poster-image-url.jpg"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={item} className="flex-1 text-white">
            <h2 className="text-5xl pb-5 font-bold text-blue-600">
              Industries
            </h2>
            <p className="text-gray-300 mt-6 text-lg">
              At Digiflex, we empower businesses with cutting-edge IT solutions, 
              cloud services, and strategic consulting to drive digital 
              innovation and operational efficiency.
            </p>
            <ul className="mt-6 space-y-4">
              {["Technology", "Consulting", "Financial Services", "Development"].map((text, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-center space-x-3 group"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors duration-300">
                    ✔
                  </span>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaidMedia;

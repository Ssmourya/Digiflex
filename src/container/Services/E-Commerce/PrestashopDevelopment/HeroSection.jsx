import { motion } from "framer-motion";
import React from "react";
import { SiPrestashop } from "react-icons/si";
import bgVideo from "../../../../assets/blue_theam.mp4"; // Add your video file

const PrestaShopHero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center pb-20">
      
      {/* Background Video (Transparent Effect) */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50" // Adjust opacity for transparency
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Slight Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> 

      <div className="relative max-w-4xl mx-auto w-full text-white">
        {/* Icon */}
        <motion.div 
          className="text-5xl mb-3 text-yellow-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <SiPrestashop />
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PrestaShop Development Solutions for Your Business
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          className="text-sm sm:text-lg md:text-xl mb-5 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Build, customize, and grow your PrestaShop store with DigiFlex’s expert e-commerce solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button 
            className="bg-white text-blue-900 px-5 sm:px-6 py-3 rounded-lg font-semibold shadow-md w-full sm:w-auto text-sm sm:text-base flex items-center gap-2"
            whileHover={{ scale: 1.1, backgroundColor: "#FAFAD2", color: "#0044CC" }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started 🚀
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-white px-5 sm:px-6 py-3 rounded-lg font-semibold w-full sm:w-auto text-sm sm:text-base flex items-center gap-2"
            whileHover={{ scale: 1.1, backgroundColor: "#FAFAD2", color: "#0044CC" }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Us ✉️
          </motion.button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative w-full flex justify-center">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {[ 
            { number: "350+", label: "PrestaShop Projects" },
            { number: "200+", label: "Satisfied Clients" },
            { number: "25K+", label: "Community Members" },
            { number: "7+", label: "Years of Expertise" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center gap-1"
              whileHover={{ scale: 1.1 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1, color: "#FFD700" }}
              >
                {item.number}
              </motion.h2>
              <p className="text-xs sm:text-sm opacity-80">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrestaShopHero;

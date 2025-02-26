import React from "react";
import { motion } from "framer-motion";
import videoBg from "../assets/blockchain_video.mp4";
import Mobile2 from "../container/Services/Custom App/Intregation and Migration/Mobile2";
import Mobile3 from "../container/Services/Custom App/Intregation and Migration/Mobile3";
import Mobile4 from "../container/Services/Custom App/Intregation and Migration/mobile4";
import WrapperContainer from "../Layout/WrapperContainer";
import IntegrationMigrationFAQ from "../container/Services/Custom App/Intregation and Migration/IntegrationMigrationFAQ";

const Mobile = () => {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Content Section */}
        <motion.div
          className="relative z-10 max-w-2xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Integration and Migration Made Easier!!
          </h1>
          <p className="mt-4 text-lg">
            At Digiflex.ai, we deliver cutting-edge, risk-mitigated migration
            and integration solutions tailored to meet the unique needs of our
            clients across the globe.
          </p>
          <p className="mt-4 text-lg">
            Our expertise lies in ensuring a seamless transition to advanced technologies,
            minimizing disruptions, and maximizing efficiency.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center">
            <motion.button
              className="bg-white text-black px-6 py-3 m-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              LEARN MORE
            </motion.button>
            <motion.button
              className="bg-white text-black px-6 py-3 m-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              CONTACT US
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Chat with us!
        </button>
      </motion.div>

      <WrapperContainer>
      <Mobile2 />
      <Mobile3 />
      <Mobile4 />
      </WrapperContainer>
      <IntegrationMigrationFAQ/>
    </>
  );
};

export default Mobile;

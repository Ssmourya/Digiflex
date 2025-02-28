import React from "react";
import { motion } from "framer-motion";
import { Blockchain_intro } from "../container/Services/Custom App/BlockChain/Blockchain_intro";
import Blockchain_application  from "../container/Services/Custom App/BlockChain/Blockchain_application ";
import Blockchain_application_development from "../container/Services/Custom App/BlockChain/Blockchain_application_development";
import Blockchain_platforms from "../container/Services/Custom App/BlockChain/Blockchain_platforms";
import Blockchain_services from "../container/Services/Custom App/BlockChain/Blockchain_services";
import Blockchain_support  from "../container/Services/Custom App/BlockChain/Blockchain_support ";
import videoBg from "../assets/blockchain_video.mp4";
import WrapperContainer from "../Layout/WrapperContainer";
import BlockchainDevelopmentFAQ from "../container/Services/Custom App/BlockChain/BlockchainDevelopmentFAQ";

function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
       
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

          {/* Content */}
          <motion.div
            className="relative z-30 text-white max-w-4xl p-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl md:text-5xl font-bold uppercase leading-relaxed mb-6">
              Blockchain Development Services
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Blockchain is a decentralized, distributed ledger technology that
              securely records transactions across multiple computers. It
              ensures transparency, security, and immutability by using
              cryptographic hashing and consensus mechanisms.
            </p>
            <div className="flex justify-center py-5">
            <div className="flex flex-wrap justify-center space-x-4">
            <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-transform transform hover:scale-105 duration-300">
              Learn More
            </button>
          </div>
            </div>
          </motion.div>
       
      </div>

      {/* Blockchain Service Components */}
<<<<<<< HEAD
      <div>
      <WrapperContainer>
        <Blockchain_intro />
        <Blockchain_application  />
        <Blockchain_application_development />
        <Blockchain_platforms />
        <Blockchain_services />
        <Blockchain_support  />
=======
     
        <WrapperContainer>
          <Cardpart1 />
          <Cardparten2 />
          <Cardpart3 />
          <Cardpart4 />
          <Cardpart5 />
          <Card6part />
>>>>>>> 594f10bf235bbb21515931aa7031fe48128ec240
        </WrapperContainer>
        <BlockchainDevelopmentFAQ/>
      
    </>
  );
}

export default Home;

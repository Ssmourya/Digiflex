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
        <WrapperContainer>
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
            <motion.p
              className="mt-10 w-fit px-5 py-2 border-2 border-[#C04112] rounded-[30px] text-[25px] uppercase cursor-pointer hover:bg-[#C04112] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Hire Blockchain Developers
            </motion.p>
          </motion.div>
        </WrapperContainer>
      </div>

      {/* Blockchain Service Components */}
      <div>
      <WrapperContainer>
        <Blockchain_intro />
        <Blockchain_application  />
        <Blockchain_application_development />
        <Blockchain_platforms />
        <Blockchain_services />
        <Blockchain_support  />
        </WrapperContainer>
      </div>
    </>
  );
}

export default Home;

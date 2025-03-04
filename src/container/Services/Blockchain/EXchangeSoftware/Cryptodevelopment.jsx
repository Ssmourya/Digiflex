import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExchangeAlt, FaWallet, FaLayerGroup, FaStore, FaCubes, FaBitcoin } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph"    

const Cryptodevelopment = () => {
  const cards = [
    {
      title: "Centralized Exchange", 
      description: "Highly secure and efficient centralized crypto exchange solutions with fast transactions.",
      message: "Trusted by top crypto traders worldwide.",
      icon: <FaExchangeAlt size={40} className="text-blue-600" />
    },
    {
      title: "Decentralized Exchange",
      description: "P2P trading with smart contracts ensuring full security and transparency.",
      message: "No intermediaries, full control over your assets.",
      icon: <FaLayerGroup size={40} className="text-green-600" />
    },
    {
      title: "Hybrid Exchange",
      description: "Combining the best of centralized & decentralized exchanges for seamless transactions.",
      message: "Get the benefits of both exchange types.",
      icon: <FaExchangeAlt size={40} className="text-purple-600" />
    },
    {
      title: "NFT Marketplace",
      description: "Create, buy, and sell NFTs easily on a secure and scalable platform.",
      message: "A secure place to trade digital art & assets.",
      icon: <FaStore size={40} className="text-yellow-600" />
    },
    {
      title: "Crypto Wallet",
      description: "Secure multi-currency wallets with private key encryption and easy access.",
      message: "Your assets, your control, high-level security.",
      icon: <FaWallet size={40} className="text-red-600" />
    },
    {
      title: "Token Development",
      description: "Develop and deploy custom crypto tokens with seamless blockchain integration and enhanced security.",
      message: "Innovative and scalable token solutions.",
      icon: <FaCubes size={40} className="text-orange-600" />
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <>
    <WrapperContainer>
    <div>
      {/* <div className="bg-white py-8 flex justify-center"> */}
        <Heading>
          <h1>Our Crypto Exchange Development Solutions </h1>
        </Heading>

        <Paragraph>
          <div className="text-center">
          We provide secure, scalable, and feature-rich crypto exchange development solutions.
          </div>
        </Paragraph>
      {/* </div> */}

      <div className="bg-white" ref={sectionRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-full h-auto sm:h-52 md:h-56 lg:h-56 xl:h-56 mx-auto rounded-xl overflow-hidden bg-white text-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
            >
              <div className="p-4 sm:p-5 text-center relative z-10 flex flex-col items-center">
                {card.icon}
                <h2 className="text-lg sm:text-xl font-bold mt-2">{card.title}</h2>
                <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">{card.description}</p>
              </div>

              <motion.div
                className="absolute bottom-[-100%] left-0 w-full h-2/5 bg-gray-100 flex items-center justify-center text-gray-800 text-xs sm:text-sm font-medium p-2 sm:p-3 rounded-b-xl border-t border-gray-300"
                whileHover={{ bottom: "0%" }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                {card.message}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
     </WrapperContainer>
      </>
  );
};

export default Cryptodevelopment;


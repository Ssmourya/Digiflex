import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import CentralizedExchange from "../../../../assets/Centralized Exchange.avif";
import DecentralizedExchange from "../../../../assets/DecentralizedExchange.avif";
import HybridCryptoExchange from "../../../../assets/Hybrid Crypto Exchange.avif";
import PeertoPeer from "../../../../assets/Peertopeer.webp";
import CryptoDerivativesExchange from "../../../../assets/Crypto Derivatives Exchange.avif";
import MarginExchanges from "../../../../assets/Margin Exchanges.avif";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";

const services = [
  {
    title: "Centralized Exchange",
    description:
      "This is an order book-based trading platform for crypto exchanges involving third parties to ease operations, that's centrally controlled by the authority.",
    image: CentralizedExchange,
  },
  {
    title: "Decentralized Exchange",
    description:
      "This is a liquidity pool-based crypto exchange platform that uses the blockchain network and uses transactions that are all recorded on immutable ledgers.",
    image: DecentralizedExchange,
  },
  {
    title: "Hybrid Crypto Exchange",
    description:
      "The hybrid model of exchange is based on the order books, whose transactions happen on the chain, aiding both the compatibility of CEX and DEX.",
    image: HybridCryptoExchange,
  },
  {
    title: "Peer-to-Peer (P2P) Crypto Exchange",
    description:
      "Peer-to-peer crypto exchange is a direct trading mechanism between two users that provides a free trade experience without third-party intermediaries.",
    image: PeertoPeer,
  },
  {
    title: "Crypto Derivatives Exchange",
    description:
      "It allows traders to buy and sell financial contracts whose value are derived from underlying cryptocurrencies such as futures, options, and perpetual contracts.",
    image: CryptoDerivativesExchange,
  },
  {
    title: "Margin Exchanges",
    description:
      "Margin exchanges allow traders to borrow funds to trade large positions, increase the potential of their asset gains, and minimize loss through leverage.",
    image: MarginExchanges,
  },
];

function AiAppServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedArrow, setClickedArrow] = useState(null);

  const handleClick = (direction) => {
    setClickedArrow(direction);
    setTimeout(() => setClickedArrow(null), 300);
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  return (
    <WrapperContainer>
      <div className="items-center">
        <Heading>
          <div>Types of Crypto Exchange Development</div>
        </Heading>

        <Paragraph>
          <div className="text-center">
          Crypto exchange development includes centralized, decentralized, hybrid, and P2P models.
          </div>
        </Paragraph>

        {/* Responsive Card */}
        <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden max-w-7xl flex flex-col md:flex-row-reverse">
          {/* Right Side - Image */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden"
          >
            <img
              src={services[currentSlide].image}
              alt={services[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <Subheading>
              <div className="text-2xl md:text-4xl font-bold mb-4">
                {services[currentSlide].title}
              </div>
            </Subheading>
            <p className="text-gray-600 text-sm md:text-lg">
              {services[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-start items-center w-full max-w-5xl mt-6 px-4 md:pl-8">
          <button
            onClick={() => handleClick("prev")}
            className={`p-3 rounded-full transition-colors ${
              clickedArrow === "prev"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleClick("next")}
            className={`ml-4 p-3 rounded-full transition-colors ${
              clickedArrow === "next"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AiAppServices;

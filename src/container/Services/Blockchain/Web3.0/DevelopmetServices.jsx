import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const services = [
  {
    title: "Web3 Metaverse",
    description:
      "Explore our various metaverse, crafting immersive platforms for gaming, entertainment, real estate, fashion, social media, and beyond.",
    icon: "🌐",
  },
  {
    title: "Web3 Exchange",
    description:
      "Empower your business with our decentralized exchange. Disrupt the cryptocurrency market with a high-performance, secure exchange.",
    icon: "💱",
  },
  {
    title: "Web3 Wallet",
    description:
      "Get our wallet with our customized services. Whether secure, multichain, or specific blockchains, our solution meets business needs.",
    icon: "👛",
  },
  {
    title: "Web3 Smart Contract",
    description:
      "Utilize our expertise in smart contracts for highly secure decentralized applications. Dive into the DeFi world with confidence.",
    icon: "📜",
  },
  {
    title: "Web3 Metaverse Game",
    description:
      "Explore our wide range of metaverse games. From NFTs to immersive gaming platforms, we've covered you for an exhilarating experience.",
    icon: "🎮",
  },
  {
    title: "Web3 Streaming",
    description:
      "Utilize blockchain and smart contracts for transparent web streaming services. Empower content creators to earn for their work seamlessly.",
    icon: "📺",
  },
  {
    title: "Decentralized Finance (DeFi)",
    description:
      "Seek from our solutions crafting diverse solutions for DeFi. We integrate features like borrowing/lending, staking, yield farming, and beyond.",
    icon: "💰",
  },
  {
    title: "Decentralized Autonomous Organization (DAO)",
    description:
      "Leverage our expertise in building a platform for smart-contract-driven DAO integrated to meet your diverse business requirements.",
    icon: "🏛️",
  },
];

const DevelopmetServices = () => {
  return (
    <>
    <WrapperContainer>
    <Heading>
        Acquire Our Best Web3 Development Services
    </Heading>
     <Paragraph className=" flex justify-center" >
        We offer cutting-edge Web3 development services, empowering businesses
        in diverse industries to streamline operations.
     </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      </WrapperContainer>
      </>
  );
};

export default DevelopmetServices;

import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import {
  FaEthereum,
  FaShoppingCart,
  FaWallet,
  FaGavel,
  FaCode,
  FaUsers,
  FaLock,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaRocket,
  FaHandHoldingUsd,
} from "react-icons/fa";
import Paragraph from "@/Layout/Paragraph";

const features = [
  { icon: <FaEthereum />, title: "Blockchain Integration" },
  { icon: <FaShoppingCart />, title: "Seamless Buying & Selling" },
  { icon: <FaWallet />, title: "Wallet Connectivity" },
  { icon: <FaGavel />, title: "Auction & Bidding" },
  { icon: <FaCode />, title: "Smart Contracts" },
  { icon: <FaUsers />, title: "User Management" },
  { icon: <FaLock />, title: "Secure Transactions" },
  { icon: <FaCloud />, title: "IPFS Storage" },
  { icon: <FaCogs />, title: "Customization Options" },
  { icon: <FaChartLine />, title: "Analytics & Insights" },
  { icon: <FaRocket />, title: "Fast Performance" },
  { icon: <FaHandHoldingUsd />, title: "Royalties for Creators" },
];

const NftServices = () => {
  return (
    <>
      <WrapperContainer>
        <Heading>
          Looking for a NFT Marketplace Website Developer?
        </Heading>
        <Paragraph className="text-center">
          Expert NFT marketplace developer for secure, scalable, feature-rich, and user-friendly platforms.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white min-h-[150px] w-full sm:w-auto"
            >
              <div className="text-4xl text-blue-500 mb-3">{feature.icon}</div>
              <p className="text-center font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default NftServices;

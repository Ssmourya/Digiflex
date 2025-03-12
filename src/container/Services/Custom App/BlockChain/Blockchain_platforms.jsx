import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const platforms = [
  { img: "/assets/blockchainlogo1.png", name: "Ethereum" },
  { img: "/assets/blockchainlogo3.png", name: "Binance Chain" },
  { img: "/assets/blockchainlogo4.png", name: "Solana" },
  { img: "/assets/blockchainlogo5.png", name: "Hyperledger Fabric" },
  { img: "/assets/blockchainlogo6.png", name: "Polygon" },
  { img: "/assets/blockchainlogo7.png", name: "Cardano" },
  { img: "/assets/blockchainlogo8.png", name: "Tezos" },
  { img: "/assets/blockchainlogo9.png", name: "Polkadot" },
];

const Blockchain_platforms = () => {
  return (
    <WrapperContainer>
    <div className="">

      <h1>
      <Heading>
        Blockchain Development Platforms <br /> We Support ...
        </Heading>
      </h1>

      <Paragraph>
      <p className="text-center">
        Blockchain development platforms provide the tools, frameworks, and
        environments developers need to build decentralized applications (DApps),
        smart contracts, and blockchain networks. Here's a detailed overview of
        popular platforms that support blockchain development and their key features.
      </p>
        </Paragraph>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-10">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img src={platform.img} alt={platform.name} className="w-24 h-24 object-contain mx-auto" />
            <Subheading>
            <p className="text-lg font-semibold mt-3">{platform.name}</p>
            </Subheading>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
};

export default Blockchain_platforms;

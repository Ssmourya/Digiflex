import React from "react";
import img1 from "../../../../assets/blockchainlogo1.png";
import img3 from "../../../../assets/blockchainlogo3.png";
import img4 from "../../../../assets/blockchainlogo4.png";
import img5 from "../../../../assets/blockchainlogo5.png";
import img6 from "../../../../assets/blockchainlogo6.png";
import img7 from "../../../../assets/blockchainlogo7.png";
import img8 from "../../../../assets/blockchainlogo8.png";
import img9 from "../../../../assets/blockchainlogo9.png";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const platforms = [
  { img: img1, name: "Ethereum" },
  { img: img3, name: "Binance Chain" },
  { img: img4, name: "Solana" },
  { img: img5, name: "Hyperledger Fabric" },
  { img: img6, name: "Polygon" },
  { img: img7, name: "Cardano" },
  { img: img8, name: "Tezos" },
  { img: img9, name: "Polkadot" },
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

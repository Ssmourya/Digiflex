import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const platforms = [
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo1.png", name: "Ethereum" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo3.png", name: "Binance Chain" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo4.png", name: "Solana" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo5.png", name: "Hyperledger Fabric" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo6.png", name: "Polygon" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo7.png", name: "Cardano" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo8.png", name: "Tezos" },
  { img: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchainlogo9.png", name: "Polkadot" },
];

const Blockchain_platforms = () => {
  return (
    <WrapperContainer>
      <div className="">
        
          <Heading>
            Blockchain Development Platforms <br /> We Support ...
          </Heading>
        

        <Paragraph className="text-center">
            Blockchain development platforms provide the tools, frameworks, and
            environments developers need to build decentralized applications
            (DApps), smart contracts, and blockchain networks. Here's a detailed
            overview of popular platforms that support blockchain development
            and their key features.
        </Paragraph>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="border border-gray-300 p-5 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={platform.img}
                alt={platform.name}
                width={100}
              height={100}
                className="w-24 h-24 object-contain mx-auto"
                priority={false}
              />
              <Subheading className="text-lg font-semibold mt-3">{platform.name}
              </Subheading>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Blockchain_platforms;

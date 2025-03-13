import Image from "next/image";
import React from "react";
import { carddata } from "./Data";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const Blockchain_application_development = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading>Blockchain Application Development
        </Heading>
        <Paragraph className="mt-2 text-center">
            Blockchain application development involves creating decentralized
            apps (dApps) or systems that leverage blockchain technology for
            transparency, security, and immutability. It includes designing
            smart contracts, integrating wallets, and ensuring scalability while
            addressing user needs in areas like finance, supply chain, and
            identity management.
        </Paragraph>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {carddata.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl w-full max-w-sm h-[320px] p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
          >
            <Image
              src={item.img}
              alt={item.name}
              className="w-20 h-20 mx-auto mb-4"
              priority={false}
              width={100}
              height={100}
            />
            <Subheading className="text-xl font-semibold text-center">{item.name}
            </Subheading>
            <Paragraph className=" text-center overflow-hidden text-ellipsis">
                {item.data}
            </Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Blockchain_application_development;

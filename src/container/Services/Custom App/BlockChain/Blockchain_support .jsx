import React from "react";
import { Data3 } from "./Data";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const Blockchain_support  = () => {
  return (
   <>
   <WrapperContainer>
    <div className="bg-white p-10 rounded-xl">
    <Heading>
  <h1>
    Blockchain Support Services
  </h1>
  </Heading>
  <Paragraph>
  <p>
    A Blockchain Support Server ensures smooth blockchain network operation
    through 24/7 monitoring, node management, security, and backups. It
    maintains uptime, optimizes scalability, and protects against threats.
    With technical assistance and regular updates, it ensures a stable and
    efficient blockchain infrastructure.
  </p>
  </Paragraph>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
    {Data3.slice(0, 12).map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-2xl"
      >
        <img src={item.img} alt="Icon" className="w-22 h-20 mb-4" />
        <h2 className="text-xl font-semibold text-[#1A2E6F]">{item.header}</h2>
        <p className="text-gray-600 mt-2">{item.data}</p>
      </div>
    ))}
  </div>
</div>
</WrapperContainer>
   </>
  );
};

export default Blockchain_support ;

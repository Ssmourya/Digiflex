import Image from 'next/image';
import React from "react";
import { Data2 } from "./Data";
import WrapperContainer from "@/Layout/WrapperContainer";

const Blockchain_application  = () => {
  return (
    <div className="flex flex-col items-center">
    <WrapperContainer>
      {Data2.map((item, index) => (
        <div
          key={index}
          className="flex border-l-4 border-gray-500 py-4  mb-6 hover:bg-gray-300 transition duration-700 ease-in-out"
        >
          <div className="flex flex-col items-center w-1/4 mr-5">
            <Image src={item.img} width={100}
              height={100} className="w-20 h-20 mb-1" alt="icon"  priority={false} />
            <p className="font-semibold text-center">{item.header}</p>
          </div>

          <div className="w-3/4">
            <p className="text-gray-600 text-2xl">{item.data}</p>
          </div>
        </div>
      ))}
    </WrapperContainer>
    </div>
  );
};

export default Blockchain_application ;

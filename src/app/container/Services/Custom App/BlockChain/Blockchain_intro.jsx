import React from "react";
import { Data, newData } from "./Data";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from "../../../../Layout/Subheading";

export const Blockchain_intro = () => {
  return (
    <>
      <WrapperContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Data.map((item, index) => (
            <div
              key={index}
              className="border-b-4 border-gray-300 p-3 rounded-lg hover:transform transition-all duration-300 ease-in-out hover:scale-105 "
            >
              <img
                src={item.img}
                alt={item.header}
                className="w-28 h-32 object-cover mx-auto rounded-t-lg"
              />
              <Subheading>
                <p className="font-bold px-5 py-2 text-center">
                  {item.header}
                </p>
              </Subheading>
              <p className=" px-4 text-sm text-center">
                {item.data}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {newData.map((item, index) => (
            <div
              key={index}
              className="border-t-4 border-gray-300 p-3  rounded-lg hover:transform transition-all duration-300 ease-in-out hover:scale-105 "
            >
              <img
                src={item.img}
                alt={item.header}
                className="w-28 h-32 object-cover mx-auto rounded-t-lg"
              />
              <Subheading>
                <p className="font-bold px-8 py-5 text-center">
                  {item.header}
                </p>
              </Subheading>
              <p className=" text-sm px-4 text-center">
                {item.data}
              </p>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

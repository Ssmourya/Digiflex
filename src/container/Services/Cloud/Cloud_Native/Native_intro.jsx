import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

function NativeIntro() {
  return (
    <WrapperContainer>
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <Heading  className=" text-center mb-6 md:mb-8">         
            Digiflex Cloud Native Solutions         
        </Heading>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Paragraph className="text-base md:text-lg">
              
                Digiflex’s cloud-native solutions are designed to enhance
                application scalability, flexibility, and automation in modern
                cloud environments. We leverage containers, microservices,
                DevOps, serverless computing, and AI-driven automation to
                optimize deployment and management.
             
             <br/>
                At Digiflex, we redefine cloud-native strategies to help
                businesses seamlessly migrate and build applications with
                agility. Our approach enables organizations to harness the full
                potential of cloud-based services and modern delivery models.
              
            </Paragraph>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Cloud_native.png"
              width={500}
              height={300}
              alt="Digiflex Cloud Native Solutions"
              className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
              priority={false}
            />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default NativeIntro;

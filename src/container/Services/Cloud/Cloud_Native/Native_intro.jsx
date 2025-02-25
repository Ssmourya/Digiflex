import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import cloud_nativ from '../../../../assets/Cloud_native.png';
import Paragraph from '../../../../Layout/Paragraph';

function NativeIntro() {
  return (
    <WrapperContainer>
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <Heading>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
            Digiflex Cloud Native Solutions
          </h1>
        </Heading>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Paragraph>
              <p className="text-base md:text-lg">
                Digiflex’s cloud-native solutions are designed to enhance application scalability, 
                flexibility, and automation in modern cloud environments. We leverage 
                containers, microservices, DevOps, serverless computing, and AI-driven 
                automation to optimize deployment and management.
              </p>
              <p className="mt-4 text-base md:text-lg">
                At Digiflex, we redefine cloud-native strategies to help businesses seamlessly migrate 
                and build applications with agility. Our approach enables organizations to harness 
                the full potential of cloud-based services and modern delivery models.
              </p>
            </Paragraph>
          </div>

          <div className="w-full md:w-1/2">
            <img 
              src={cloud_nativ} 
              alt="Digiflex Cloud Native Solutions" 
              className="w-full max-w-[600px] mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default NativeIntro;

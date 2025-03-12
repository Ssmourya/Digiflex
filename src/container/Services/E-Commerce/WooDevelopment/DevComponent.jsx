import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const DevComponent = () => {
  return (
    <WrapperContainer>
      <section className="w-full bg-white text-gray-900 py-20 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <Heading>WooCommerce Development</Heading>
          <Paragraph> Build and customize your online store with the flexibility and power of WooCommerce. 
          An open-source platform that provides endless possibilities for growth, scalability, and user experience.</Paragraph>
        </div>

        {/* Visual & Content Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/WooDevelopment.jpg"
              alt="WooCommerce Development"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <Paragraph> Whether you're starting from scratch or looking to enhance an existing store, WooCommerce provides full control over design, functionality, and integrations.</Paragraph>
            
            <Paragraph> Benefit from a feature-rich eCommerce experience that seamlessly blends with WordPress, offering robust customization, scalability, and ease of use.</Paragraph>
            
            <Paragraph>With thousands of plugins and themes available, WooCommerce allows you to create a unique and personalized shopping experience for your customers.</Paragraph>
        
            
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default DevComponent;

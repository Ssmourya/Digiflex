import React from 'react';
import Website2 from '../container/Services/Custom App/Website Devlopment/Website2';
import Website3 from '../container/Services/Custom App/Website Devlopment/Website3';
import Website4 from '../container/Services/Custom App/Website Devlopment/Website4';
import Website5 from '../container/Services/Custom App/Website Devlopment/Website5';
import { PhoneIcon as WhatsApp } from 'lucide-react';
import WrapperContainer from '../Layout/WrapperContainer';
import { Websitefaqs} from "../container/Services/Cloud/Faqdata";
import Faq from '../components/Faq';

const Website = () => {
  return (
    <>
      {/* Video Background Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/blockchain_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-30 text-white max-w-4xl p-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Modern Website Development Services
          </h1>
          <p className="text-lg leading-relaxed mb-6">
          Building Future-Ready Websites with Cutting-Edge Technology, Seamless UX, and Scalable Performance.</p>

          {/* WhatsApp Button */}
          <div className="flex justify-center">
          <div className="flex flex-wrap justify-center space-x-4">
          <button className="bg-white text-[#172554] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#172554] transition-transform transform hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
     <WrapperContainer>
      <Website2 />
      <Website3 />
      <Website4 />
      <Website5 />
      </WrapperContainer>
      <Faq faqs={Websitefaqs}/>
    </>
  );
};

export default Website;

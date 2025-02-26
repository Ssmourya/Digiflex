import React from 'react';
import Website2 from '../container/Services/Custom App/Website Devlopment/Website2';
import Website3 from '../container/Services/Custom App/Website Devlopment/Website3';
import Website4 from '../container/Services/Custom App/Website Devlopment/Website4';
import Website5 from '../container/Services/Custom App/Website Devlopment/Website5';
import { PhoneIcon as WhatsApp } from 'lucide-react';
import videoBg from '../assets/blockchain_video.mp4'; // Video background
import WrapperContainer from '../Layout/WrapperContainer';
import FrequentlyAskedQuestions from '../container/Services/Custom App/Website Devlopment/FrequentlyAskedQuestions';

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
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-30 text-white max-w-4xl p-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Modern Website Development Services At Low Prices
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Looking to create a modern website for your business or startup? Don’t wait! HireRankON Technologies, 
            a leading website development company in India, offering affordable and high-quality website development services**. 
            We specialize in custom, responsive websites that enhance user experience, boost your brand, and drive business growth.
          </p>

          {/* WhatsApp Button */}
          <div className="flex justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors p-3 rounded-full flex items-center gap-2 text-white text-lg font-semibold">
              <WhatsApp className="w-6 h-6" />
              <span>Contact Us</span>
            </button>
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
      <FrequentlyAskedQuestions/>
    </>
  );
};

export default Website;

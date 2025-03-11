import React from "react";
import Cards from "../container/Services/Custom App/CEM Devlopment/Cards";
import Thirds from "../container/Services/Custom App/CEM Devlopment/Third";
import Four from "../container/Services/Custom App/CEM Devlopment/Four";
import KnowledgeSection from "../container/Services/Custom App/CEM Devlopment/KnowledgeSection";
import WrapperContainer from "../Layout/WrapperContainer";
import Faq from "../components/Faq";
import { CemFaq } from "../container/Services/Cloud/Faqdata";


const Hero = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center bg-[#1A2E6F]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/blockchain_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-30 max-w-3xl text-white px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CEM Development
          </h1>
          <p className="text-lg mb-6">
          Customer Experience Management (CEM) Development – Enhancing Engagement, Personalization, and Business Growth.</p>
          <div className="flex justify-center py-5">
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
      <WrapperContainer>
      <Thirds />
      <Four />
      <Cards />
      <KnowledgeSection />
      <Faq faqs={CemFaq}/>
    </WrapperContainer>
    
    </>
  );
};

export default Hero;

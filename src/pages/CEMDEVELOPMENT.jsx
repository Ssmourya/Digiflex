import React from "react";
import videoBg from "../assets/blockchain_video.mp4";
import Cards from "../container/Services/Custom App/CEM Devlopment/Cards";
import Thirds from "../container/Services/Custom App/CEM Devlopment/Third";
import Four from "../container/Services/Custom App/CEM Devlopment/Four";
import KnowledgeSection from "../container/Services/Custom App/CEM Devlopment/KnowledgeSection";
import WrapperContainer from "../Layout/WrapperContainer";
import CemDevelopmentFAQ from "../container/Services/Custom App/CEM Devlopment/CemDevelopmentFAQ";

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
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-30 max-w-3xl text-white px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Deliver exceptional, omnichannel customer experiences
          </h1>
          <p className="text-lg mb-6">
            Deliver seamless, personalized, and omnichannel customer experiences powered by
            cutting-edge IT solutions and innovative products. At Digiflex.ai, we ensure every
            customer interaction is meaningful and efficient across all touchpoints.
          </p>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Request Demo
          </button>
        </div>
      </div>
      <WrapperContainer>
      <Thirds />
      <Four />
      <Cards />
      <KnowledgeSection />
    </WrapperContainer>
    <CemDevelopmentFAQ/>
    </>
  );
};

export default Hero;

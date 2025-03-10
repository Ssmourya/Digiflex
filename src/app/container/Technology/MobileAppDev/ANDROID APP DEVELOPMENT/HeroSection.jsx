import React from "react";
import videoBg from "../../../../../../public/assets/Moobile.mp4";


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold">
          Innovative & Scalable Android Apps for Every Device
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          We design intelligent, high-performance Android apps that work seamlessly across devices—smartphones, tablets, wearables, and IoT solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            Start Your Android App Journey
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            Get a Free Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

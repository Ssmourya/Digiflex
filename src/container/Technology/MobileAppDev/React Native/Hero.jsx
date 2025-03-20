import React from 'react'

const Hero = () => {
    return (
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Moobile.mp4" type="video/mp4" />
        </video>
  
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fast, Scalable & Cross-Platform Apps with React Native
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We build high-performance mobile applications that run seamlessly on both iOS and Android—using a single, efficient codebase.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Start Your React Native App Journey
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
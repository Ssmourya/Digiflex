import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/DigiflexHero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Transform Your Business With Intelligent Solutions</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl">Our cutting-edge platform empowers teams to build better software, faster. Experience the future of digital innovation today.</p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors text-lg">Schedule a Demo</button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium rounded-md transition-colors text-lg">Learn More</button>
        </div>
        
        
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
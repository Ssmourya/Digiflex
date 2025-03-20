import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-in]">
            PHP Laravel Development
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-[fadeIn_1s_ease-in_0.3s]">
            Crafting robust, scalable, and secure applications with Java and Spring Boot
          </p>

          {/* CTA button */}
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-white rounded-full animate-ping delay-700"></div>
      </div>
    </div>
  );
};

export default Hero;

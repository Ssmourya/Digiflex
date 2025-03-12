"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  const letterRefs = useRef([]);
  const text = "Website Consulting Service";
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    // Set window width after component mounts
    setWindowWidth(window.innerWidth);
    
    // Handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Letter animation
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        letter.style.animationDelay = `${index * 0.1}s`;
      }
    });
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine particle count based on window width
  const particleCount = windowWidth < 768 ? 20 : 40;

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          <source
            src='/assets/ConsultingVideo.mp4'
            type="video/mp4"
          />
        </video>
      </div>
      {/* Blur Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-lg bg-black/50" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 animate-gradient-extreme mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 animate-gradient-reverse mix-blend-multiply" />

      {/* Animated Particles - Only render when windowWidth is set */}
      {windowWidth > 0 && [...Array(particleCount)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Content - Improved padding for different devices */}
      <div className="relative flex items-center justify-center z-20 min-h-screen px-4 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="w-full max-w-6xl mx-auto text-center transform hover:scale-105 transition-transform duration-700">
          {/* Responsive Title Text Size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight perspective-1000">
            {text.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (letterRefs.current[i] = el)}
                className="inline-block animate-letter-rotate hover:text-blue-400 transition-colors duration-300"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Responsive Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 animate-glow">
            Create a powerful online presence with our website consulting
            <span className="relative inline-block group mx-2">
              focusing on user experience
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-pulse"></span>
            </span>
            performance, and scalability for your business.
          </p>

          {/* Responsive Button */}
          <button className="group relative px-6 sm:px-7 md:px-8 py-3 md:py-4 bg-transparent text-white text-sm sm:text-base md:text-lg font-medium rounded-lg overflow-hidden transition-all duration-500 hover:scale-110 animate-bounce-subtle">
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-move"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)] animate-pulse"></div>

            {/* Button Content - Adjusted for smaller screens */}
            <span className="relative flex items-center justify-center gap-1 sm:gap-2 group-hover:tracking-wider transition-all duration-500">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-spin-slow" />
              <span className="hidden sm:inline">TALK TO</span>
              <span>OUR EXPERTS</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-500 animate-bounce" />
            </span>
          </button>

          {/* Floating Orbs - Only render when windowWidth is set */}
          {windowWidth > 0 && [...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full blur-3xl animate-orb-float mix-blend-screen"
              style={{
                background: `radial-gradient(circle, ${
                  [
                    "rgba(59,130,246,0.3)",
                    "rgba(147,51,234,0.3)",
                    "rgba(59,130,246,0.3)",
                  ][i % 3]
                } 0%, transparent 70%)`,
                left: `${10 + i * (windowWidth < 768 ? 10 : 15)}%`,
                top: `${20 + (i % 3) * (windowWidth < 768 ? 15 : 20)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
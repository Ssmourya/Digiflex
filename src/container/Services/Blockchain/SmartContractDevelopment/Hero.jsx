"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import exchangesoftware from '@/@/public/assets/Blockchain.mp4'

function Hero() {
  const letterRefs = useRef([]);
  const text = "Smart Contract Development";

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        letter.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Background Video */}
      <div className="absolute w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover w-full h-full"
        >
          <source src={exchangesoftware} type="video/mp4" />
        </video>
      </div>
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 -z-10" /> */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 -z-10" />
      
      {/* Animated Particles */}
      {[...Array(40)].map((_, i) => (
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
      
      {/* Content */}
      <div className="relative flex items-center justify-center z-20 min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto text-center transform hover:scale-105 transition-transform duration-700">
          {/* Animated Title with Letter Animation */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {text.split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {word.split("").map((char, j) => (
                  <span
                    key={j}
                    ref={(el) => (letterRefs.current[i * word.length + j] = el)}
                    className="inline-block animate-letter-rotate hover:text-blue-400 transition-colors duration-300"
                  >
                    {char}
                  </span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
          Smart Contract Development involves coding, deploying,and managing blockchain-based agreements.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;

 
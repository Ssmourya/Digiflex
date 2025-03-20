"use client";

import React, { useEffect, useRef } from "react";

const Aiapphero = () => {
  const letterRefs = useRef([]);
  const text = "Boost Productivity with AI Copilot";

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        letter.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-8">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AIvideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl">
        {/* Animated Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight perspective-1000">
          {text.split(" ").map((word, i) => (
            <span key={i} className="inline-block mx-1">
              {word.split("").map((char, j) => (
                <span
                  key={j}
                  ref={(el) => (letterRefs.current[i * word.length + j] = el)}
                  className="inline-block animate-letter-rotate hover:text-blue-400 transition-colors duration-300"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mt-6 leading-relaxed animate-glow">
          Supercharge your workflow with AI-powered automation, smart
          suggestions, and real-time collaboration.
        </p>

        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-3xl animate-orb-float mix-blend-screen"
            style={{
              background: `radial-gradient(circle, ${
                [
                  "rgba(59,130,246,0.3)",
                  "rgba(147,51,234,0.3)",
                  "rgba(59,130,246,0.3)",
                ][i % 3]
              } 0%, transparent 70%)`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Aiapphero;

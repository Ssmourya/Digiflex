"use client";

import React, { useEffect, useRef } from "react";

const Ai_chatbot_hero = () => {
  const letterRefs = useRef([]);
  const text = "Enterprise AI Chatbot";

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
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          <source
            src='/assets/AIvideo.mp4' // Replace with your video URL
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute inset-0 z-0 backdrop-blur-sm bg-black/10 " />
     
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight perspective-1000">
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

          {/* Animated Description with Glowing Effect */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 animate-glow">
          Revolutionizing Business Communication
          </p>
          {/* Floating Orbs */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 rounded-full blur-3xl animate-orb-float mix-blend-screen"
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
    </div>
  );
};

export default Ai_chatbot_hero;

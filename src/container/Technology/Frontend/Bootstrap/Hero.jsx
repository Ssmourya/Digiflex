"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  const letterRefs = useRef([]);
  const text = " Bootstrap Development Services";

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        letter.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
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
            src="/assets/FrontendTechnology.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Blur Overlay */}
      {/* <div className="absolute inset-0 z-0 backdrop-blur-lg bg-black/50" /> */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 animate-gradient-extreme mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 animate-gradient-reverse mix-blend-multiply" />

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
            Build dynamic, scalable, and high-performance web applications with
            our expert
            <span className="relative inline-block group mx-2">
              Bootstrap development services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-pulse"></span>
            </span>
            tailored to your business needs.
          </p>

          {/* Animated Button with Complex Effects */}
          <button className="group relative px-8 py-4 bg-transparent text-white font-medium rounded-lg overflow-hidden transition-all duration-500 hover:scale-110 animate-bounce-subtle">
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-move"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_50%)] animate-pulse"></div>

            {/* Button Content */}
            <span className="relative flex items-center justify-center gap-2 group-hover:tracking-wider transition-all duration-500">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              TALK TO OUR EXPERTS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 animate-bounce" />
            </span>
          </button>

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
}

export default Hero;

import React, { useEffect, useRef } from "react";
import exchangesoftware from "../../../../assets/Google_video.mp4";
import Azore_intro from "../../../../assets/Azore_intro.png";
import Google_Cloud_Logo from "../../../../assets/Google-Cloud-Logo.png";

function OptimizationHero() {
  const letterRefs = useRef([]);
  const text = "CLOUD OPTIMIZATION";

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
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={exchangesoftware} type="video/mp4" />
        </video>
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 z-0 backdrop-blur-lg bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-purple-900/90 to-black/95 z-10 animate-gradient-extreme mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-transparent to-blue-900/50 z-10 animate-gradient-reverse mix-blend-multiply" />

      {/* Particles */}
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
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight perspective-1000">
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

          {/* Description & Images */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 animate-glow">
            Cloud Optimization refers to the process of improving performance,
            cost-efficiency, and resource utilization of cloud computing
            environments.
          </p>

          <div className="flex justify-center items-center gap-6 flex-wrap mt-5">
            <img
              src={Azore_intro}
              alt="Azure intro"
              className="w-32 md:w-40 lg:w-52"
            />
            <img
              src={Google_Cloud_Logo}
              alt="Google Cloud Logo"
              className="w-32 md:w-40 lg:w-52"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptimizationHero;

"use client"; // Ensures client-side rendering for this component in Next.js

import React, { useMemo } from "react";

const HeroSection = () => {
  // Memoize the video source URL to prevent unnecessary re-renders
  const videoSource = useMemo(
    () => "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Moobile.mp4",
    []
  );

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Improves mobile performance
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        preload="auto" // Preloads video metadata for faster playback
      >
        <source src={videoSource} type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        <p>Your browser does not support video playback.</p>
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Innovative & Scalable Android Apps for Every Device
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          We design intelligent, high-performance Android apps that work seamlessly across devices—smartphones, tablets, wearables, and IoT solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            aria-label="Start your Android app journey"
          >
            Start Your Android App Journey
          </button>
          <button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            aria-label="Get a free strategy call"
          >
            Get a Free Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
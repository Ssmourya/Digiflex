"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MetallicPaint from "@/components/ui/MetallicPaint"; // Ensure this is the correct path
// Using public folder for media files in Next.js
// import bg from "@/assets/HomeHeroBg4.mp4";
// import bg2 from "@/assets/HomeHeroBg.jpg";

function renderTextToImageData(lines, options = {}) {
  const {
    width = 3400,
    height = 1600,
    font = "bold 400px sans-serif",
    fillStyle = "#000",
    backgroundColor = "#fff",
    textAlign = "center",
    lineHeight = 400,
  } = options;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Fill background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  // Set font properties
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.textAlign = textAlign;
  ctx.textBaseline = "middle";

  // Draw each line separately
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, (index + 1) * lineHeight);
  });

  return ctx.getImageData(0, 0, width, height);
}

export default function HomeTextEffect() {
  const [textImageData, setTextImageData] = useState(null);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  // Update screen size on resize with debounce for performance
  useEffect(() => {
    if (typeof window === "undefined") return;

    let debounceTimer;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150); // Debounce delay
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimer);
    };
  }, []);

  // Calculate font size based on viewport width using a continuous scale
  const calculateResponsiveFontSize = (width) => {
    // Base size for reference (500px on a 1920px screen)
    const baseSize = 500;
    const baseWidth = 1920;

    // Min and max sizes to prevent text from becoming too small/large
    const minSize = 180;
    const maxSize = 500;

    // Calculate proportional font size
    const calculatedSize = Math.round((width / baseWidth) * baseSize);

    // Ensure it stays within bounds
    return Math.max(minSize, Math.min(calculatedSize, maxSize));
  };

  // Render text with smoothly responsive font size
  useEffect(() => {
    const lines = [
      "The Next ", // Line 1
      "Evolution of", // Line 2
      "Intelligence", // Line 3
      "is Here.", // Line 4
    ];

    // Get proportional font size based on screen width
    const fontSize = calculateResponsiveFontSize(screenSize.width);

    // Scale other dimensions proportionally to the font size
    const fontSizeRatio = fontSize / 500; // Ratio compared to our base font size
    const canvasWidth = Math.round(3700 * fontSizeRatio);
    const canvasHeight = Math.round(2100 * fontSizeRatio);
    const lineHeightValue = Math.round(460 * fontSizeRatio);

    const imageData = renderTextToImageData(lines, {
      width: canvasWidth,
      height: canvasHeight,
      font: `bold ${fontSize}px sans-serif`,
      fillStyle: "#000",
      backgroundColor: "#fff",
      lineHeight: lineHeightValue,
    });

    setTextImageData(imageData);
  }, [screenSize]);

  return (
    <div className="relative w-full h-full md:h-screen flex flex-col md:flex-row bg-[#021B3B] overflow-hidden transition-all duration-500 ease-in-out">
      {/* Left side - Text Section */}
      <motion.div
        className="w-full md:w-1/2 h-full md:h-full flex flex-col items-center justify-center text-white relative z-20 p-6 sm:p-8 md:p-10 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background image for screens < 720px */}
        <Image
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          src="/assets/HomeHeroBg.jpg"
          width={500}
          height={300}
          alt="Background"
          priority={false}
        />

        <div className="w-full h-full flex justify-center items-center relative">
          <MetallicPaint imageData={textImageData} />
        </div>
      </motion.div>

      {/* Right side - Video Section */}
      <motion.div
        className="relative hidden md:block w-full md:w-1/2 h-full overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/HomeHeroBg4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#021B3B] w-full sm:w-2/3 md:w-1/4"></div>
      </motion.div>
    </div>
  );
}

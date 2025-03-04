import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MetallicPaint from "../../../components/ui/MetallicPaint"; // Ensure this is the correct path

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

  useEffect(() => {
    const lines = [
      "The Next ", // Line 1
      "Evolution of", // Line 2
      "Intelligence", // Line 3
      "is Here.", // Line 4
    ];

    const imageData = renderTextToImageData(lines, {
      width: 3600,
      height: 2060,
      font: "bold 500px sans-serif",
      fillStyle: "#000",
      backgroundColor: "#fff",
      lineHeight: 460,
    });

    setTextImageData(imageData);
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-screen flex flex-col md:flex-row bg-[#021B3B] overflow-hidden transition-all duration-500 ease-in-out">
      {/* Left side - Text Section */}
      <motion.div
        className="w-full md:w-1/2 h-[100vh] md:h-full flex flex-col items-center justify-center text-white relative z-20 p-6 sm:p-8 md:p-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background image for screens < 720px */}
        <img
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          src="./HomeBg.jpg"
          alt="Background"
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
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 ease-in-out"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="HeroBg4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#021B3B] w-full sm:w-2/3 md:w-1/4"></div>
      </motion.div>
    </div>
  );
}

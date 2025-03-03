import React, { useState, useEffect } from "react";
import MetallicPaint from "../../../components/ui/MetallicPaint"; // Ensure this is the correct path

function renderTextToImageData(lines, options = {}) {
  const {
    width = 3200,
    height = 1600,
    font = "bold 400px sans-serif",
    fillStyle = "#000",
    backgroundColor = "#fff",
    textAlign = "center",
    lineHeight = 350, // Adjust line spacing
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
      width: 3200,
      height: 1600,
      font: "bold 400px sans-serif",
      fillStyle: "#000",
      backgroundColor: "#fff",
      lineHeight: 350, // Adjusted for better spacing
    });

    setTextImageData(imageData);
  }, []);

  if (!textImageData) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-screen flex bg-[#021B3B] overflow-hidden">
      {/* Left side - Text Section */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center text-white relative z-20 p-10 overflow-hidden">
        {/* Metallic Paint Text Effect */}
        <div className="w-full flex justify-center">
          <MetallicPaint imageData={textImageData} />
        </div>
      </div>

      {/* Right side - Video Section */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
        >
          <source src="HeroBg4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-transparent to-[#021B3B] w-1/4"></div>
      </div>
    </div>
  );
}

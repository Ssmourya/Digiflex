"use client";

import React, { useState, useEffect } from "react";
import videoGame from "../../../../../../public/assets/unrealGame.mp4";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const headingText = "Mobile Game Development ✨";  

  // Function to generate animation delay for typewriter effect
  const getTypewriterStyle = (index) => {
    const delay = index * 0.1; // Incremental delay for each character
    return {
      animation: `typewriter 0.5s ease-out ${delay}s forwards, bounce 0.3s ${delay + 0.2}s ease-out, colorChange 1s ${delay + 0.4}s infinite alternate`,
      opacity: 0, // Start invisible
    };
  };

  useEffect(() => {
    // Add keyframes dynamically to the document
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes typewriter {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0); }
      }
      @keyframes colorChange {
        from { color: #ffffff; }
        to { color: #ffcc00; }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover filter"
          style={{ filter: "blur(1px)" }}
        >
          <source src={videoGame} type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {headingText.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={getTypewriterStyle(index)}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
            Where imagination meets innovation to create award-winning gaming
            products
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            Request a Proposal
          </button>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Request a Proposal</h2>
            <p className="text-gray-600 mb-4">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded border border-gray-300 mb-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded border border-gray-300 mb-3"
            />
            <textarea
              placeholder="Project Details"
              rows={4}
              className="w-full p-2 rounded border border-gray-300 mb-3"
            ></textarea>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

  export default Hero;
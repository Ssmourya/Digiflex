import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";

function AutomationTesting() {
  return (
    <div className=" flex items-center justify-center">
      <WrapperContainer>
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl mb-2 font-bold text-black">
            <span className="text-blue-700">AUTOMATION</span> TESTING
          </h1>
        </div>

        {/* Description Section */}
        <div className="text-center">
          <p className="text-lg ">
            Test Design in Software Testing - A Comprehensive Guide
          </p>
          <p className="text-lg ">
            As we guarantee high-quality products and support transparency
            throughout the development journey.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg py-10 my-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Interested in learning more?
          </h2>
          <p className="text-sm sm:text-base">
            Dive deeper into the world of automation testing with our resources.
            Stay updated with the latest trends and tools in the industry.
          </p>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex flex-wrap items-center gap-4 text-gray-700 pt-1">
          <a
            href="https://facebook.com/digiflex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 transition duration-300 hover:scale-110 hover:text-blue-700" />
          </a>
          <a
            href="https://twitter.com/digiflex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-400 transition duration-300 hover:scale-110 hover:text-blue-500" />
          </a>
          <a
            href="https://linkedin.com/company/digiflex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-700 transition duration-300 hover:scale-110 hover:text-blue-800" />
          </a>
          <span className="text-xs sm:text-sm ml-4">
            February 24, 2025 | Digiflex.ai
          </span>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default AutomationTesting;

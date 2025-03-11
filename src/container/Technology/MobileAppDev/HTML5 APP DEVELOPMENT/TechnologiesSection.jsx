import React from "react";
import { Monitor, Server, Wrench, Database } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

export default function TechnologiesSection() {
  return (
    <WrapperContainer>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
      <Heading>Technologies We Use</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front-end */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-sm transition transform hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Monitor className="h-10 w-10 text-blue-600 transition-all duration-300 transform hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center">
              Front-end
            </h3>
            <p className="text-black text-center">
              HTML5, CSS3, JavaScript (React.js, Vue.js, Angular)
            </p>
          </div>

          {/* Back-end */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-sm transition transform hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Server className="h-10 w-10 text-blue-600 transition-all duration-300 transform hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center">
              Back-end
            </h3>
            <p className="text-black text-center">
              Node.js, Python, PHP
            </p>
          </div>

          {/* Frameworks & Tools */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-sm transition transform hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Wrench className="h-10 w-10 text-blue-600 transition-all duration-300 transform hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center">
              Frameworks &amp; Tools
            </h3>
            <p className="text-black text-center">
              Bootstrap, Tailwind CSS, jQuery
            </p>
          </div>

          {/* Databases */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-sm transition transform hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Database className="h-10 w-10 text-blue-600 transition-all duration-300 transform hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-4 text-center">
              Databases
            </h3>
            <p className="text-black text-center">
              MySQL, Firebase, MongoDB
            </p>
          </div>
        </div>
      </div>
    </section>
    </WrapperContainer>
  );
}

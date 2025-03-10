import React from "react";
import videoBg from "../../../../../../public/assets/Moobile.mp4";

const Hero = () => {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white text-center px-6 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Build Truly Native Apps with NativeScript
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Create high-performance, cross-platform apps with NativeScript,
            offering full access to native APIs while using JavaScript,
            TypeScript, or Angular
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get a Free Consultation
            </button>
            <button className="bg-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition">
            Let’s Build Your NativeScript App
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </section>
    </>
  );
};

export default Hero;

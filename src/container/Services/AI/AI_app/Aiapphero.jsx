import React from 'react';

const DigiflexHero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900">
        <video
          autoPlay  
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        >
          <source src="/video/AIvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-4 text-white pb-12 pt-24 md:pt-32 lg:pt-40">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Build Smarter Apps with AI
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center max-w-3xl">
          Leverage the power of artificial intelligence to create innovative applications that transform your ideas into reality.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-bold mb-2">Ease</h3>
            <p className="text-gray-300">With Digiflex, you can build and deploy full-stack applications effortlessly across platforms, managing everything from start to scale in one place.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-bold mb-2">Speed</h3>
            <p className="text-gray-300">Digiflex integrates AI into your apps, enhancing productivity with built-in AI assistance and intelligent agent support.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-bold mb-2">Confidence</h3>
            <p className="text-gray-300">Develop with certainty using Digiflex, ensuring high-quality applications backed by AI safety, reliability, and compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiflexHero;

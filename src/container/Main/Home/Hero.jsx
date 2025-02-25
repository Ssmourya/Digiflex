import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="HeroBg.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default Hero;

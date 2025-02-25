import React from 'react';
import video from '../../../../assets/Google_video.mp4';

function MigrationHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-30 flex flex-col items-start justify-center h-full p-6 md:p-10 lg:p-16 text-white">
        <p className="text-[50px] md:text-[40px] sm:text-[30px] uppercase font-bold">
          Cloud Migration
        </p>
        <p className="mt-2 max-w-[600px] text-lg md:text-base sm:text-sm">
          A platform offering a wide range of services for building, deploying, and managing applications through Microsoft-managed data centers. It provides solutions in computing, storage, networking, AI, machine learning, DevOps, security, and more.
        </p>
      </div>
    </div>
  );
}

export default MigrationHero;

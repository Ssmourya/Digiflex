import React from 'react';
import video from "../../../../assets/Google_video.mp4";
import Azore_intro from "../../../../assets/Azore_intro.png";
import Google_Cloud_Logo from "../../../../assets/Google-Cloud-Logo.png";

function OptimizationHero() {
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
      {/* Centering the content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center p-4">
        <p className="text-[50px] md:text-[40px] sm:text-[30px] font-bold">CLOUD OPTIMIZATION</p>
        <p className="mt-2 max-w-[600px] text-lg md:text-base sm:text-sm">
          Cloud Optimization refers to the process of improving the performance, cost-efficiency, and resource utilization of cloud computing environments.
        </p>
        <div className="flex gap-5 mt-4 flex-wrap justify-center">
          <img src={Azore_intro} alt="Azore_intro" className="w-52 md:w-40 sm:w-28 h-auto object-contain" />
          <img src={Google_Cloud_Logo} alt="Google_Cloud_Logo" className="w-52 md:w-40 sm:w-28 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}

export default OptimizationHero;

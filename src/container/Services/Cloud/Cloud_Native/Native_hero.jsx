import React from 'react';
import video from "../../../../assets/Google_video.mp4";

function NativeHero() {
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
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center p-6 md:p-10 lg:p-16">
        <p className="text-[50px] md:text-[40px] sm:text-[30px] font-bold">
          Cloud Native Services
        </p>
        <p className="mt-2 max-w-[600px] text-lg md:text-base sm:text-sm">
          Cloud-native services refer to a set of technologies and practices designed to build, deploy, and manage applications in cloud environments. These services leverage microservices architecture, containerization, automation, and scalability to ensure flexibility, resilience, and efficiency.
        </p>
      </div>
    </div>
  );
}

export default NativeHero;

import React from 'react';
import video from '../../../../assets/video2.mp4';
import google_img from '../../../../assets/Google-Cloud-Logo.png';

function GoogleHero() {
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
          Google Cloud 
        </p>
        <p className="mt-2 max-w-[600px] text-lg md:text-base sm:text-sm">
          Google Cloud is a suite of cloud computing services provided by Google. It offers scalable computing, storage, and machine learning solutions backed by Google's robust infrastructure.
        </p>
        <img src={google_img} alt='Google Cloud' className='w-1/6 md:w-1/4 sm:w-1/3 mt-4' />
      </div>
    </div>
  );
}

export default GoogleHero;

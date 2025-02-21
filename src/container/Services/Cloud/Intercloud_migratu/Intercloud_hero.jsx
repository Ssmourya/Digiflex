import React from 'react'
import video from '../../../../assets/Google_video.mp4'

function Intercloud_hero() {
  return (
    <>
        <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative z-30 flex flex-col items-start justify-center h-full pl-[50px] text-white">
          <p className="text-[50px] uppercase">
          Intercloud Migration 
          </p>
          <p className="mt-2 max-w-[600px]">Intercloud migration refers to the process of transferring applications, workloads, or data between different cloud service providers.It allows organizations to optimize costs, improve performance, and enhance flexibility in cloud computing environments.</p>
        </div>
        </div>
    </>
)
}

export default Intercloud_hero
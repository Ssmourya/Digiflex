import React from 'react'

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
        <source src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Moobile.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          HTML5 App Development Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering businesses with cutting-edge, high-performance HTML5 applications.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get a Free Consultation
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
    </section>
    </>
  )
}

export default Hero

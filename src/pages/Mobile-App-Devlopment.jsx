import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import videoBg from '../assets/blockchain_video.mp4';
import Amp2 from '../container/Services/Custom App/Mobile App Devlopment/Amp2';
import Amp3 from '../container/Services/Custom App/Mobile App Devlopment/Amp3';
import Amp5 from '../container/Services/Custom App/Mobile App Devlopment/Amp5';
import Com from '../assets/Logo2.jpg';
import Com2 from '../assets/Logo3.jpg';
import Com3 from '../assets/Logo4.jpg';
import Com4 from '../assets/Logo5.jpg';
import Heading from '../Layout/Heading';
import WrapperContainer from '../Layout/WrapperContainer';
import FrequentlyAskedQuestions from '../container/Services/Custom App/Mobile App Devlopment/FrequentlyAskedQuestions';



const Amp = () => {
  return (
    <>
      {/* Video Background Section */}
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay Div */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-30 text-white max-w-4xl p-8">
          <h1 className="text-[50px] uppercase font-bold">
            Web and Mobile App Development Company
          </h1>
          <p className="text-lg mt-4">
            We help you launch and scale your Mobile and Web Apps. Since 2014, we build custom applications loved by millions.
          </p>
          <button className="mt-6 bg-white text-[#172554] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
            Get in touch
          </button>

          {/* Clients Section */}
          <div className="mt-12">
            <p className="text-white mb-4 font-medium">Our Clients</p>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <img src={Com} alt="Google" className="h-8" />
              <img src={Com2} alt="Calmerry" className="h-8" />
              <img src={Com3} alt="Qured" className="h-8" />
              <img src={Com4} alt="COTY" className="h-8" />
            </div>
          </div>
        </div>
      </div>

      
      <WrapperContainer>
      <Amp2 />
      <Amp3 />
      <Amp5 />
      <FrequentlyAskedQuestions/>
      
      </WrapperContainer>
     
  
     
 
      
    </>
  );
};

export default Amp;

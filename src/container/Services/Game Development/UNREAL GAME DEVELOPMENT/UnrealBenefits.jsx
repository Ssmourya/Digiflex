import React from 'react';
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-full text-center border border-gray-300 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-white hover:bg-blue-500 group transform hover:-translate-y-1">
    <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A8A] group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 mt-2 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
      {description}
    </p>
  </div>
);

const UnrealBenefits = () => {
  const benefits = [
    { 
      title: "END-TO-END PROJECT CREATION", 
      description: "Digiflex is fully equipped to unleash the full potential of your project. We are ready to take on the game at any stage to bring it to a successful implementation and market entry.", 
      icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10"/><path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5z"/></svg>
    },
    { 
      title: "PARTNERSHIPS WITH LEADERS", 
      description: "Digiflex is proud to be trusted by leading gaming companies such as Epic Games (Unreal Engine creator), FoxNext, EA, and others; this allows us to use best practices in projects that we continue to work on.", 
      icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10"/><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
    },
    { 
      title: "GUARANTEED VISUAL QUALITY", 
      description: "Digiflex gathers specialists with various functional backgrounds who work towards the common goal, share your vision of the game, and provide perfect quality graphics to carry out a project successfully.", 
      icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/></svg>
    },
    { 
      title: "PERFECT DELIVERY PIPELINE", 
      description: "Perfectly designed workflows at Digiflex allow us to guarantee Unreal game development services with full transparency at all stages; our clients receive a full performance assessment and feedback at any time.", 
      icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10"/><rect x="8" y="8" width="8" height="8" rx="2"/></svg>
    },
    { 
      title: "ROBUST SECURITY MEASURES", 
      description: "Digiflex's Unreal game development process includes cutting-edge security measures to ensure the safety of game assets, code integrity, and secure multiplayer interactions.", 
      icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
    },
    { 
      title: "CROSS-PLATFORM DEVELOPMENT", 
      description: "Digiflex specializes in Unreal game development for multiple platforms, including PC, consoles, and mobile, ensuring seamless performance and broad accessibility for players.", 
      icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10"/><polygon points="12,6 15,12 21,12 16.5,16.5 18,24 12,21 6,24 7.5,16.5 3,12 9,12"/></svg>
    }
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl ">
        <div className="text-center p-6">
          <Heading>
            OUR UNREAL GAME DEVELOPMENT SERVICES
          </Heading>
        </div>
        <div className="sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {benefits.map((benefit, index) => (
              <ServiceCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default UnrealBenefits;

import React from 'react';
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl text-center border border-gray-300 shadow-md transition-all duration-500 hover:shadow-2xl hover:border-white hover:bg-blue-500 group transform hover:-translate-y-1">
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

const GameServices = () => {
  const services = [
    { title: "UNREAL GAME DEVELOPMENT", description: "We offer complete Unreal game development services, turning your idea into a polished game.", icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg> },
    { title: "AR/VR/MR-BASED DEVELOPMENT", description: "We deliver high-performance products with AR/VR/MR integration, ensuring an immersive user experience.", icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7"/></svg> },
    { title: "GAME PORTING TO UNREAL ENGINE", description: "We help port your game to Unreal Engine, ensuring smooth gameplay across platforms.", icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8 M12 17v4"/></svg> },
    { title: "ART AND ANIMATION", description: "Our artists create stunning visuals and animations to bring your game to life.", icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"/></svg> },
    { title: "PORTING UE4 TO UE5", description: "We seamlessly port projects from Unreal Engine 4 to Unreal Engine 5 for enhanced performance.", icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
    { title: "GAME TESTING", description: "We ensure smooth gameplay by rigorously testing for bugs and performance issues.", icon: <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg> },
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center p-6">
          <Heading>
            <h1>OUR UNREAL GAME DEVELOPMENT SERVICES</h1>
          </Heading>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default GameServices;
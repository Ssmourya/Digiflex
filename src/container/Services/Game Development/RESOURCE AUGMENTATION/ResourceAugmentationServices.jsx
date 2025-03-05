import React, { memo } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const ServiceCard = memo(({ icon, title, description }) => (
  <div className="relative p-6 rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105">
    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center text-blue-600 text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  </div>
));

const services = [
  { title: "On-Demand Game Development Teams", description: "Digiflex provides access to skilled game developers, designers, and testers to scale your development team based on project needs.", icon: "🎮" },
  { title: "Specialized Game Development Roles", description: "Hire expert developers from Digiflex for specific roles such as AI programming, physics simulation, and multiplayer networking.", icon: "🧠" },
  { title: "VR & AR Game Development Support", description: "Enhance your development process with Digiflex's augmented reality and virtual reality experts to create immersive experiences.", icon: "🕶️" },
  { title: "Game Art & Animation Augmentation", description: "Expand your creative team with Digiflex's skilled artists, animators, and UI/UX designers for stunning visuals and game assets.", icon: "🎨" },
  { title: "Live Game Operations & Support", description: "Ensure smooth game operations with Digiflex's dedicated teams handling server management, bug fixes, and feature updates.", icon: "⚙️" },
  { title: "Cloud Gaming Infrastructure Support", description: "Optimize your game performance with Digiflex's scalable cloud gaming solutions, including server setup, management, and maintenance.", icon: "☁️" },
];

const ResourceAugmentationServices = () => {
  return (
    <WrapperContainer>
        <Heading>Resource Augmentation for Game Development</Heading>
        <Paragraph className='text-center'>Scale your game development team efficiently with Digiflex's expert augmentation services tailored to your project needs.</Paragraph>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
     
    </WrapperContainer>
  );
};

export default ResourceAugmentationServices;

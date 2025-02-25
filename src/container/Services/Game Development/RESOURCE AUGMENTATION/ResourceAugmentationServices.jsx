import React, { memo } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

// Memoized ServiceCard for performance optimization
const ServiceCard = memo(({ icon, title, description }) => (
  <div className="bg-gray-100 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100 hover:border-gray-300">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
));

const services = [
  {
    title: "On-Demand Game Development Teams",
    description: "Get access to skilled game developers, designers, and testers to scale your development team based on project needs.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm0 5a2 2 0 11-2 2 2 2 0 012-2zm-6 8a6 6 0 0112 0z"/></svg>
  },
  {
    title: "Specialized Game Development Roles",
    description: "Hire expert developers for specific roles such as AI programming, physics simulation, and multiplayer networking.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4-4m-4 4l4 4"/></svg>
  },
  {
    title: "VR & AR Game Development Support",
    description: "Enhance your development process with augmented reality and virtual reality experts to create immersive experiences.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
  },
  {
    title: "Game Art & Animation Augmentation",
    description: "Expand your creative team with skilled artists, animators, and UI/UX designers for stunning visuals and game assets.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
  },
  {
    title: "Live Game Operations & Support",
    description: "Ensure smooth game operations with dedicated teams handling server management, bug fixes, and feature updates.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
  },
  {
    title: "Cloud Gaming Infrastructure Support",
    description: "Optimize your game performance with scalable cloud gaming solutions, including server setup, management, and maintenance.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15h18M8 10a4 4 0 118 0M5 20h14a3 3 0 003-3v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2a3 3 0 003 3z"/></svg>
  }
];

const ResourceAugmentationServices = () => {
  return (
    <WrapperContainer>
        <div className="max-w-6xl mx-auto">
          <Heading>
            Resource Augmentation for Game Development
          </Heading>
          <Paragraph>
            Scale your game development team efficiently with our expert augmentation services tailored to your project needs.
          </Paragraph>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
    </WrapperContainer>
  );
};

export default ResourceAugmentationServices;

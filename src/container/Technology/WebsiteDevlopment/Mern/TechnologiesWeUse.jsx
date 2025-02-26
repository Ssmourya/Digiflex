import React from 'react';
import Heading from '../../../../Layout/Heading';
import DevelopmentProcess from './DevelopmentProcess';
import WrapperContainer from '../../../../Layout/WrapperContainer';

// Simple SVG icons as components
const IconFrontend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </svg>
);

const IconBackend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6" y2="6" />
    <line x1="6" y1="18" x2="6" y2="18" />
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const IconDeployment = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M18 10h-4V3L9 3v7H5l7 7 6-7z" />
    <path d="M9 21v-6M15 21v-6" />
    <path d="M7 21h10" />
  </svg>
);

const IconSecurity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// New icon for DevOps
const IconDevOps = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" viewBox="0 0 24 24">
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export default function TechnologiesWeUse() {
  const techCategories = [
    {
      category: 'Frontend',
      icon: IconFrontend,
      image: 'https://i.pinimg.com/originals/66/83/3e/66833e07d6fb9eb5d724e47d0c814285.gif',
      technologies: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Material UI'],
    },
    {
      category: 'Backend',
      icon: IconBackend,
      image: 'https://i.pinimg.com/originals/53/86/d6/5386d6524afd22dd14d8a208c72e9b08.gif',
      technologies: ['Node.js', 'Express.js', 'Nest.js'],
    },
    {
      category: 'Database',
      icon: IconDatabase,
      image: 'https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif',
      technologies: ['MongoDB', 'Mongoose'],
    },
    {
      category: 'Deployment',
      icon: IconDeployment,
      image: 'https://i.pinimg.com/originals/52/b7/36/52b736f2c6e739118e5b9a32a21434ea.gif',
      technologies: ['Docker', 'AWS', 'DigitalOcean', 'Vercel'],
    },
    {
      category: 'Testing & Security',
      icon: IconSecurity,
      image: 'https://i.pinimg.com/originals/74/21/58/7421588cce1c5faa05e21b5b498c2ada.gif',
      technologies: ['Jest', 'Mocha', 'Postman', 'JWT Authentication'],
    },
    {
      category: 'DevOps',
      icon: IconDevOps,
      image: 'https://via.placeholder.com/400x300?text=DevOps',
      technologies: ['CI/CD', 'Kubernetes', 'Prometheus', 'Grafana'],
    },
  ];

  return (
    <>
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading>Technologies We Use</Heading>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver scalable, robust, and high-performance digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <img src={item.image} alt={item.category} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-blue-600 opacity-25"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-blue-600 text-white mr-3">
                        <Icon />
                      </div>
                      <h3 className="text-xl font-bold">{item.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <DevelopmentProcess />
    </>
  );
}

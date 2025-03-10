"use client";

import React, { useState, useEffect } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';
import Heading from '../../../../Layout/Heading';

const MagentoFeatures = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [activeFeature, setActiveFeature] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Handle initial mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Feature data organized by categories
  const featureCategories = {
    core: {
      title: "Core Development Features",
      description: "Essential features that make Magento development powerful",
      items: [
        {
          id: "architecture",
          title: "Modular Architecture",
          description: "Build on Magento's flexible module system.",
          icon: "grid-4",
          benefits: ["Code organization", "Dependency management", "Easy upgrades"]
        },
        {
          id: "api",
          title: "Robust API",
          description: "Utilize REST and GraphQL APIs for integrations.",
          icon: "code",
          benefits: ["Headless commerce", "Third-party integration", "Mobile apps"]
        },
        {
          id: "orm",
          title: "Object-Relational Mapping",
          description: "Database operations without writing raw SQL.",
          icon: "database",
          benefits: ["Data abstraction", "Security", "Query optimization"]
        },
        {
          id: "di",
          title: "Dependency Injection",
          description: "Create loosely coupled code with DI framework.",
          icon: "puzzle",
          benefits: ["Testability", "Maintainability", "Extensibility"]
        }
      ]
    },
    frontend: {
      title: "Frontend Development",
      description: "Tools for creating exceptional shopper experiences",
      items: [
        {
          id: "layouts",
          title: "Layout System",
          description: "Design page layouts through XML configuration.",
          icon: "layout",
          benefits: ["Component reuse", "Upgrade-safe", "Easy customization"]
        },
        {
          id: "ui",
          title: "UI Components",
          description: "Build interfaces with reusable UI components.",
          icon: "squares-four",
          benefits: ["Consistency", "Reduced development time", "Modern UX"]
        },
        {
          id: "less",
          title: "LESS Preprocessing",
          description: "Streamline CSS with variables and mixins.",
          icon: "paint-brush",
          benefits: ["Maintainable styles", "Theme inheritance", "Responsive design"]
        },
        {
          id: "pwa",
          title: "PWA Support",
          description: "Create PWAs with PWA Studio and headless architecture.",
          icon: "device-mobile",
          benefits: ["Mobile performance", "Offline capabilities", "App-like experience"]
        }
      ]
    },
    advanced: {
      title: "Advanced Capabilities",
      description: "Features for complex e-commerce requirements",
      items: [
        {
          id: "events",
          title: "Event/Observer System",
          description: "Extend functionality using Magento's event system.",
          icon: "lightning",
          benefits: ["Low coupling", "Upgrade-safe extensions", "Flexible architecture"]
        },
        {
          id: "plugins",
          title: "Plugins (Interceptors)",
          description: "Modify core behavior by intercepting method calls.",
          icon: "plug",
          benefits: ["Multiple extensions", "Clean code", "Conflict prevention"]
        },
        {
          id: "cli",
          title: "Command Line Tools",
          description: "Automate tasks with CLI commands.",
          icon: "terminal",
          benefits: ["Workflow automation", "Deployment tools", "Performance optimization"]
        },
        {
          id: "testing",
          title: "Testing Framework",
          description: "Ensure code quality with testing tools.",
          icon: "check-circle",
          benefits: ["Code stability", "Regression prevention", "CI/CD integration"]
        }
      ]
    }
  };

  // Get current category and features
  const currentCategory = featureCategories[activeCategory];

  // Simplified SVG icons 
  const icons = {
    'grid-4': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H10V10H3V3Z M14 3H21V10H14V3Z M3 14H10V21H3V14Z M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    'code': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'database': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8C16.4183 8 20 6.65685 20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5C4 6.65685 7.58172 8 12 8Z" stroke="currentColor" strokeWidth="2" /><path d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5" stroke="currentColor" strokeWidth="2" /><path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeWidth="2" /></svg>,
    'puzzle': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'layout': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M3 9H21" stroke="currentColor" strokeWidth="2" /><path d="M9 9V21" stroke="currentColor" strokeWidth="2" /></svg>,
    'squares-four': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10H8C9.10457 10 10 9.10457 10 8V5C10 3.89543 9.10457 3 8 3Z" stroke="currentColor" strokeWidth="2" /><path d="M19 3H16C14.8954 3 14 3.89543 14 5V8C14 9.10457 14.8954 10 16 10H19C20.1046 10 21 9.10457 21 8V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" /><path d="M8 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21H8C9.10457 21 10 20.1046 10 19V16C10 14.8954 9.10457 14 8 14Z" stroke="currentColor" strokeWidth="2" /><path d="M19 14H16C14.8954 14 14 14.8954 14 16V19C14 20.1046 14.8954 21 16 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14Z" stroke="currentColor" strokeWidth="2" /></svg>,
    'paint-brush': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 4L12 10M2.5 21.5L5.5 18.5M5.5 18.5L8.5 21.5M5.5 18.5L10 14C10 14 11 14 12 15C13 16 13 17 13 17L8.5 21.5M19 5L18 4L21 1L23 3L20 6L19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'device-mobile': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    'lightning': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'plug': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 6.5L15.5 9.5M15 10L5 20M12 6L6 12M8 2L10 4L4 10L2 8L8 2ZM22 16L20 14L14 20L16 22L22 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'terminal': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M7 15L10 12L7 9M13 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'check-circle': <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12L11 14L15 10M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  };

  return (
    <WrapperContainer>
    <div className={`max-w-6xl mx-auto p-4 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <Heading>Magento Development Features</Heading>
          
        <Paragraph className='text-center'>Powerful development capabilities for enterprise e-commerce</Paragraph>
       
      </div>
      
      {/* Category tabs */}
      <div className="flex justify-center mb-8 border-b">
        {Object.keys(featureCategories).map((category) => (
          <button
            key={category}
            className={`px-6 py-3 font-medium transition-all ${
              activeCategory === category 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => {
              setActiveCategory(category);
              setActiveFeature(null);
            }}
          >
            {featureCategories[category].title}
          </button>
        ))}
      </div>
      
      {/* Category description */}
      <div className="text-center mb-8">
        <Subheading>{currentCategory.title}</Subheading>
        <Paragraph>{currentCategory.description}</Paragraph>
      </div>
      
      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {currentCategory.items.map((feature) => (
          <div 
            key={feature.id}
            className={`bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer transform hover:shadow-lg ${
              activeFeature === feature.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
          >
            <div className="p-6">
              <div className="mb-4 text-blue-600">
                {icons[feature.icon]}
              </div>
              <Subheading>{feature.title}</Subheading>
              <Paragraph>{feature.description}</Paragraph>
              
              {activeFeature === feature.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Paragraph>Key Benefits:</Paragraph>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4 text-blue-600 text-sm font-medium">
                {activeFeature === feature.id ? 'Click to collapse' : 'Click for details'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
};

export default MagentoFeatures;
"use client";

import React, { useState, useEffect } from 'react';
import {
  Mail,
  ShoppingCart,
  Users,
  BarChart,
  Globe,
  Settings,
  ArrowRight
} from 'lucide-react';
import Heading from '@/Layout/Heading';
import WrapperContainer from '@/Layout/WrapperContainer';
import Paragraph from '@/Layout/Paragraph';

const GridCard = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const iconComponents = {
    Mail,
    ShoppingCart,
    Users,
    BarChart,
    Globe,
    Settings
  };

  const IconComponent = iconComponents[icon];
  const bulletPoints = description.split('\n').filter(point => point.startsWith('•'));

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <div
        className={`relative bg-white rounded-2xl transition-all duration-700 ease-in-out ${isHovered ? 'shadow-2xl scale-105' : 'shadow-lg scale-100'} cursor-pointer overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <div className="p-8 relative">
          <div className="flex justify-center mb-6">
            <div className={`relative p-6 rounded-full transition-all duration-700 ease-in-out ${isHovered ? 'bg-blue-500 rotate-6' : 'bg-blue-100 rotate-0'}`}>
              <IconComponent size={32} className={`transition-all duration-700 ${isHovered ? 'text-white -rotate-6' : 'text-blue-500 rotate-0'}`} />
            </div>
          </div>
          <div className="relative">
            <h3 className={`text-xl font-bold text-center mb-4 transition-all duration-700 ${isHovered ? 'text-blue-600' : 'text-gray-800'}`}>{title}</h3>
            <div className={`space-y-3 transition-all duration-700 ease-in-out ${isHovered ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
              {bulletPoints.map((point, idx) => (
                <div key={idx} className={`flex items-start space-x-2 transition-all duration-700 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                  <ArrowRight size={16} className="mt-1 flex-shrink-0 text-blue-500" />
                  <p className="text-sm text-gray-600">{point.substring(1).trim()}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 ease-in-out ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
        </div>
      </div>
    </div>
  );
};

const AnimatedGrid = () => {
  const services = [
    {
      title: 'Marketing Cloud',
      description: '• Automated customer journeys\n• AI-powered personalization\n• Email and social media campaigns\n• Real-time analytics\n• Multi-channel engagement\n• Customer segmentation',
      icon: 'Mail'
    },
    {
      title: 'Commerce Cloud',
      description: '• AI-driven eCommerce solutions\n• Seamless omnichannel shopping\n• Mobile-first optimization\n• Inventory and order management\n• Scalable B2B and B2C commerce\n• Integrated payment gateways',
      icon: 'ShoppingCart'
    },
    {
      title: 'Experience Cloud',
      description: '• Customer self-service portals\n• Partner collaboration tools\n• Personalized digital experiences\n• AI-powered recommendations\n• Integrated CRM and analytics\n• Secure and scalable solutions',
      icon: 'Users'
    },
    {
      title: 'Analytics Cloud',
      description: '• AI-driven insights\n• Data visualization tools\n• Predictive analytics\n• Custom dashboards\n• Integration with Salesforce CRM\n• Advanced reporting features',
      icon: 'BarChart'
    },
    {
      title: 'Integration Cloud',
      description: '• Seamless app connectivity\n• API management\n• Data synchronization\n• Pre-built connectors\n• Secure data exchange\n• Real-time process automation',
      icon: 'Globe'
    },
    {
      title: 'Sales Cloud',
      description: '• AI-powered sales insights\n• Lead and opportunity tracking\n• Sales forecasting\n• Automation tools\n• Custom workflows\n• Mobile CRM accessibility',
      icon: 'Settings'
    }
  ];

  return (
    <WrapperContainer>
      <div>
        <Heading>
          Types of Salesforce Digital 360
        </Heading>
        <Paragraph className='text-center'>
          Salesforce Digital 360 includes Marketing, Commerce, Experience, Analytics, Integration, and Sales Cloud to transform digital engagement.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GridCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default AnimatedGrid;

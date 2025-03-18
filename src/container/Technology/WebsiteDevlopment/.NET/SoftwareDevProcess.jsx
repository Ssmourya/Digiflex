"use client";

import React, { useState } from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';

import { 
  ChevronDown, 
  ChevronRight, 
  Pencil,
  Code,
  TestTube,
  Upload
} from 'lucide-react';

const SoftwareDevProcess = () => {
  const [expandedSection, setExpandedSection] = useState('planning');

  const sections = {
    'planning': {
      icon: <Pencil className="w-6 h-6 text-blue-500" />,
      title: 'Planning & Analysis',
      items: [
        { title: 'Requirement Gathering', description: 'Identify business needs and technical requirements.' },
        { title: 'Architecture Design', description: 'Define software structure and system flow using .NET Core.' },
        { title: 'Prototyping', description: 'Create wireframes and mockups for visualization.' }
      ]
    },
    'development': {
      icon: <Code className="w-6 h-6 text-green-500" />,
      title: 'Development',
      items: [
        { title: 'Backend Development', description: 'Implement APIs and business logic using ASP.NET Core.' },
        { title: 'Frontend Development', description: 'Develop user interfaces using Blazor or React with .NET integration.' },
        { title: 'Database Management', description: 'Use SQL Server or Entity Framework for data storage and processing.' },
        { title: 'Security Implementation', description: 'Implement authentication and authorization mechanisms.' }
      ]
    },
    'testing': {
      icon: <TestTube className="w-6 h-6 text-yellow-500" />,
      title: 'Testing & Debugging',
      items: [
        { title: 'Unit Testing', description: 'Ensure individual components work correctly using xUnit or NUnit.' },
        { title: 'Integration Testing', description: 'Verify interactions between services and databases.' },
        { title: 'Performance Testing', description: 'Optimize software performance and scalability.' }
      ]
    },
    'deployment': {
      icon: <Upload className="w-6 h-6 text-red-500" />,
      title: 'Deployment & Maintenance',
      items: [
        { title: 'Cloud Deployment', description: 'Deploy applications on Azure or AWS cloud services.' },
        { title: 'CI/CD Integration', description: 'Automate deployment pipelines using GitHub Actions or Azure DevOps.' },
        { title: 'Monitoring & Support', description: 'Ensure application stability and performance with logging and analytics.' }
      ]
    }
  };

  return (
    <WrapperContainer>
        <Heading>
          .NET Software Development Process
        </Heading>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">
            At Digiflex, we specialize in providing top-notch .NET software development services. Our team is dedicated to building robust and scalable applications tailored to your needs.
          </p>
        </div>
        <div className="grid gap-6">
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="border rounded-lg overflow-hidden shadow-md bg-white">
              <div 
                className={`cursor-pointer p-4 transition-colors duration-300 ${
                  expandedSection === key ? 'bg-blue-100' : 'hover:bg-gray-200'
                }`}
                onClick={() => setExpandedSection(expandedSection === key ? null : key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>
                  {expandedSection === key ? 
                    <ChevronDown className="w-5 h-5" /> : 
                    <ChevronRight className="w-5 h-5" />
                  }
                </div>
              </div>
              
              {expandedSection === key && (
                <div className="p-4 bg-white">
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
    </WrapperContainer>
  );
};

export default SoftwareDevProcess;

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

const GameDevProcess = () => {
  const [expandedSection, setExpandedSection] = useState('pre-production');

  const sections = {
    'pre-production': {
      icon: <Pencil className="w-6 h-6 text-blue-500" />,
      title: 'Pre-production',
      items: [
        { title: 'Storyboarding', description: 'Plan game mechanics and narrative.' },
        { title: 'Asset Creation', description: 'Design characters, environments, and animations.' },
        { title: 'Prototyping', description: 'Create a simple version to test core mechanics.' }
      ]
    },
    'development': {
      icon: <Code className="w-6 h-6 text-green-500" />,
      title: 'Development',
      items: [
        { title: 'Coding', description: 'Implement game logic, physics, and AI.' },
        { title: 'Graphics & Animation', description: 'Use 2D/3D modeling and rendering software like Blender.' },
        { title: 'Sound & Music', description: 'Add background music, voiceovers, and effects.' },
        { title: 'Multiplayer Integration', description: 'If applicable, use networking libraries or game servers.' }
      ]
    },
    'testing': {
      icon: <TestTube className="w-6 h-6 text-yellow-500" />,
      title: 'Testing & Debugging',
      items: [
        { title: 'Bug Fixing', description: 'Identify and fix bugs, glitches, and performance issues.' },
        { title: 'Testing Phases', description: 'Conduct alpha and beta testing for player feedback.' }
      ]
    },
    'deployment': {
      icon: <Upload className="w-6 h-6 text-red-500" />,
      title: 'Deployment & Distribution',
      items: [
        { title: 'Platforms', description: 'Choose distribution platforms like Steam, Epic Games Store, or Itch.io.' },
        { title: 'Compatibility', description: 'Ensure compatibility across various hardware and operating systems.' }
      ]
    }
  };

  return (
    <WrapperContainer>
        <Heading>
          Game Development Process
        </Heading>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">
            At Digiflex, we specialize in providing top-notch game development services. Our team is dedicated to bringing your game ideas to life with precision and creativity.
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

export default GameDevProcess;

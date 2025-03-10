"use client";

import React, { useState } from 'react';
import { 
 
  ActivityIcon,
  GitBranchIcon,

  CodeIcon,
  TerminalIcon
} from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const DevOpsDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('cicd');
  const [selectedTool, setSelectedTool] = useState(null);

  const categories = {
    cicd: {
      icon: <ActivityIcon />,
      title: 'CI/CD Tools',
      tools: [
        { 
          name: 'Jenkins', 
          description: 'Open-source automation server for building, testing, and deploying software',
          icon: <GitBranchIcon className="w-12 h-12 text-blue-500" />,
          features: [
            'Extensible with 1000+ plugins',
            'Supports multiple programming languages',
            'Distributed builds across multiple machines'
          ],
          useCases: [
            'Continuous Integration',
            'Automated Testing',
            'Deployment Pipelines'
          ],
          complexity: 'High',
          popularity: 'Very High'
        },
        { 
          name: 'GitHub Actions', 
          description: 'Native CI/CD workflow automation directly integrated with GitHub repositories',
          icon: <CodeIcon className="w-12 h-12 text-purple-500" />,
          features: [
            'Integrated with GitHub ecosystem',
            'Supports matrix builds',
            'Free for public repositories'
          ],
          useCases: [
            'Automated Workflows',
            'Code Validation',
            'Deployment Automation'
          ],
          complexity: 'Medium',
          popularity: 'High'
        },
        { 
          name: 'GitLab CI/CD', 
          description: 'Comprehensive CI/CD tool integrated within GitLab platform',
          icon: <TerminalIcon className="w-12 h-12 text-orange-500" />,
          features: [
            'Built-in container registry',
            'Auto DevOps capabilities',
            'Comprehensive pipeline visualization'
          ],
          useCases: [
            'Continuous Deployment',
            'Container Orchestration',
            'Integrated SCM and CI/CD'
          ],
          complexity: 'Medium-High',
          popularity: 'High'
        }
      ]
    },
    // ... other categories remain the same
  };

  const ToolDetailModal = ({ tool, onClose }) => {
    if (!tool) return null;

    return (
  

      

      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
          
          <div className="flex items-center mb-6">
            {tool.icon}
            <div className="ml-4">
              <h2 className="text-2xl font-bold">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Use Cases</h3>
              <ul className="space-y-2">
                {tool.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-500">➤</span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Complexity</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{width: tool.complexity === 'High' ? '80%' : tool.complexity === 'Medium-High' ? '65%' : '50%'}}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{tool.complexity}</span>
            </div>
            <div>
              <h4 className="font-medium">Popularity</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{width: tool.popularity === 'Very High' ? '90%' : tool.popularity === 'High' ? '75%' : '60%'}}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{tool.popularity}</span>
            </div>
          </div>
        </div>
      </div>

    
    );
  };

  return (

    <WrapperContainer>

        <Heading>
            <div>
            DevOps Technologies Landscape
            </div>
        </Heading>
        <Paragraph>
            <span className='block text-center'>
            DevOps bridges development and operations, automating software delivery through innovative technologies.
            </span>
        </Paragraph>


    <div >
      <div className="container mx-auto">
        {/* Category Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                flex items-center px-4 py-2 rounded-lg transition-all transform hover:scale-105
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-blue-100 shadow-md'}
              `}
            >
              {categories[category].icon}
              <span className="ml-2">{categories[category].title}</span>
            </button>
          ))}
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories[activeCategory].tools.map((tool, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedTool(tool)}
              className="
                bg-white rounded-xl shadow-lg overflow-hidden 
                transform transition-all hover:scale-105 hover:shadow-2xl 
                cursor-pointer group
              "
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {tool.icon}
                  <h3 className="text-xl font-semibold ml-4">{tool.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex items-center">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
                    Learn More
                  </span>
                  <span className="text-gray-500 text-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Detail Modal */}
      <ToolDetailModal 
        tool={selectedTool} 
        onClose={() => setSelectedTool(null)} 
      />
    </div>
            
    </WrapperContainer>
  );
};

export default DevOpsDashboard;
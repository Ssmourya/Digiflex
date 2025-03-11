import React from 'react';
import { ClipboardList, Code, Layout, Search, Server } from 'lucide-react';
import Paragraph from '@/Layout/Paragraph';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';

const DevelopmentProcess = () => {
  const processSteps = [
    {
      number: "1️⃣",
      title: "Requirement Gathering",
      description: "Understanding your needs.",
      icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
      details: "We begin by thoroughly analyzing your business requirements, target audience, and project goals to ensure we deliver exactly what you need."
    },
    {
      number: "2️⃣",
      title: "System Design",
      description: "Planning architecture and data flow.",
      icon: <Layout className="w-12 h-12 text-blue-600" />,
      details: "Our experts create a comprehensive blueprint of your system's architecture, data models, and workflow to ensure scalability and performance."
    },
    {
      number: "3️⃣",
      title: "Development & Coding",
      description: "Agile-based development.",
      icon: <Code className="w-12 h-12 text-blue-600" />,
      details: "Using agile methodologies, we develop your solution incrementally with regular sprints and feedback sessions to ensure alignment with your vision."
    },
    {
      number: "4️⃣",
      title: "Testing & Debugging",
      description: "Ensuring security and performance.",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      details: "Rigorous testing procedures identify and eliminate bugs while ensuring your application meets the highest standards of security and performance."
    },
    {
      number: "5️⃣",
      title: "Deployment & Maintenance",
      description: "Smooth launch and continuous support.",
      icon: <Server className="w-12 h-12 text-blue-600" />,
      details: "We handle the deployment process and provide ongoing maintenance and support to keep your application running optimally."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heading>Our Python Development Process</Heading>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <Paragraph>
            Our streamlined development methodology ensures efficient delivery of high-quality Python solutions.
          </Paragraph>
        </div>
        
        <div className="relative">
          {/* Timeline connector line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600 transform -translate-x-1/2"></div>
          
          {processSteps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Timeline circle for medium+ screens */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-600 z-10 items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Content boxes */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-3xl">{step.number}</div>
                      <Subheading>{step.title}</Subheading>
                    </div>
                    <Paragraph>{step.description}</Paragraph>
                    <Paragraph>{step.details}</Paragraph>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-2/12"></div>
                
                <div className={`hidden md:flex md:w-5/12 ${index % 2 === 0 ? 'md:pl-16 justify-start' : 'md:pr-16 justify-end'}`}>
                  <div className="bg-gray-50 p-8 rounded-full">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              {/* Mobile view icon - only visible on small screens */}
              <div className="flex md:hidden items-center justify-center mt-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-full">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
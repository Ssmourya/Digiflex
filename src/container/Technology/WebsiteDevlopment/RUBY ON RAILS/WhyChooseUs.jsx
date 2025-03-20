import React from 'react';
import { CheckCircle, Code, Shield, Zap, Server } from 'lucide-react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Ruby on Rails Developers",
      description: "Our team offers deep expertise in Ruby on Rails, delivering high-quality solutions across various industries.",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Full-Stack Rails Development",
      description: "We provide end-to-end Ruby on Rails services, from initial planning to deployment and ongoing support.",
      icon: <Server className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Rapid and Scalable Solutions",
      description: "Our Rails applications are designed for speed, scalability, and cost-efficiency to support your growth.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Secure and Reliable Applications",
      description: "We ensure your Rails apps are secure and optimized for performance with best-in-class coding practices.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading>Why Choose Digiflex.ai for Ruby on Rails Development?</Heading>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborate with a team that crafts fast, scalable, and robust Ruby on Rails solutions
            tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full border-l-4 border-blue-600"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                  {reason.icon}
                </div>
                <div>
                  <Subheading className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                    {reason.title}
                    <CheckCircle className="w-5 h-5 ml-2 text-blue-700" />
                  </Subheading>
                  <Paragraph className="text-gray-600">{reason.description}</Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center mx-auto">
            <span>Discuss Your Rails Project with Digiflex.ai</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
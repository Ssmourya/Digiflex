import React from 'react';
import { CheckCircle, Code, Shield, Zap, Server } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Java Developers",
      description: "Our team brings hands-on expertise with Java technologies across diverse industries and applications.",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      title: "End-to-End Development Services",
      description: "We provide comprehensive solutions from planning and design to deployment and maintenance.",
      icon: <Server className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Scalable and Cost-Effective Solutions",
      description: "Our Java applications are built to grow with your business without breaking your budget.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Secure and High-Performance Applications",
      description: "We prioritize security and performance optimization in every line of code we write.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading> Why Choose Digiflex.ai for Java Development?</Heading>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with a team that delivers robust, scalable, and efficient Java solutions
            tailored to your business needs.
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
            <span>Discuss Your Java Project with Digiflex.ai</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CheckCircle, Code, Shield, Zap, Server } from 'lucide-react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Laravel Developers",
      description: "Our team brings extensive experience in PHP and Laravel, crafting top-tier solutions for diverse industries.",
      icon: <Code className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Comprehensive Laravel Development",
      description: "We offer full-cycle Laravel services, from concept and design to deployment and continuous support.",
      icon: <Server className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Fast and Scalable Laravel Apps",
      description: "Our Laravel solutions are built for performance, scalability, and cost-effectiveness to fuel your growth.",
      icon: <Zap className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Secure and Robust Applications",
      description: "We prioritize security and reliability in every Laravel project, adhering to industry-leading standards.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading className="text-4xl font-bold">Why Choose Digiflex.ai for PHP Laravel Development?</Heading>
          <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Partner with a team that delivers powerful, scalable, and secure Laravel solutions customized to your business needs.
          </Paragraph>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-t-indigo-500 group-hover:border-r-indigo-500 group-hover:border-b-indigo-500 group-hover:border-l-transparent transition-all duration-300"></div>

              {/* Card Content */}
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-50 rounded-full mr-4 group-hover:bg-indigo-100 transition-colors duration-300">
                  {reason.icon}
                </div>
                <Subheading className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {reason.title}
                </Subheading>
              </div>
              <Paragraph className="text-gray-600 text-sm">{reason.description}</Paragraph>
              <CheckCircle className="w-5 h-5 text-indigo-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto group">
            <span>Discuss Your Laravel Project with Digiflex.ai</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
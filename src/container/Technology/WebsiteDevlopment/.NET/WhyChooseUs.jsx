import React from 'react';
import { CheckCircle, Code, Shield, Zap, Server } from 'lucide-react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import WrapperContainer from '@/Layout/WrapperContainer';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert .NET Developers",
      description: "Our skilled team leverages .NET to craft robust, enterprise-grade solutions for your business.",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Comprehensive .NET Services",
      description: "From system design to deployment, we offer full-cycle .NET development tailored to your needs.",
      icon: <Server className="w-8 h-8 text-blue-600" />
    },
    {
      title: "High-Performance .NET Solutions",
      description: "We build .NET applications optimized for speed, scalability, and seamless integration.",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Secure .NET Development",
      description: "Our .NET solutions prioritize security, maintainability, and top-tier coding standards.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <WrapperContainer>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Heading className="text-4xl md:text-5xl font-bold ">
              Why Choose Digiflex.ai for .NET Development?
            </Heading>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Partner with a team that delivers powerful, scalable, and secure .NET solutions to elevate your business.
            </Paragraph>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-blue-500"
              >
                {/* Icon */}
                <div className="mb-5 p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  {reason.icon}
                </div>

                {/* Title */}
                <Subheading className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </Subheading>

                {/* Description */}
                <Paragraph className="text-gray-600 text-base leading-relaxed">
                  {reason.description}
                </Paragraph>

                {/* Check Circle */}
                <CheckCircle className="w-6 h-6 text-blue-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 flex items-center mx-auto group shadow-lg hover:shadow-xl">
              <span>Start Your .NET Journey with Digiflex.ai</span>
              <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
}
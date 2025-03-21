import React from 'react';
import { CheckCircle, Code, Shield, Zap, Server } from 'lucide-react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import WrapperContainer from '@/Layout/WrapperContainer';




export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Skilled Golang Developers",
      description: "Our team excels in Golang, delivering high-performance solutions tailored to diverse industry needs.",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: "End-to-End Golang Services",
      description: "We provide complete Golang development, from architecture design to deployment and optimization.",
      icon: <Server className="w-8 h-8 text-blue-600" />
    },
    {
      title: "High-Performance Golang Apps",
      description: "Our Golang applications are engineered for speed, concurrency, and scalability to drive your success.",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Secure and Efficient Code",
      description: "We build Golang solutions with a focus on security, reliability, and efficient resource utilization.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <WrapperContainer>
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading >Why Choose Digiflex.ai for Golang Development?  </Heading>
          <Paragraph className="text-lg text-gray-500 max-w-2xl mx-auto mt-4">
            Team up with experts who create fast, scalable, and reliable Golang solutions to meet your business objectives.
          </Paragraph>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:border-blue-500 transition-all duration-300 group hover:bg-blue-50"
            >
              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>

              {/* Title */}
              <Subheading className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </Subheading>

              {/* Description */}
              <Paragraph className="text-gray-600 text-sm mb-4">{reason.description}</Paragraph>

              {/* Check Circle */}
              <CheckCircle className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 flex items-center mx-auto group">
            <span>Explore Your Golang Project with Digiflex.ai</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
    </WrapperContainer>
  );
}
import Subheading from '@/Layout/Subheading';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import React from 'react';

const Process = () => {
  const data = [
    {
      step: "1",
      title: "Requirement Analysis & Planning",
      description: "We assess your business goals and technical requirements to design a Ruby on Rails solution that aligns with your vision."
    },
    {
      step: "2",
      title: "Prototyping & Design",
      description: "We create wireframes and prototypes to define the application’s structure and user experience, leveraging Rails’ rapid development capabilities."
    },
    {
      step: "3",
      title: "Development & Coding",
      description: "We build your application using Ruby on Rails, following best practices to ensure clean, maintainable, and scalable code."
    },
    {
      step: "4",
      title: "Testing & Quality Assurance",
      description: "We conduct thorough testing, including unit tests and integration tests, to ensure your Rails app is reliable and bug-free."
    },
    {
      step: "5",
      title: "Deployment & Launch",
      description: "We deploy your Ruby on Rails application to your chosen environment, ensuring a seamless launch with minimal downtime."
    },
    {
      step: "6",
      title: "Maintenance & Optimization",
      description: "We provide ongoing support, updates, and performance optimizations to keep your Rails application running efficiently."
    }
  ];

  return (
    <WrapperContainer>
      <div className="text-center mb-12">
        <Heading>Our Ruby on Rails Development Process</Heading>
        <p className="text-gray-600 max-w-2xl mx-auto">A streamlined process for delivering high-quality Ruby on Rails applications</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl ">
        {data.map((process, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              {process.step}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h3>
            <p className="text-gray-600 text-sm">{process.description}</p>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Process;
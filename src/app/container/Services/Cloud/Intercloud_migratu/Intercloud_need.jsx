"use client";

import React, { useState } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const data = [
  {
    title: 'Cost Optimization',
    details:
      'Digiflex.ai helps businesses reduce cloud expenses by strategically migrating workloads to cost-effective cloud providers.',
  },
  {
    title: 'Vendor Lock-in Avoidance',
    details: 
      'Digiflex.ai enables seamless transitions between cloud platforms, ensuring flexibility and preventing dependency on a single provider.',
  },
  {
    title: 'Performance Optimization',
    details: 
      'With Digiflex.ai, businesses can migrate workloads to cloud environments offering higher speed, reliability, and lower latency.',
  },
  {
    title: 'Compliance and Regulations',
    details: 
      'Digiflex.ai ensures compliance with industry regulations by securely migrating and storing data in the required geographic locations.',
  },
  {
    title: 'Disaster Recovery and Redundancy',
    details: 
      'Digiflex.ai enhances data security and business continuity by distributing workloads across multiple clouds for backup and fault tolerance.',
  },
  {
    title: 'Scalability and Flexibility',
    details: 
      'Digiflex.ai empowers businesses to scale seamlessly by leveraging multi-cloud solutions for diverse services and infrastructure needs.',
  },
];

function Intercloud_need() {

  return (
    <WrapperContainer>
      <Heading>
        <h1>Why Choose Digiflex.ai for Intercloud Migration?</h1>
      </Heading>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {data.map((industry, index) => (
              <div
                key={index}
                className="p-6 md:p-3 bg-white transform transition-all duration-500 hover:scale-105 group flex flex-col items-center text-center"
              >
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {industry.details}
                </p>
              </div>
            ))}
          </div>
    </WrapperContainer>
  );
}

export default Intercloud_need;

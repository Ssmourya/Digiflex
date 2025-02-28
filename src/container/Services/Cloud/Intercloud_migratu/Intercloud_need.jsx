import React, { useState } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Fontheading from '../../../../Layout/Fontheading';

const data = [
  {
    title: 'Cost Optimization',
    details:
      'Digiflex helps businesses reduce cloud expenses by strategically migrating workloads to cost-effective cloud providers.',
  },
  {
    title: 'Vendor Lock-in Avoidance',
    details: 
      'Digiflex enables seamless transitions between cloud platforms, ensuring flexibility and preventing dependency on a single provider.',
  },
  {
    title: 'Performance Optimization',
    details: 
      'With Digiflex, businesses can migrate workloads to cloud environments offering higher speed, reliability, and lower latency.',
  },
  {
    title: 'Compliance and Regulations',
    details: 
      'Digiflex ensures compliance with industry regulations by securely migrating and storing data in the required geographic locations.',
  },
  {
    title: 'Disaster Recovery and Redundancy',
    details: 
      'Digiflex enhances data security and business continuity by distributing workloads across multiple clouds for backup and fault tolerance.',
  },
  {
    title: 'Scalability and Flexibility',
    details: 
      'Digiflex empowers businesses to scale seamlessly by leveraging multi-cloud solutions for diverse services and infrastructure needs.',
  },
];

function Intercloud_need() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <WrapperContainer>
      <Heading>
        <h1>Why Choose Digiflex for Intercloud Migration?</h1>
      </Heading>
      <div className="">
        <ul className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {data.map((item, index) => (
            <li
              key={index}
              className="p-4 border-b last:border-b-0 cursor-pointer transition-all duration-300 
              hover:bg-blue-900 hover:text-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
            <Fontheading>
              <div>{item.title}</div>
              </Fontheading>
              {hoveredIndex === index && (
                <p className="mt-2 transition-opacity duration-500">{item.details}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </WrapperContainer>
  );
}

export default Intercloud_need;

import React from 'react';
import { FaClipboardList, FaCogs, FaCode, FaShieldAlt, FaRocket } from "react-icons/fa";
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';

const steps = [
  {
    title: "Requirement",
    description: "Collaboratively identify and outline the precise business logic the smart contract must support.",
    icon: <FaClipboardList className="text-blue-500 text-4xl" />,
  },
  {
    title: "Architecture Design",
    description: "Develop a comprehensive blueprint that embodies the defined business logic, ensuring the smart contract's structure is robust and functional.",
    icon: <FaCogs className="text-green-500 text-4xl" />,
  },
  {
    title: "Contract Development",
    description: "Craft the smart contract code on your chosen blockchain platform, accompanied by rigorous unit testing to confirm performance as expected.",
    icon: <FaCode className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Internal Audit",
    description: "Perform extensive audits on a local blockchain and testnet to verify functionality and security compliance.",
    icon: <FaShieldAlt className="text-purple-500 text-4xl" />,
  },
  {
    title: "Deployment",
    description: "Launch the smart contract on the operational blockchain, ensuring it is ready for real-world application.",
    icon: <FaRocket className="text-red-500 text-4xl" />,
  },
];

const ProcessSmartContract = () => {
  return (
    <WrapperContainer>
      <div>
        <div className="max-w-6xl mx-auto text-center">
          <Heading>
             Smart Contract Development Process
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-6">
          <Subheading>
            From Concept to a Reliable Smart Contract
          </Subheading>
          <Paragraph>
            <span className='block text-center'>
            Smart contracts are categorized into two main types: Simple Contracts for managing basic agreements and Complex Contracts designed for DAOs and Application Logic Contracts (ALCs). These contracts enable sophisticated operations and integrate with IoT technologies.
            </span>
          </Paragraph>
        </div>

        {/* Process Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <div className="p-4 bg-gray-100 rounded-full">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ProcessSmartContract;

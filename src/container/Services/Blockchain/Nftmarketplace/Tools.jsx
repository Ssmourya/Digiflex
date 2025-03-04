import React, { useState, memo } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

// Icon components for reusability
const Icon = ({ iconKey }) => {
  const IconPaths = {
    frontend: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    backend: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    ),
    blockchain: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    storage: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    ),
    security: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    testing: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    )
  };

  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {IconPaths[iconKey]}
    </svg>
  );
};

// Memoized TechCard component for performance optimization
const TechCard = memo(({ stack, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl p-6 cursor-pointer
        transition-all duration-300 transform hover:-translate-y-1
        ${isSelected ? 'shadow-2xl ring-2 ring-blue-500 bg-white' : 'shadow-lg hover:shadow-xl bg-white'}`}
      aria-selected={isSelected}
      role="button"
      aria-label={`View ${stack.title} technologies`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'} transition-colors duration-300`}>
          <Icon iconKey={stack.iconKey} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{stack.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{stack.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {stack.technologies.map((tech, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded-md transition-all duration-300
                  ${isSelected ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-700'}`}
              >
                {tech.name}
                <span className="block text-xs text-gray-500">{tech.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

// Main component to manage selected stack and display the tech stacks
const Tools = () => {
  const [selectedStack, setSelectedStack] = useState(null);

  const techStacks = [
    {
      title: "Frontend Development",
      iconKey: "frontend",
      description: "Modern, responsive user interfaces with cutting-edge web technologies",
      technologies: [
        { name: "React.js", description: "Component-based UI" },
        { name: "Next.js", description: "SSR & Static Generation" },
        { name: "TailwindCSS", description: "Utility-first styling" },
        { name: "TypeScript", description: "Type-safe development" },
        { name: "Web3.js", description: "Blockchain integration" },
        { name: "Redux Toolkit", description: "State management" }
      ]
    },
    {
      title: "Backend Development",
      iconKey: "backend",
      description: "Scalable server architecture and API development",
      technologies: [
        { name: "Node.js", description: "Runtime environment" },
        { name: "Express.js", description: "Web framework" },
        { name: "MongoDB", description: "NoSQL database" },
        { name: "GraphQL", description: "Query language" },
        { name: "Redis", description: "Caching layer" },
        { name: "Socket.io", description: "Real-time updates" }
      ]
    },
    {
      title: "Blockchain Integration",
      iconKey: "blockchain",
      description: "Secure smart contract development and blockchain connectivity",
      technologies: [
        { name: "Solidity", description: "Smart contracts" },
        { name: "Hardhat", description: "Development toolkit" },
        { name: "OpenZeppelin", description: "Security standards" },
        { name: "Ethers.js", description: "Ethereum library" },
        { name: "MetaMask", description: "Wallet integration" },
        { name: "Truffle", description: "Testing framework" }
      ]
    },
    {
      title: "Storage Solutions",
      iconKey: "storage",
      description: "Decentralized and traditional storage systems",
      technologies: [
        { name: "IPFS", description: "Decentralized storage" },
        { name: "Filecoin", description: "Permanent storage" },
        { name: "AWS S3", description: "Cloud storage" },
        { name: "Pinata", description: "IPFS pinning" },
        { name: "Arweave", description: "Permanent storage" },
        { name: "CloudFlare", description: "CDN & caching" }
      ]
    },
    {
      title: "Security & Authentication",
      iconKey: "security",
      description: "Multi-layer security and user authentication",
      technologies: [
        { name: "JWT", description: "Token auth" },
        { name: "OAuth 2.0", description: "Authorization" },
        { name: "Web3 Auth", description: "Wallet auth" },
        { name: "2FA", description: "Two-factor auth" },
        { name: "RBAC", description: "Access control" },
        { name: "SSL/TLS", description: "Data encryption" }
      ]
    },
    {
      title: "Testing & Monitoring",
      iconKey: "testing",
      description: "Comprehensive testing and performance monitoring",
      technologies: [
        { name: "Jest", description: "Unit testing" },
        { name: "Cypress", description: "E2E testing" },
        { name: "Mocha", description: "Backend testing" },
        { name: "Sentry", description: "Error tracking" },
        { name: "DataDog", description: "Performance" },
        { name: "EthGasStation", description: "Gas monitoring" }
      ]
    }
  ];

  return (
    <>
      <WrapperContainer>
        <div>
          <div className="text-center mb-16">
            <Heading>
              <div>
                NFT Development Tech Stack
              </div>
            </Heading>
            <Paragraph>
              <span className='block text-center'>
                A comprehensive suite of technologies powering next-generation NFT marketplaces
              </span>             
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
            {techStacks.map((stack, index) => (
              <TechCard
                key={index}
                stack={stack}
                isSelected={selectedStack === index}
                onClick={() => setSelectedStack(index === selectedStack ? null : index)}
              />
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default Tools;

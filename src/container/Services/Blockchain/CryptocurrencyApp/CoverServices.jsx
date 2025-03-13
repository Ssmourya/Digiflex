
import React from 'react';
import {
  ShieldCheck,
  Wallet,
  Code,
  BarChart,
  Lock,
  Globe,
  Users,
  Rocket
} from 'lucide-react';



import Heading from '@/Layout/Heading';
import WrapperContainer from '@/Layout/WrapperContainer'
import Paragraph from '@/Layout/Paragraph';


const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
    <div className="p-6 flex flex-col items-center text-center space-y-4">
      <div className="p-5 bg-blue-100 rounded-full">
        <Icon size={32} className="text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  </div>
);

const CoverServices = () => {
  const services = [
    {
      title: 'Secure Wallet Development',
      description: 'We build secure and robust crypto wallets to store, send, and receive digital assets.',
      icon: Wallet
    },
    {
      title: 'Smart Contract Development',
      description: 'Our team develops smart contracts to automate transactions with transparency and security.',
      icon: Code
    },
    {
      title: 'Crypto Exchange Solutions',
      description: 'Developing scalable and high-performance crypto exchange platforms.',
      icon: BarChart
    },
    {
      title: 'Blockchain Security',
      description: 'Enhancing security measures to protect your blockchain ecosystem.',
      icon: ShieldCheck
    },
    {
      title: 'Token Development',
      description: 'Create custom crypto tokens for various blockchain networks.',
      icon: Globe
    },
    {
      title: 'DeFi Development',
      description: 'Decentralized finance solutions for lending, staking, and yield farming.',
      icon: Lock
    },
    {
      title: 'NFT Marketplace',
      description: 'Designing and developing NFT marketplaces for digital assets.',
      icon: Users
    },
    {
      title: 'Crypto Startup Consulting',
      description: 'Guidance for launching successful crypto businesses.',
      icon: Rocket
    }
  ];

  return (
   <WrapperContainer>
    <div>
      <div className="max-w-7xl mx-auto">
      <div className="bg-white  flex justify-center">
        <Heading>
          What We Cover In Cryptocurrency Services
        </Heading> 
      </div>
      <Paragraph  className='text-center'>
          We cover trading, security, wallet development, ICO, blockchain integration, and consulting.
        </Paragraph>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
   </WrapperContainer>
    
   
   
  );
};

export default CoverServices;

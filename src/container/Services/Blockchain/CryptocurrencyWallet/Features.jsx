import React from 'react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
    <div className="text-[#1E3A8A] flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-2 text-[#1E3A8A]">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      title: 'Multi-Wallet',
      description: 'Manage different cryptocurrencies using a unified interface, giving you the freedom to handle a variety of crypto assets in one place.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M21 7.28V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/>
          <circle fill="currentColor" cx="16" cy="12" r="1.5"/>
        </svg>
      )
    },
    {
      title: 'Import/Export Private Keys',
      description: 'Easily import or export private keys for efficient wallet management, enabling quick retrieval of lost or stolen assets.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-2c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5c1.7 0 3.2-.9 4.1-2.2l3.9 3.9 1.4-1.4-3.9-3.9c.3-.9.5-1.8.5-2.8zm10 0h-3v-3h-2v3h-3v2h3v3h2v-3h3"/>
        </svg>
      )
    },
    {
      title: 'User Information Dashboard',
      description: 'A centralized dashboard to monitor and manage all platform activities, offering a comprehensive view of crypto holdings and transactions.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      )
    },
    {
      title: 'Token Listing/Launchpad',
      description: 'Supports the secure and structured launch of new currencies within a dedicated environment for token listing and initial launches.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
        </svg>
      )
    },
    {
      title: 'Fiat On/Off Ramp',
      description: 'Seamlessly convert between cryptocurrencies and fiat currencies, simplifying entry and interaction with decentralized finance platforms.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      )
    },
    {
      title: 'On & Cross-Chain Swap',
      description: 'Facilitates token swaps within the same blockchain or across different blockchains, enabling smooth exchanges between diverse ecosystems.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
        </svg>
      )
    },
    {
      title: 'Staking',
      description: 'Lock a portion of assets to validate transactions and earn promising investment returns through staking.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13v5.25l4.5 2.67-.75 1.23L11 13V7z"/>
        </svg>
      )
    },
    {
      title: 'Bill/Utility Payments',
      description: 'Integrate payment processors within crypto wallets to enable effortless bill payments and utility transfers.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-14 h-14">
          <path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      )
    }
  ];

  return (
   <WrapperContainer>
        <div >
        <Heading>
        <div>
        Unique Features Of Cryptocurrency Wallet Development Solutions
        </div>
        </Heading>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
   </WrapperContainer>

      
    
   
  );
};

export default Features;
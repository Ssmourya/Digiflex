import React, { memo } from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';

// Memoized ServiceCard for performance optimization
const ServiceCard = memo(({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100 hover:border-gray-300">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
));

const services = [
  {
    title: "Asset Management Solutions",
    description: "Streamlined, decentralized solutions to help users manage their assets securely without relying on traditional financial intermediaries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Asset Management Solutions">
        <path d="M20 7h-9m9 7h-9m9-7a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h16zm0 7a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h16z" />
      </svg>
    )
  },
  {
    title: "Compliance and KYT Development",
    description: "Enhanced security and transparency with KYT transactions in DeFi-specific activities, ensuring regulatory compliance in decentralized finance and DeFi bases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Compliance and KYT Development">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "DeFi Exchanges Development",
    description: "Build robust and scalable decentralized exchanges (DEX) for token trading and cryptocurrencies with enhanced liquidity and security.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="DeFi Exchanges Development">
        <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4-4m-4 4l4 4" />
      </svg>
    )
  },
  {
    title: "Stablecoin Development",
    description: "Creation of stable digital currencies pegged to real-world assets, providing price stability and controlled automated adoption in DeFi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Stablecoin Development">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Digital Identity in DeFi Development",
    description: "Innovative identity management solutions to enable seamless, trustless verification and interaction within decentralized ecosystems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Digital Identity in DeFi Development">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Crowdfunding Platforms in DeFi",
    description: "Launch innovative DeFi crowdfunding solutions to drive global, borderless fundraising without traditional funding systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Crowdfunding Platforms in DeFi">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Digital Payments Solutions in DeFi",
    description: "Build decentralized payment solutions for instant transactions and low-cost digital transactions globally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Digital Payments Solutions in DeFi">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: "Tokenization in DeFi Development",
    description: "Enable asset tokenization to convert physical or digital assets into blockchain-based tokens, facilitating fractional ownership with liquidity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Tokenization in DeFi Development">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Synthetic Asset Development",
    description: "Create tokenized derivatives that mirror real-world assets, allowing investors to gain exposure without owning the actual asset.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Synthetic Asset Development">
        <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const DeFiServices = () => {
  return (
    <WrapperContainer>
      <div>
      <div className="max-w-6xl mx-auto">
        
          <Heading>
            Our DeFi Development Services
          </Heading>
          <Paragraph  className='text-center'>
            We provide secure, scalable, transparent, and innovative DeFi development solutions globally.
          </Paragraph>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
    
  );
};

export default DeFiServices;

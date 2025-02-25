import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Wallet,
  Code,
  BarChart,
  Globe,
  Users,
  ArrowRight
} from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';


const GridCard = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Stagger the appearance of cards
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200); // 200ms delay between each card

    return () => clearTimeout(timer);
  }, [index]);

  const iconComponents = {
    Wallet,
    Code,
    BarChart,
    Globe,
    Users,
    ShieldCheck
  };

  const IconComponent = iconComponents[icon];
  const bulletPoints = description.split('\n').filter(point => point.startsWith('•'));

  return (
    <div
      className={`
        transform
        transition-all
        duration-1000
        ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div
        className={`
          relative
          bg-white
          rounded-2xl
          transition-all
          duration-700
          ease-in-out
          ${isHovered ? 'shadow-2xl scale-105' : 'shadow-lg scale-100'}
          cursor-pointer
          overflow-hidden
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient overlay */}
        <div 
          className={`
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-50/50
            to-transparent
            transition-opacity
            duration-700
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        />

        <div className="p-8 relative">
          {/* Icon Container */}
          <div className="flex justify-center mb-6">
            <div 
              className={`
                relative
                group
                p-6
                rounded-full
                transition-all
                duration-700
                ease-in-out
                ${isHovered ? 'bg-blue-500 rotate-6' : 'bg-blue-100 rotate-0'}
              `}
            >
              {/* Animated rings */}
              <div 
                className={`
                  absolute
                  inset-0
                  rounded-full
                  border-2
                  border-blue-200
                  transition-all
                  duration-700
                  ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'}
                `}
              />
              <div 
                className={`
                  absolute
                  inset-0
                  rounded-full
                  border-2
                  border-blue-100
                  transition-all
                  duration-1000
                  delay-100
                  ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0'}
                `}
              />
              
              <IconComponent 
                size={32} 
                className={`
                  transition-all
                  duration-700
                  ${isHovered ? 'text-white -rotate-6' : 'text-blue-500 rotate-0'}
                `}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <h3 
              className={`
                text-xl
                font-bold
                text-center
                mb-4
                transition-all
                duration-700
                ${isHovered ? 'text-blue-600' : 'text-gray-800'}
              `}
            >
              {title}
            </h3>

            {/* Bullet points with staggered animation */}
            <div 
              className={`
                space-y-3
                transition-all
                duration-700
                ease-in-out
                ${isHovered ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}
              `}
            >
              {bulletPoints.map((point, idx) => (
                <div
                  key={idx}
                  className={`
                    flex
                    items-start
                    space-x-2
                    transition-all
                    duration-700
                    ease-in-out
                    ${isHovered 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  <ArrowRight 
                    size={16} 
                    className="mt-1 flex-shrink-0 text-blue-500" 
                  />
                  <p className="text-sm text-gray-600">
                    {point.substring(1).trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Animated border */}
          <div 
            className={`
              absolute
              bottom-0
              left-0
              h-1
              bg-gradient-to-r
              from-blue-400
              to-blue-600
              transition-all
              duration-700
              ease-in-out
              ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
            `}
          />
        </div>
      </div>
    </div>
  );
};

const AnimatedGrid = () => {
  const services = [
    {

      title: 'Secure Crypto Wallets',
      description: '• Multi-currency support with advanced security\n• Biometric authentication integration\n• Real-time transaction tracking\n• Secure key management\n• Cross-chain compatibility\n• Backup and recovery solutions',
      icon: 'Wallet'
    },
    {
      title: 'Smart Contract Development',
      description: '• Custom contract logic implementation\n• Security auditing and optimization\n• Multi-platform blockchain support\n• Automated testing and deployment\n• Gas optimization techniques\n• Upgrade mechanisms',
      icon: 'Code'
    },
    {
      title: 'Decentralized Exchange',
      description: '• Automated Market Maker (AMM)\n• Liquidity pool management\n• Cross-chain trading capabilities\n• Advanced order types\n• Yield farming integration\n• Real-time price feeds',
      icon: 'BarChart'
    },
    {
      title: 'Token Development',
      description: '• Custom token smart contracts\n• Multiple blockchain support\n• Tokenomics implementation\n• Security audit assistance\n• Exchange listing support\n• Token governance systems',
      icon: 'Globe'
    },
    {
      title: 'NFT Marketplace',
      description: '• Custom marketplace development\n• Minting functionality\n• Auction and bidding systems\n• Royalty management\n• Payment gateway integration\n• Collection management',
      icon: 'Users'
    },
    {
      title: 'Blockchain Security',
      description: '• Smart contract auditing\n• Penetration testing\n• Multi-layer security protocols\n• Real-time monitoring\n• Fraud detection systems\n• Emergency response planning',
      icon: 'ShieldCheck'
    }
  ];

  return (
    <WrapperContainer>
    <div>
      <Heading>
        <div>
        Our Services
        </div>
      </Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <GridCard
            key={index}
            {...service}
            index={index}
          />
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
};

export default AnimatedGrid;
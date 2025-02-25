import React from 'react';
import { ShieldCheck, Code, BarChart, Lock, Headphones, Globe } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from "../../../../Layout/Paragraph"

const WhyChooseItem = ({ title, description, icon: Icon }) => (
  <div className="flex items-center space-x-4 p-4 hover:bg-blue-50 rounded-lg transition-colors duration-300">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyChoose = () => {
  const reasons = [
    {
      title: 'Industry Expertise',
      description:
        'Years of experience in blockchain and cryptocurrency app development ensure the highest quality standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Advanced Security',
      description:
        'Multi-layer encryption, secure authentication, and cutting-edge security protocols to protect user assets.',
      icon: Lock,
    },
    {
      title: 'Scalability & Performance',
      description:
        'Optimized systems ensure high-speed transactions and efficient handling of millions of users.',
      icon: BarChart,
    },
    {
      title: 'Custom Blockchain Solutions',
      description:
        'Tailor-made solutions for DeFi, NFT marketplaces, exchanges, and custom token development.',
      icon: Code,
    },
    {
      title: '24/7 Technical Support',
      description:
        'Round-the-clock dedicated support team ensuring uninterrupted operations and real-time issue resolution.',
      icon: Headphones,
    },
    {
      title: 'Global Reach',
      description:
        'We build compliant, regulation-ready solutions to ensure smooth operations across multiple countries.',
      icon: Globe,
    },
  ];

  return (
    <WrapperContainer>
      <section>
        <div className="max-w-5xl mx-auto text-center px-4 mb-12">
          <Heading>
          <div>
          Why Choose Digiflex for Cryptocurrency App Development?
          </div>
          </Heading>
          <Paragraph>
            <span>
            Leverage our expertise and cutting-edge solutions to power your cryptocurrency application with robust security, scalability, and global reach.
            </span>
          </Paragraph>
          
          
        </div>
        <div className="max-w-3xl mx-auto space-y-4 px-4">
          {reasons.map((reason, index) => (
            <WhyChooseItem
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default WhyChoose;

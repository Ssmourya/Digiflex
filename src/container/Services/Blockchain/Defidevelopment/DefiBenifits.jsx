import React from 'react'
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

export default function BenefitsSection() {
    const benefits = [
      { icon: "➡️", title: "Process Simplification", desc: "DeFi reduces reliance on intermediaries, enabling direct transactions between participants." },
       { icon: "⚙️", title: "Process Automation", desc: "Smart contracts enable organizations to automate and accelerate their processes and services." },
      { icon: "$", title: "Reduced Transaction Cost", desc: "Peer-to-peer transactions between participants reduce transaction costs." },
      { icon: "📈", title: "Increased Control", desc: "Users' assets are stored in non-custodial wallets, enabling greater autonomy and control over assets." },
      { icon: "💰", title: "Liquidity", desc: "DeFi promotes financial inclusion by enabling access to financial services for the underbanked or unbanked population." },
      { icon: "🌍", title: "Transparency", desc: "DeFi’s Decentralized Autonomous Organization (DAO) augments transparency." },
    ];
  
    return (
    <WrapperContainer>
              
      <div>
        <Heading>
            <div>
            Real-Life Benefits of DeFi Software Development
            </div>
        </Heading>
        <Paragraph>
          <span className='block text-center'>
          DeFi software enables decentralization, security, transparency, fast transactions, and financial freedom.
          </span>
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4  rounded-2xl shadow-md">
              <div className="text-4xl text-blue-500 mb-4">{benefit.icon}</div>
             <Subheading>
             {benefit.title}
             </Subheading>
              <Paragraph>
              {benefit.desc}
              </Paragraph>
            </div>
          ))}
        </div>
      
      </div>

    </WrapperContainer>
 
    );
  }
  
import React from "react";
import { Wallet, Coins, Rocket, CreditCard, MessageSquare, Users, Code, Key } from "lucide-react";
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from "../../../../Layout/Paragraph";



const CryptoExchangeModules = () => {
  const modules = [
    {
      title: "Centralized Wallet",
      description:
        "This allows users to store their crypto tokens within the exchange ecosystem and the wallet is under custody.",
      icon: Wallet,
    },
    {
      title: "Staking Module",
      description:
        "Lock up mechanism which yields rewards and income. The rewards are stored for a particular period and enjoy other perks.",
      icon: Coins,
    },
    {
      title: "Launchpad Module",
      description:
        "Develop, incubate and fund worthy projects within your crypto exchange ecosystem.",
      icon: Rocket,
    },
    {
      title: "Fiat on Ramp",
      description:
        "Ensure users can make direct transactions or payments using debit/credit cards.",
      icon: CreditCard,
    },
    {
      title: "Social Media and Community",
      description:
        "Customize marketing plans to attract the community and increase engagement.",
      icon: MessageSquare,
    },
    {
      title: "Hire A Developer",
      description: "Choose professional developers to personally build your Crypto exchange.",
      icon: Users,
    },
    {
      title: "Crypto Exchange Clone Script",
      description:
        "Build a crypto exchange platform through a white-label script with efficiency and reliability.",
      icon: Code,
    },
    {
      title: "Crypto Exchange From Scratch",
      description:
        "Developing a custom solution from the ground up gives you complete control and customization.",
      icon: Key,
    },
  ];

  return (
    <WrapperContainer>
    <div className="max-w-7xl mx-auto ">
      <Heading>
        Crypto Exchange Modules
      </Heading>
      <Paragraph>
        <div className="text-center">
        Crypto exchange modules include user authentication, trading engine, wallet, and security.
        </div>
      </Paragraph>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105"
          >
            <module.icon className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{module.description}</p>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
};

export default CryptoExchangeModules;





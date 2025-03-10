import React from "react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";


const TopFeature = () => {
  const features = [
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <rect x="3" y="6" width="18" height="15" rx="2" strokeWidth="2"/>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Wallet and Fund Management",
      description: "Manage your wallets and funds efficiently with a secure dashboard."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-4l-4-4m4 4l-4 4" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Trading Pairs",
      description: "List various cryptocurrency trading pairs for smooth transactions."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Multi-Chain Support",
      description: "Support multiple blockchains for secure and flexible trading."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2"/>
            <path d="M12 3v3m0 15v-3M17 6h2M5 6h2" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Deposit and Withdrawal",
      description: "Seamless deposit & withdrawal options for quick trading access."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M3 17l6-6 4 4L21 7m-5-4h5v5" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Order Types",
      description: "Multiple order types to maximize investment opportunities."
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M3 3h18v18H3z M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth="2"/>
          </svg>
        </div>
      ),
      title: "Order and Trade Management",
      description: "Process and manage trade orders for an optimized experience."
    },
  ];

  return (
<>
<WrapperContainer>
      <div className="text-center">
        <Heading>
        <div>
          Top Features of Exchange Software
        </div>
        </Heading>
        <Paragraph>
          <div className="text-center">
          Our exchange software includes security, scalability, multi-currency support, and liquidity solutions.
          </div>
        </Paragraph>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-4 sm:p-6 rounded-xl  text-center  border-[#6D4A2D] transition-all duration-500 hover:shadow-2xl hover:border-white hover:bg-blue-500 group transform hover:-translate-y-1"
            >
              <div className="text-amber-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
      </>
  );
};

export default TopFeature;

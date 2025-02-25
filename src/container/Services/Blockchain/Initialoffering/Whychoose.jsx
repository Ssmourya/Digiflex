import React from "react";
import {
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const features = [
  {
    title: "End-to-End ICO Development",
    description:
      "Complete ICO solution from token creation to exchange listing, ensuring a smooth launch.",
    icon: <FaCogs className="text-blue-500 text-4xl" />,
  },
  {
    title: "Regulatory Compliance & Security",
    description:
      "SEC, FCA, and GDPR-compliant ICO solutions with integrated KYC/AML for investor trust.",
    icon: <FaShieldAlt className="text-red-500 text-4xl" />,
  },
  {
    title: "AI-Powered Tokenomics & Smart Contracts",
    description:
      "AI-driven analytics to design profitable token models and bug-free smart contracts.",
    icon: <FaChartLine className="text-green-500 text-4xl" />,
  },
  {
    title: "AI & Data-Driven Marketing",
    description:
      "Advanced AI marketing strategies for investor attraction and fundraising success.",
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
  },
  {
    title: "NFT & DeFi Integration",
    description:
      "Innovative ICOs backed by NFTs and DeFi staking models for added token value.",
    icon: <FaRocket className="text-purple-500 text-4xl" />,
  },
  {
    title: "24/7 Global Support & Expert Consulting",
    description:
      "Round-the-clock blockchain support and consulting to help startups succeed.",
    icon: <FaUsers className="text-cyan-500 text-4xl" />,
  },
];

const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
      <div className="p-4 bg-gray-100 rounded-full mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </article>
  );
};

const WhyChoose = () => {
  return (
    <WrapperContainer>
      <section className="py-12">
        <div className="max-w-6xl mx-auto text-center">
          <Heading>
            <h2>Why Choose Quest Digiflex</h2>
          </Heading>
          {/* Optional descriptive text */}
          <p className="mt-4 text-gray-600">
            Discover the innovative features that set us apart in the blockchain space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default WhyChoose;

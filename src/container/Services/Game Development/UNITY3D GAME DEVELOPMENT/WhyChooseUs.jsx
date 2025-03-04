import React from "react";
import { Users, CheckCircle, Briefcase } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from "../../../../Layout/Subheading";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    {/* Enhanced Background Circle */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full -translate-y-1/2 opacity-95" />
    
    {/* Icon */}
    <div className="relative z-10 flex justify-center -mt-6 ">
      <Icon className="w-10 h-10 text-gray-800" />
    </div>
    
    {/* Content */}
    <div className="text-center mt-4">
      <Subheading className="mb-2 text-lg font-semibold">{title}</Subheading>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Seasoned Unity Developers",
      description: "Our experts harness Unity's full potential to create high-quality, customized games.",
    },
    {
      icon: CheckCircle,
      title: "Full-Stack Unity Team",
      description: "From game design to animation, our skilled team handles every aspect of development.",
    },
    {
      icon: Briefcase,
      title: "Proven Track Record",
      description: "With top-tier brand partnerships, we consistently deliver outstanding gaming experiences.",
    },
  ];

  return (
    <WrapperContainer>
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <Heading >Why Choose Our Unity Game Development Company</Heading>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default WhyChooseUs;

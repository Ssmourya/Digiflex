import React from "react";
import { Users, CheckCircle, Briefcase } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from "../../../../Layout/Subheading";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    {/* Background Circle */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-amber-400 rounded-full -translate-y-1/2 opacity-90" />
    
    {/* Icon */}
    <div className="relative z-10 flex justify-center -mt-6 ">
      <Icon className="w-8 h-8 text-gray-700"  />
    </div>
    
    {/* Content */}
    <div className="text-center">
      <Subheading className="mb-2">{title}</Subheading>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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
      {/* Header */}
      <div className="text-center mb-12">
        <Heading>Why Choose Our Unity Game Development Company</Heading>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default WhyChooseUs;

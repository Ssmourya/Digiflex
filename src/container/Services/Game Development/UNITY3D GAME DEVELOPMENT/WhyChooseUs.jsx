import React from 'react';
import { Users, CheckCircle, Briefcase } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#f3f4f6] rounded-3xl p-8 relative overflow-hidden h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Yellow circle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-400 rounded-full -translate-y-1/2 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Icon */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className="p-4">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center">
        <Subheading>{title}</Subheading>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "SEASONED UNITY DEVELOPERS",
      description: "Our Unity game development company has dedicated experts in Unity game development to handle your projects. Years of experience allow us to leverage the engine's full potential, crafting exceptional games tailored to your requirements."
    },
    {
      icon: CheckCircle,
      title: "FULL-STACK UNITY TEAM",
      description: "Our Unity game studios brings together Unity masters, game designers, 3D artists, animation wizards, and sound engineers under one roof. This powerhouse of talent tackles every aspect of game development, from concept to captivating experience to deliver a masterpiece."
    },
    {
      icon: Briefcase,
      title: "NOTEWORTHY PARTNERSHIPS & EXPERIENCE",
      description: "Having partnered with some of the top global brands, our Unity 3d game development company has a proven track record of exceeding expectations. We leverage this experience to deliver exceptional results for projects of all sizes and scopes."
    }
  ];

  return (
    <WrapperContainer>
        {/* Header */}
        <div className="text-center mb-16">
          <Heading>WHY CHOOSE OUR UNITY GAME DEVELOPMENT COMPANY</Heading>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      
    </WrapperContainer>
  );
};

export default WhyChooseUs;

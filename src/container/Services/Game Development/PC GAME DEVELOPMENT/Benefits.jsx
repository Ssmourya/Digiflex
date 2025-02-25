import React from 'react';
import { CheckCircle, Users, ShieldCheck, Box } from 'lucide-react'; // Use Box instead of Cube
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 rounded-lg p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-gray-900 text-xl font-bold max-w-[70%]">{title}</h3>
      <div className="w-16 h-16"> {/* Adjust size with custom width and height */}
        {icon}
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Box className="text-blue-500" size={48} />,  // Increase icon size using size prop
      title: "END-TO-END PC GAME DEVELOPMENT",
      description: "Digiflex specializes in full-cycle PC game development, delivering tailored solutions that align with your vision and market needs. Our team ensures high-quality execution from concept to launch."
    },
    {
      icon: <Users className="text-green-500" size={48} />,  // Increase icon size using size prop
      title: "TRANSPARENT AND CLIENT-FOCUSED APPROACH",
      description: "We prioritize clear communication and collaboration to ensure our clients are always in control. With Digiflex, you get a dedicated partner committed to delivering exceptional results with complete transparency."
    },
    {
      icon: <ShieldCheck className="text-red-500" size={48} />,  // Increase icon size using size prop
      title: "ROBUST SECURITY AND DATA PROTECTION",
      description: "Security is a top priority at Digiflex. We implement best-in-class security protocols to safeguard your game data, player information, and infrastructure from potential threats."
    },
    {
      icon: <CheckCircle className="text-yellow-500" size={48} />,  // Increase icon size using size prop
      title: "SCALABLE AND ADAPTABLE DEVELOPMENT",
      description: "Whether it's a small indie project or a large-scale AAA game, Digiflex scales development resources efficiently. We quickly adapt to project needs, ensuring timely delivery without compromising quality."
    }
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading>
            <h2>WHY CHOOSE DIGIFLEX FOR PC GAME DEVELOPMENT?</h2>
          </Heading>

          <p className="max-w-3xl mx-auto">
            <Paragraph>
              At Digiflex, we leverage years of expertise in PC game development to bring your ideas to life. Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.
            </Paragraph>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Benefits;

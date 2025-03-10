import React from "react";
import { Users, DollarSign, Clock } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-green-700" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhyDigiflex = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced and Skilled Developers",
      description:
        "Digiflex houses a team of seasoned Vue.js developers, boasting a proven track record and a commitment to staying ahead of industry trends, ensuring the delivery of cutting-edge solutions.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions Without Compromise",
      description:
        "Recognizing budget constraints, Digiflex provides competitive rates and flexible pricing models, ensuring cost-effective solutions without compromising on quality.",
    },
    {
      icon: Clock,
      title: "On-Time Project Delivery, Every Time",
      description:
        "Digiflex employs efficient project management methodologies, ensuring timely project delivery and preventing any delays in launching your applications.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="mb-12">
        <Heading>Why Choose Digiflex </Heading>

        <Paragraph>
          As a leading Vue JS development company, Digiflex brings unmatched
          expertise and creativity to the forefront, offering tailored vue.js
          solutions to meet the evolving needs of businesses. With nearly a
          decade of experience, Digiflex stands as a trusted partner for Vue.js
          development services, consistently delivering outstanding results on a
          global scale.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default WhyDigiflex;

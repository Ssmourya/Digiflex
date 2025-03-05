import React from "react";
import {
  Paintbrush,
  Image,
  Layers,
  ShieldCheck,
  Users,
  Clock,
} from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const FeatureItem = ({ title, description, icon: Icon }) => (
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

const TopGameArtFeatures = () => {
  const features = [
    {
      title: "High-Quality 2D & 3D Art",
      description:
        "Our team delivers stunning 2D illustrations and 3D models with meticulous attention to detail.",
      icon: Paintbrush,
    },
    {
      title: "Concept Art & Design",
      description:
        "We create immersive game worlds with expert concept art, character design, and environments.",
      icon: Image,
    },
    {
      title: "Optimized Asset Production",
      description:
        "Our game assets are optimized for performance across various platforms and game engines.",
      icon: Layers,
    },
    {
      title: "Consistent Art Style",
      description:
        "We ensure uniformity in art direction to maintain a cohesive visual identity for your game.",
      icon: ShieldCheck,
    },
    {
      title: "Collaborative Teamwork",
      description:
        "Our artists work closely with game developers to bring visions to life seamlessly.",
      icon: Users,
    },
    {
      title: "Timely Delivery",
      description:
        "We adhere to deadlines and ensure timely delivery of high-quality game art assets.",
      icon: Clock,
    },
  ];

  return (
    <WrapperContainer>
      <section>
        <div className="max-w-5xl mx-auto text-center px-4 mb-10">
          <Heading>
            <div>Top Features of Game Art Services</div>
          </Heading>
          <Paragraph>
            <div className="text-center">
              Elevate your game with top-tier game art services, delivering
              exceptional visual quality and performance.
            </div>
          </Paragraph>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 px-4">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
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

export default TopGameArtFeatures;

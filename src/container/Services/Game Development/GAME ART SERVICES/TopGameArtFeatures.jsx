import React from "react";
import {
  Paintbrush,
  Image,
  Layers,
  ShieldCheck,
  Users,
  Clock,
} from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const FeatureItem = ({ title, description, icon: Icon }) => (
  <div className="relative pl-16">
    <div className="absolute left-0 top-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
    </div>
    <div className="border-l-2 border-blue-200 pl-8 pb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <Heading>
          <div className="text-center">Top Features of Game Art Services</div>
        </Heading>
        <Paragraph>
          <div className="text-center mb-12">
            Elevate your game with top-tier game art services, delivering
            exceptional visual quality and performance.
          </div>
        </Paragraph>
        
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[76px] w-0.5 bg-blue-100"></div>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TopGameArtFeatures;

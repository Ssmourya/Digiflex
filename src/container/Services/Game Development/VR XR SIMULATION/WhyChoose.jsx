import React from "react";
import { MessageSquare, Award, Users, BarChart3, Rocket } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";
import Heading from "../../../../Layout/Heading";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />, 
    title: "Immersive Environments",
  },
  { icon: <Award className="w-6 h-6" />, title: "Cutting-Edge Technology" },
  { icon: <Users className="w-6 h-6" />, title: "Realistic Simulations" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Scalability & Adaptability" },
];

const stats = [
  {
    number: "10+",
    label: "Years in VR/XR Development",
    icon: <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />,
  },
  {
    number: "30+",
    label: "Successful Simulations",
    icon: <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />,
  },
  {
    number: "100+",
    label: "Clients Served",
    icon: <MessageSquare className="w-12 h-12 mx-auto mb-4 text-blue-600" />,
  },
  {
    number: "200+",
    label: "VR/XR Projects",
    icon: <Rocket className="w-12 h-12 mx-auto mb-4 text-blue-600" />,
  },
];

function WhyChoose() {
  return (
    <WrapperContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Heading>Why Choose Our VR/XR Simulation Services?</Heading>
          <Paragraph>
            Our VR and XR simulation services leverage state-of-the-art 
            technology to create highly immersive and interactive experiences. 
            Whether for training, education, or entertainment, we design 
            realistic simulations that enhance engagement and effectiveness. 
            With our expertise, businesses can explore new possibilities in 
            virtual environments, ensuring seamless integration and scalability.
          </Paragraph>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-blue-950">{feature.icon}</div>
                <span className="text-gray-700">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {stat.icon}
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default WhyChoose;

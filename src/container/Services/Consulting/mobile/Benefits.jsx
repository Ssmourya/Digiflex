import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const benefits = [
  {
    title: "Better Customer Relationship",
    description:
      "At Digiflex.ai, we believe that great customer relationships are the foundation of successful collaborations. Through our professional mobile app consulting services, we prioritize building trust and maintaining a positive rapport with our clients.",
  },
  {
    title: "Boost Your Business Visibility",
    description:
      "At Digiflex.ai, we specialize in empowering your brand with remarkable visibility through expertly designed mobile applications. Our team will craft a comprehensive roadmap to showcase how your app can elevate your brand presence and captivate your target audience.",
  },
  {
    title: "Seamless App Development",
    description:
      "Partner with Digiflex.ai for a hassle-free app development process. Our expert consultants work closely with you to identify and integrate all essential features and functionalities, ensuring a smooth, efficient journey from concept to completion without missing a single detail.",
  },
  {
    title: "Crafting the Perfect Mobile Strategy",
    description:
      "At Digiflex.ai, our app development consulting services provide expert guidance to devise a robust mobile strategy. We ensure seamless integration of these strategies into your final application, aligning your goals with a results-driven approach.",
  },
  {
    title: "Optimizing the Discovery Stage",
    description:
      "At Digiflex.ai, we gather insights into your target audience and market trends to evaluate your apps potential for success. Our thorough market research during the discovery stage sets a strong foundation for a seamless and effective development lifecycle.",
  },
  {
    title: "Build a Winning MVP",
    description:
      "Our expert consultants and developers collaborate to create a Minimum Viable Product (MVP) for your mobile app, focusing on core functionalities and features. This approach helps gauge user engagement and gather valuable feedback, setting the stage for a successful full-scale launch.",
  },
];

function Benefits() {
  return (
    <WrapperContainer>
      <div className=" mx-auto">
        <Heading>
          How Are Our App Development Consulting Services Beneficial?
        </Heading>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Benefits;

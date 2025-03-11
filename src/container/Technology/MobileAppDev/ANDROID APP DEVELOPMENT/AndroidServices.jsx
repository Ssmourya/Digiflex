import React from "react";
import { Smartphone, Layers, Brain, Glasses, Watch, ShoppingBag } from "lucide-react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const services = [
  { icon: Smartphone, title: "Native Android", description: "Kotlin & Java-based apps" },
  { icon: Layers, title: "Cross-Platform", description: "Flutter & React Native development" },
  { icon: Brain, title: "AI & ML-Powered", description: "Smart automation and personalization" },
  { icon: Glasses, title: "Augmented Reality", description: "ARCore-based experiences" },
  { icon: Watch, title: "Wearable & IoT", description: "Android Watch, TV, and smart devices" },
  { icon: ShoppingBag, title: "On-Demand Apps", description: "Taxi booking, food delivery, e-learning" },
];

const AndroidServices = () => {
  return (
    <div className="min-h-screen bg-white p-12 flex flex-col items-center">
     
    <Heading> 
   
        Our Android Development Services at Digiflex.ai
   
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-sm bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md mb-4">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <Subheading>
            {service.title}</Subheading>
            <Paragraph>{service.description}</Paragraph>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default AndroidServices;

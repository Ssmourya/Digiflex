"use client";

import { motion } from "framer-motion";
import { Users, Code, Monitor, Cpu, ShieldCheck, BarChart, TrendingUp, Layers, Clock } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const benefits = [
  { title: "Access to Skilled Talent", icon: <Users className="w-6 h-6" />, description: "Digiflex enables you to quickly onboard experienced game developers, designers, and testers without the hassle of long hiring processes." },
  { title: "Cost Efficiency", icon: <BarChart className="w-6 h-6" />, description: "With Digiflex, reduce overhead costs by hiring resources as needed instead of maintaining a full-time in-house team." },
  { title: "Faster Time to Market", icon: <Clock className="w-6 h-6" />, description: "Accelerate game development with Digiflex's on-demand experts who can integrate seamlessly into your workflow." },
  { title: "Scalability & Flexibility", icon: <Layers className="w-6 h-6" />, description: "Easily scale your development team up or down based on project requirements with Digiflex, without long-term commitments." },
  { title: "Expertise in Niche Areas", icon: <Cpu className="w-6 h-6" />, description: "Hire specialists from Digiflex for AI, physics simulation, AR/VR, and multiplayer networking to enhance game mechanics." },
  { title: "Enhanced Security & Compliance", icon: <ShieldCheck className="w-6 h-6" />, description: "Ensure game security with Digiflex's experienced developers following best practices and compliance standards." },
  { title: "Seamless Integration", icon: <Monitor className="w-6 h-6" />, description: "Work with Digiflex professionals who adapt to your development environment, tools, and methodologies effortlessly." },
  { title: "Improved Productivity", icon: <TrendingUp className="w-6 h-6" />, description: "Boost development speed and quality with Digiflex's specialized teams focused on delivering high-performance games." },
  { title: "Focus on Core Business", icon: <Code className="w-6 h-6" />, description: "Let Digiflex's external experts handle technical complexities while you concentrate on game vision and business growth." },
];

const ResourceAugmentationBenefits = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading>
          <div>Real-Life Benefits of Resource Augmentation in Game Development</div>
        </Heading>
        <Paragraph>
          <span className="block text-center">
            Unlock efficiency, cost savings, and flexibility by leveraging Digiflex's resource augmentation for game development.
          </span>
        </Paragraph>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-blue-200" />

          <div className="space-y-12">
            {benefits.map((benefit, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex md:flex-row sm:flex-col items-center w-full"
                >
                  <div className="md:hidden w-full text-center p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-blue-100 p-2 rounded-full text-blue-600">{benefit.icon}</span>
                      <Subheading>{benefit.title}</Subheading>
                    </div>
                    <Paragraph>{benefit.description}</Paragraph>
                  </div>

                  {isLeft ? (
                    <>
                      <div className="hidden md:block w-5/12 text-right pr-4">
                        <div className="inline-block bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center justify-end space-x-2">
                            <span className="bg-blue-100 p-2 rounded-full text-blue-600">{benefit.icon}</span>
                            <Subheading>{benefit.title}</Subheading>
                          </div>
                          <Paragraph>{benefit.description}</Paragraph>
                        </div>
                      </div>
                      <div className="hidden md:flex w-2/12 justify-center items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                      </div>
                      <div className="w-5/12 hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12 hidden md:block"></div>
                      <div className="hidden md:flex w-2/12 justify-center items-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>
                      </div>
                      <div className="hidden md:block w-5/12 text-left pl-4">
                        <div className="inline-block bg-white p-4 rounded-lg shadow">
                          <div className="flex items-center justify-start space-x-2">
                            <span className="bg-blue-100 p-2 rounded-full text-blue-600">{benefit.icon}</span>
                            <Subheading>{benefit.title}</Subheading>
                          </div>
                          <Paragraph>{benefit.description}</Paragraph>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ResourceAugmentationBenefits;

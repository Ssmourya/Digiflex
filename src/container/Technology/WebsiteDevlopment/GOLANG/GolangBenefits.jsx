"use client";

import { motion } from "framer-motion";
import { Users, Code, Monitor, Cpu, ShieldCheck, BarChart, TrendingUp, Layers, Clock } from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const benefits = [
  { title: "Efficient Concurrency", icon: <Users className="w-6 h-6" />, description: "Golang's goroutines enable lightweight concurrency, making applications more efficient and scalable." },
  { title: "Simple and Clean Syntax", icon: <BarChart className="w-6 h-6" />, description: "Go's syntax is designed for clarity and ease of use, reducing complexity in large-scale development." },
  { title: "Fast Compilation & Execution", icon: <Clock className="w-6 h-6" />, description: "Go compiles quickly and runs efficiently, making it a great choice for high-performance applications." },
  { title: "Scalability & Flexibility", icon: <Layers className="w-6 h-6" />, description: "Golang allows you to build scalable applications with simple concurrency management and efficient memory usage." },
  { title: "Strong Standard Library", icon: <Cpu className="w-6 h-6" />, description: "Go's robust standard library provides built-in support for networking, cryptography, and web development." },
  { title: "Security & Reliability", icon: <ShieldCheck className="w-6 h-6" />, description: "With built-in garbage collection and memory safety, Go reduces vulnerabilities and improves security." },
  { title: "Seamless Cloud & Microservices Integration", icon: <Monitor className="w-6 h-6" />, description: "Golang is widely used for cloud-native applications and microservices due to its speed and efficiency." },
  { title: "Performance Optimization", icon: <TrendingUp className="w-6 h-6" />, description: "Go's minimalistic design ensures optimal performance for both backend systems and high-load applications." },
  { title: "Focus on Productivity", icon: <Code className="w-6 h-6" />, description: "Go simplifies development workflows, allowing teams to focus on building high-quality applications without unnecessary complexity." },
];

const GolangBenefits = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading>
          <div>Key Benefits of Using Golang for Development</div>
        </Heading>
        <Paragraph>
          <span className="block text-center">
            Discover why Go is a top choice for modern, high-performance application development.
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

export default GolangBenefits;

import Image from "next/image";
import React from "react";
import { Plus, Minus } from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import { PerformanceTestingFAQData } from "../FAQData";
import Faq from "@/components/Faq";

const challenges = [
  "Identifying performance bottlenecks",
  "Validating system reliability",
  "Optimizing resource usage",
  "Selecting the right performance testing tools",
  "Lack of proper test strategy & test coverage",
  "Improper analysis of performance test outcomes",
];

const solutions = [
  "Use profiling tools and monitoring software to identify bottlenecks",
  "Implement stress testing and load testing to validate system reliability",
  "Regularly monitor and fine-tune resource allocation",
  "Research and select tools based on project requirements, scalability, and integration capabilities",
  "Develop a robust test strategy and ensure adequate test coverage",
  "Analyze test results comprehensively using data visualization and analytics tools",
];

const Card = ({ title, items, color, Icon }) => (
  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg w-full">
    <div className="flex justify-between items-center mb-5">
      <Subheading className={`text-${color}-500`}>{title}</Subheading>
      <button className={`text-${color}-500`}>
        <Icon className="w-5 h-5" />
      </button>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <Paragraph key={index} className="text-start">
          {item}
        </Paragraph>
      ))}
    </div>
  </div>
);

const PerformanceChallenges = () => {
  return (
    <WrapperContainer>
      {/* Heading and Image Row */}
      <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-between items-center w-full lg:mb-10 gap-8 lg:gap-12">
        <Heading className="text-center lg:text-left">
          Performance Testing Challenges <br />
          and Solutions
        </Heading>
        <div className="w-full sm:w-[75%] md:w-[60%] lg:w-[35%] overflow-hidden">
          <Image
            src="/assets/perfo_test_and_sol.jpeg"
            width={500}
            height={300}
            alt="Performance Testing Challenges and Solutions"
            className="w-full object-cover rounded-xl shadow-md"
            priority={false}
          />
        </div>
      </div>
      {/* Challenges and Solutions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        <Card title="Challenges" items={challenges} color="red" Icon={Minus} />
        <Card title="Solutions" items={solutions} color="green" Icon={Plus} />
      </div>
      <Faq faqs={PerformanceTestingFAQData} />
    </WrapperContainer>
  );
};

export default PerformanceChallenges;

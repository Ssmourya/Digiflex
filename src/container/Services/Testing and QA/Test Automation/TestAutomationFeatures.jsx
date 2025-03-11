import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const TestAutomationFeatures = () => {
    const features = [
        "Executing test automation feasibility analysis",
        "Determining and configuring testing tools (Selenium, Ranorex, REST Assured, Apache JMeter, etc.)",
        "Creating personalized business test automation frameworks",
        "Merging test automation into the CI/CD pipeline",
        "Preparing test data and maintaining automated test scripts",
        "Continuously optimizing testing to improve efficiency and reduce costs",
    ];

    return (
        <WrapperContainer>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left Image Section */}
                <div className="sm:w-[224px] md:w-[384px] flex justify-center">
                    <img
                        src="/assets/Automation_Technology.jpeg"
                        alt="Test Automation Dashboard"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-[60%] space-y-6">
                    <Heading>Test Automation Services</Heading>

                    <Paragraph>
                        At Digiflex, we specialize in delivering high-performance test automation solutions to accelerate your business growth. Our team implements intelligent automation frameworks that optimize QA costs while ensuring seamless software delivery. Our automation testing services include:
                    </Paragraph>

                    {/* Features List */}
                    <div className="space-y-2">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {/* Checkmark Icon */}
                                <div className="flex-shrink-0 w-5 h-5">
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="45" fill="#1d4ed8" />
                                        <path
                                            d="M30 50 L45 65 L70 35"
                                            stroke="white"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                                <Paragraph className="text-md">{feature}</Paragraph>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default TestAutomationFeatures;
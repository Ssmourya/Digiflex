import React from "react";
import { Settings, Shield, Zap, GitBranch, BarChart, Lock, RefreshCw, Boxes } from "lucide-react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";

const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 space-y-4">
            <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-lg bg-[#1A2E6F]/10">
                    <Icon className="w-6 h-6 text-blue-700" />
                </div>
            </div>
            <div className="h-[1px] bg-gray-200 w-full my-4"></div>
            <Subheading className="text-2xl font-medium">{title}</Subheading>
            <Paragraph className="leading-relaxed">{description}</Paragraph>
        </div>
    );
};

const AutomationServices = () => {
    const services = [
        {
            title: "Advisory Services",
            description:
                "Our advisory services help identify, strategize, and implement effective automation solutions to streamline processes, reduce manual effort, and enhance operational efficiency.",
            icon: Settings,
        },
        {
            title: "Tool Evaluation",
            description:
                "We help you select the best-fit tools for your needs, ensuring optimal performance, integration, and return on investment for your automation initiatives.",
            icon: Shield,
        },
        {
            title: "Automation Framework",
            description:
                "We provide robust, scalable, and reusable frameworks tailored to your testing needs, ensuring efficient test script development, execution, and maintenance.",
            icon: Boxes,
        },
        {
            title: "Test Script Development",
            description:
                "We create and maintain reliable automated test scripts that adapt to evolving requirements, ensuring continuous and seamless testing.",
            icon: Zap,
        },
        {
            title: "CI/CD Integration",
            description:
                "We automate your build, test, and deployment pipelines to deliver consistent and fast results, allowing for quicker release cycles.",
            icon: GitBranch,
        },
        {
            title: "Performance Testing",
            description:
                "We assess the scalability and stability of your application under load, identifying bottlenecks and providing optimization insights.",
            icon: BarChart,
        },
        // {
        //     title: "Security Testing",
        //     description:
        //         "We identify vulnerabilities in your application and apply industry best practices to secure your system through audits and penetration testing.",
        //     icon: Lock,
        // },
        // {
        //     title: "Automated Regression",
        //     description:
        //         "Our automated regression testing ensures new code changes don't introduce defects, keeping your application stable as it evolves.",
        //     icon: RefreshCw,
        // },
    ];

    return (
        <WrapperContainer className="bg-white">
            <div>
                <Heading>Our Automation Services</Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        services.map( (service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
                        ))
                    }
                </div>
            </div>
        </WrapperContainer>
    );
};

export default AutomationServices;

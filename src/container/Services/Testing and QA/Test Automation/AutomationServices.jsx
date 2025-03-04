import React from 'react';
import { Settings, Shield, Zap, GitBranch, BarChart, Lock, RefreshCw, Boxes } from 'lucide-react';
import Heading from "../../../../Layout/Heading"
import Paragraph from "../../../../Layout/Paragraph"
import Subheading from "../../../../Layout/Subheading"
import WrapperContainer from '../../../../Layout/WrapperContainer';

const ServiceCard = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 space-y-4">
            <div className="flex items-center gap-4 mb-2">
                <div className="p-3 rounded-lg bg-[#1A2E6F]/10">
                    <Icon className="w-6 h-6 text-blue-700" />
                </div>
            </div>
            <div className="h-[1px] bg-gray-200 w-full my-4"></div>
            <Subheading className="text-2xl text-black font-medium">{title}</Subheading>
            <Paragraph className="leading-relaxed">{description}</Paragraph>
        </div>
    );
};

const AutomationServices = () => {
    const services = [
        {
            title: "Advisory Services",
            description: "Our advisory services help identify, strategize, and implement effective automation solutions to streamline processes, reduce manual effort, and enhance operational efficiency. With an expert team of professionals, we ensure your business requirements are always met.",
            icon: Settings
        },
        {
            title: "Tool Evaluation",
            description: "Our expertise in this field helps you decide, recommend, and select the best-fit tools for your specific needs, ensuring optimal performance, integration, and return on investment for your automation initiatives. We evaluate your pain points and take necessary actions to navigate the challenges effectively.",
            icon: Shield
        },
        {
            title: "Automation Framework",
            description: "Every business needs automation to be truly scalable. With smart automation being our latest go-to solution, we provide you with robust, scalable, and reusable frameworks tailored to your testing needs, ensuring efficient test script development, execution, and maintenance.",
            icon: Boxes
        },
        {
            title: "Test Script Development",
            description: "We create and uphold efficient, reliable automated test scripts that adapt to evolving requirements, ensuring continuous and seamless automated testing. They verify software functionality and regularly update and reflect changes in the application.",
            icon: Zap
        },
        {
            title: "CI/CD Integration",
            description: "Our CI/CD services ensure that your software is always in a deployable state. We automate your build, test, and deployment pipelines to deliver consistent and fast results, allowing for quicker release cycles and more reliable software.",
            icon: GitBranch
        },
        {
            title: "Performance Testing",
            description: "We provide performance testing services to assess the scalability and stability of your application under load. Our expert team uses advanced tools and techniques to identify bottlenecks and provide insights that optimize performance and user experience.",
            icon: BarChart
        },
        {
            title: "Security Testing",
            description: "Our security testing services identify vulnerabilities and weaknesses in your application, ensuring it is secure from potential threats. We apply industry best practices to perform comprehensive security audits and penetration testing to safeguard your systems.",
            icon: Lock
        },
        {
            title: "Automated Regression",
            description: "We offer automated regression testing to ensure that new code changes don't introduce defects into the system. Our reusable and scalable test scripts validate that your application's functionality remains intact as your software evolves.",
            icon: RefreshCw
        },
        {
          title: "Test Script Development",
          description: "We create and uphold efficient, reliable automated test scripts that adapt to evolving requirements, ensuring continuous and seamless automated testing. They verify software functionality and regularly update and reflect changes in the application.",
          icon: Zap
      },
    ];

    return (
        <WrapperContainer className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Heading and Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="lg:col-span-1 place-items-center text-center flex items-center">
                        <Heading>
                            Our Automation Services
                        </Heading>
                    </div>

                    <div className="lg:col-span-1">
                        <Paragraph>
                            At Digiflex, we streamline your software delivery with customized, high-quality test automation solutions. Our expert team leverages the latest technologies and methodologies to deliver robust automation solutions that reduce time to market, improve product quality, and minimize manual testing efforts.
                        </Paragraph>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default AutomationServices;
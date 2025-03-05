import React from 'react';
import { Cog, Database, CheckCircle, BarChart3, Layout, Code } from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const features = [
    {
        icon: <Cog className="w-8 h-8 text-blue-600" />,
        title: "Build-Test-Deploy Automation",
        description: "Streamline software delivery pipelines with seamless automation. Minimize manual intervention, reduce errors, and enhance CI/CD processes for rapid deployments."
    },
    {
        icon: <Database className="w-8 h-8 text-blue-600" />,
        title: "Component/Data Driven Automation",
        description: "Leverage reusable test components and dynamic data sets for scalable automation. Increase efficiency by reducing redundant scripts and enhancing adaptability to changes."
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
        title: "Built-in Automation Expertise",
        description: "Quickly adapt to evolving business requirements with a robust automation framework. Improve test accuracy and consistency while reducing manual intervention."
    },
    {
        icon: <Layout className="w-8 h-8 text-blue-600" />,
        title: "Easy Updating & Reusability",
        description: "Reduce maintenance costs and effort with a modular automation approach. Ensure high reusability of test scripts, minimizing redundancy and maximizing efficiency."
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
        title: "Advanced Reporting & Analysis",
        description: "Gain real-time insights with detailed reports and analytics dashboards. Identify performance bottlenecks, improve decision-making, and enhance test transparency."
    },
    {
        icon: <Code className="w-8 h-8 text-blue-600" />,
        title: "Comprehensive Test Framework",
        description: "Integrate seamlessly with various automation tools and technologies. Simplify test case management and enhance collaboration across teams."
    }
];

const SeleniumServices = () => {
    return (
        <WrapperContainer>
            <div>
                {/* Header Section */}
                <div>
                    <Heading>
                        Our Offering
                    </Heading>
                    <Subheading  className='text-center'>                       
                        End To End Selenium Testing Services                    
                    </Subheading>
                    <Paragraph  className='text-center'>
                        Our Selenium Testing Services Framework provides a comprehensive solution to
                        accelerate QA cycles and enhance digital service levels.
                    </Paragraph>
                </div>

                {/* Features Grid */}
                <div className=" grid md:grid-cols-2 gap-8">
                    {
                        features.map((feature, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <Subheading>
                                        {feature.title}
                                    </Subheading>
                                </div>
                                <Paragraph>
                                    {feature.description}
                                </Paragraph>
                            </div>
                        ))
                    }
                </div>
            </div>
        </WrapperContainer>
    );
};

export default SeleniumServices;

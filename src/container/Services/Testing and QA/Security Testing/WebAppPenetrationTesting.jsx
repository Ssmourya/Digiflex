    import React from 'react';
    import { Cpu, Lightbulb, Target } from 'lucide-react'; // Importing Lucide icons
    import WrapperContainer from '../../../../Layout/WrapperContainer';
    import Heading from '../../../../Layout/Heading';
    import Paragraph from '../../../../Layout/Paragraph';
    import Subheading from '../../../../Layout/Subheading';

    const TestingMethodCard = ({ title, description, bgColor, icon: Icon }) => {
        return (
            <div className="flex flex-col items-start space-y-4">
                <div className={`${bgColor} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                    <Icon className="text-white w-6 h-6" />
                </div>
                <Subheading className>{title}</Subheading>
                <Paragraph>{description}</Paragraph>
            </div>
        );
    };

    function WebAppPenetrationTesting() {
        const testingData = [
            {
                title: "Black Box Testing",
                description:
                    "DigiFlex.ai simulates real-world cyberattacks with no prior knowledge of your system. This approach assesses how well your application can withstand external threats.",
                bgColor: "bg-black",
                icon: Cpu,
            },
            {
                title: "White Box Testing",
                description:
                    "Our experts conduct detailed assessments using full access to your application’s source code and architecture, uncovering deep-seated vulnerabilities and improving system resilience.",
                bgColor: "bg-gray-500",
                icon: Lightbulb,
            },
            {
                title: "Gray Box Testing",
                description:
                    "Combining the strengths of Black and White Box testing, DigiFlex.ai identifies potential threats with limited internal access, ensuring balanced and thorough security insights.",
                bgColor: "bg-gray-700",
                icon: Target,
            },
        ];

        return (
            <WrapperContainer className="bg-white">   
                <Heading className="mb-8">
                    Comprehensive Web Application Penetration Testing Services
                </Heading>
                <Paragraph className="text-center mb-12">
                    At DigiFlex.ai, we deliver tailored penetration testing services to protect your applications against evolving cyber threats. Our methods ensure the security and integrity of your digital assets.
                </Paragraph>

                <div className="w-14/15 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testingData.map((test, index) => (
                        <TestingMethodCard
                            key={index}
                            title={test.title}
                            description={test.description}
                            bgColor={test.bgColor}
                            icon={test.icon}
                        />
                    ))}
                </div>
            </WrapperContainer>
        );
    }

    export default WebAppPenetrationTesting;

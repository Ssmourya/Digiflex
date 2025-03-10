import React from 'react';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const ImprovementSection = () => {
    const benefits = [
        "Achieve higher test coverage ensuring better product quality.",
        "Reduce test execution time by 50-99%.",
        "Minimize your overall cost of quality as we mitigate risks early in the SDLC.",
        "Accelerate your release cycle with the power of automation."
    ];

    const CheckIcon = () => (
        <div className="flex-shrink-0 w-6 h-6">
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <rect width="24" height="24" rx="6" className="fill-[#EEF2FF]" />
                <path
                    d="M7 13l3 3 7-7"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
        </div>
    );

    return (

        
        <WrapperContainer className="bg-white">
            <div className="max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <Heading>
                            Let's improve your efficiency.
                        </Heading>
                        <Paragraph  >
                            Test Automation can solve the challenges of rapid development
                            cycles and your need to respond to the escalating customer
                            demands while preserving quality. Our Automated testing
                            approaches can empower your business by ensuring precision
                            through rapid, seamless, automated test suites.
                        </Paragraph>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-0">

                        {
                            benefits.map( (benefit, index) => (
                                <div key={index} className="relative">
                                    <div className="flex items-start gap-4 py-1">
                                        <CheckIcon />
                                        <Paragraph className="text-[#6C63FF] text-md">{benefit}</Paragraph>
                                        {
                                            index < benefits.length - 1 && (
                                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EEF2FF]" />
                                            )
                                        }
                                    </div> 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </WrapperContainer>
    );
}         
        

export default ImprovementSection;
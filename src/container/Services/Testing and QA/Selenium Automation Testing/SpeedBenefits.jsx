import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const SpeedBenefits = () => {

    const statsData = [
        {
            value: "10x",
            title: "Faster Execution",
            subtitle: "Boost your digital performance",
            description: "With AI-powered automation and cloud efficiency, accelerate your digital transformation with reduced turnaround times.",
        },
        {
            value: "40%",
            title: "Cost Efficiency",
            subtitle: "Optimize resources, maximize savings",
            description: "Leverage our smart automation to cut down operational costs and redirect investments towards growth-driven initiatives.",
        },
        {
            value: "90%",
            title: "Enhanced Coverage",
            subtitle: "Data-driven insights, seamless scalability",
            description: "Gain deeper visibility into your business processes and improve decision-making with intelligent analytics and automation.",
        },
    ];

    return (
        <WrapperContainer>
            <div>
                <div className="text-center mb-16">
                    <Heading>
                        why digiflex.ai ?
                    </Heading>
                    <Subheading>
                        speed redefines success
                    </Subheading>
                    <Paragraph>
                        at digiflex.ai, we empower businesses with next-gen automation and AI-driven solutions. experience unparalleled speed, accuracy, and efficiency like never before.
                    </Paragraph>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {
                        statsData.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-baseline justify-center">
                                    <span className={`text-6xl font-bold text-blue-700`}>{stat.value}</span>
                                </div>
                                <h3 className={`text-xl font-semibold text-blue-700 mb-3`}>{stat.title}</h3>
                                <h4 className="text-lg font-semibold text-blue-700 mb-2">{stat.subtitle}</h4>
                                <p className="text-gray-600">{stat.description}</p>
                            </div>
                        ))
                    }
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                        explore our AI solutions
                    </button>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default SpeedBenefits;

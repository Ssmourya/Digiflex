import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const ProductShowcase = () => {
    const products = [
        {
            icon: "🤖",
            name: "digiflex AI",
        },
        {
            icon: "🌐",
            name: "Cross-Browser Testing",
        },
        {
            icon: "📱",
            name: "Mobile Device Cloud",
        },
        {
            icon: "📲",
            name: "App Automation",
        },
        {
            icon: "🌍",
            name: "Web Testing Suite",
        },
        {
            icon: "⚡",
            name: "AI-Powered Execution",
        },
        {
            icon: "👁️",
            name: "Automated Visual Testing",
        }
    ];

    return (
        <WrapperContainer>
            <div>
                <Heading>
                    Our Core Solutions
                </Heading>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
                    {
                        products.map((product, index) => (
                            <div
                                key={index}
                                className={"bg-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105"}
                            >
                                <div className="text-4xl mb-3">{product.icon}</div>
                                <Paragraph className="text-sm text-center">{product.name}</Paragraph>
                            </div>
                        ))
                    }
                </div>

                <div >
                    <Paragraph>
                        streamline, optimize, and innovate your testing workflows with cutting-edge ai-powered solutions.  {" "}
                        <a href="#" className="inline-flex items-center text-base text-blue-700 hover:text-blue-800 font-medium">
                            More about digiflex AI
                            <svg className="w-3 h-4 ml-[1px] relative top-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </Paragraph>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default ProductShowcase;
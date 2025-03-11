"use client";

import React, { useState } from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';

const strategies = [
    { title: "AI-Powered Automation", description: "Enhance efficiency with intelligent automation solutions by Digiflex.ai." },
    { title: "Conversational AI", description: "Deliver human-like interactions with AI-driven chatbots from Digiflex.ai." },
    { title: "Multi-Platform Integration", description: "Seamlessly connect with web, mobile, and enterprise platforms like CRM and ERP." },
    { title: "24/7 AI Support", description: "Ensure round-the-clock customer and internal support with AI-powered assistance." },
    { title: "Workflow Optimization", description: "Automate repetitive tasks and enhance business operations effortlessly." },
    { title: "Scalable AI Solutions", description: "Customize AI applications to meet specific business needs at Digiflex.ai." }
];

function AI_Strategies() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <>
            <WrapperContainer>
                <div>
                    <Heading>
                        <h1>AI Strategies by Digiflex.ai</h1>
                    </Heading>
                    <Subheading className='text-center'>Explore cutting-edge AI solutions designed to revolutionize your business operations:</Subheading>
                    
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                        {strategies.map((strategy, index) => (
                            <div
                                key={index}
                                className="p-6 md:p-3 bg-white transform transition-all duration-500 hover:scale-105 group flex flex-col items-center text-center"
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {strategy.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                    {strategy.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </WrapperContainer>
        </>
    );
}

export default AI_Strategies;
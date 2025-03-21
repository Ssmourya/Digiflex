"use client";
import Heading from '@/Layout/Heading'; 
import WrapperContainer from '@/Layout/WrapperContainer';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const services = [
    { title: "Custom AI Chatbot Development", description: "We design and develop chatbots from scratch, ensuring they align with your business goals and requirements." },
    { title: "NLP-Based Chatbots", description: "Our chatbots use Natural Language Processing (NLP) to understand user intent and provide accurate responses." },
    { title: "Voice-Enabled Chatbots", description: "Enable users to interact with your chatbot using voice commands for a hands-free experience." },
    { title: "AI Chatbots for Customer Support", description: "Reduce support workload with AI-driven responses, ticket automation, and seamless handoff to human agents when necessary." },
    { title: "Lead Generation & Sales Chatbots", description: "Convert visitors into customers by guiding them through sales funnels and answering product-related queries." },
    { title: "Chatbot Integration Services", description: "We integrate chatbots with your CRM, ERP, and other business tools for enhanced automation." }
];

function ChatbotServices() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleService = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex justify-center items-center min-h-screen">
            <WrapperContainer>
                <Heading className="text-center">Our AI Chatbot Development Services</Heading>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                    <div className="w-full md:w-1/2 flex flex-col space-y-4">
                        {services.map((service, index) => (
                            <div key={index} className="relative cursor-pointer" onClick={() => toggleService(index)}>
                                <div className={`flex items-center justify-between p-4 text-lg font-medium transition-all duration-300 ${openIndex === index ? 'border-green-600 border-l-4' : 'border-gray-300 border-l-4'}`}>
                                    <div className="flex-1">{service.title}</div>
                                    <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`transition-all duration-300 overflow-hidden pl-4 ${openIndex === index ? 'max-h-screen border-green-600' : 'max-h-0'}`}>
                                    <p className="text-gray-600 mt-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </WrapperContainer>
        </section>
    );
}

export default ChatbotServices;
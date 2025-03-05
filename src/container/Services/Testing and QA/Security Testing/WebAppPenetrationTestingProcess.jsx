import React, { useState } from 'react';

import Define_Scope from "../../../../assets/Define_Scope.jpeg";
import Information_Gathering from "../../../../assets/Information_Gathering.jpeg";
import Enumeration from "../../../../assets/Enumeration.jpeg";
import Attack_and_Penetration from "../../../../assets/Attack_and_Penetration.jpeg";
import reporting from "../../../../assets/reporting.jpeg";
import Remediation_Testing from "../../../../assets/Remediation_Testing.jpeg";

const PentestProgress = () => {
    const [currentSlide, setCurrentSlide] = useState(4); // Starting at "Reporting"

    const steps = [
        { 
            name: 'Define Scope',
            description: 'We work with you to clearly define the boundaries and objectives of the security assessment. This step ensures that both parties agree on the systems, applications, and networks that will be tested. It also includes determining the rules of engagement, legal considerations, and testing methodologies to be used. A well-defined scope helps avoid misunderstandings and ensures a smooth testing process.',
            image: Define_Scope,
            status: 'completed' 
        },
        { 
            name: 'Information Gathering',
            description: 'In this phase, we collect and analyze all available information about the target systems and infrastructure. This includes identifying domains, subdomains, IP addresses, technology stacks, employee email addresses, and any exposed data that could be leveraged in an attack. This step helps us understand the potential attack surface and develop effective testing strategies.',
            image: Information_Gathering,
            status: 'completed' 
        },
        { 
            name: 'Enumeration',
            description: 'Enumeration involves systematically mapping the network and identifying potential vulnerabilities and entry points. We gather details about open ports, running services, databases, and configurations. This step also includes identifying potential user accounts, API endpoints, and version-specific vulnerabilities in the applications. The goal is to uncover as much technical insight as possible about the target environment.',
            image: Enumeration,
            status: 'completed' 
        },
        { 
            name: 'Attack and Penetration',
            description: 'During this critical phase, controlled attacks are carefully executed to validate security weaknesses and potential impacts. We attempt to exploit vulnerabilities found in previous phases, using both automated tools and manual techniques. This process includes privilege escalation, lateral movement, and testing the effectiveness of security controls like firewalls, intrusion detection systems (IDS), and web application security measures. We ensure that all attacks are conducted in a safe and ethical manner without disruptions.',
            image: Attack_and_Penetration,
            status: 'completed' 
        },
        { 
            name: 'Reporting',
            description: 'After the testing is completed, we compile a comprehensive report detailing our findings. This includes an in-depth analysis of identified vulnerabilities, their severity levels, potential impact, and step-by-step exploitation techniques. We also provide clear remediation steps to help your team patch and mitigate security risks effectively. Our actionable insights empower your organization to strengthen defenses and prevent real-world cyber threats.',
            image: reporting,
            status: 'current' 
        },
        { 
            name: 'Remediation Testing',
            description: 'Once the recommended security fixes are implemented, we perform remediation testing to verify that the vulnerabilities have been effectively addressed. This step ensures that patches are properly applied, configurations are secured, and no new security gaps have been introduced. A final validation report is provided, confirming the security posture improvements and offering further recommendations if necessary.',
            image: Remediation_Testing,
            status: 'upcoming' 
        }
    ];
      
    const handlePrevious = () => {
        setCurrentSlide((current) => Math.max(0, current - 1));
    };

    const handleNext = () => {
        setCurrentSlide((current) => Math.min(steps.length - 1, current + 1));
    };

    return (
        <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-8 md:py-12 space-y-6 md:space-y-8">
            {/* Progress Steps */}
            <div className="relative overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex items-center justify-start md:justify-between min-w-max gap-2 md:gap-4">
                    {steps.map((step, index) => (
                        <div key={step.name} className="flex items-center">
                            <div className="relative flex items-center">
                                {/* Step Connector */}
                                <div
                                    className={`hidden md:block w-12 lg:w-24 h-[2px] transition-colors duration-300 ${
                                        index === 0 ? 'hidden' : 
                                        index <= currentSlide ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                                        'bg-gray-200'
                                    }`}
                                />

                                {/* Step Button */}
                                <button
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-auto min-w-[60px] md:min-w-[80px] lg:min-w-[100px] px-2 py-1 rounded-full border text-xs md:text-sm truncate whitespace-nowrap transition-all duration-300
                                        ${
                                            index === currentSlide 
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent' 
                                                : index < currentSlide 
                                                ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50' 
                                                : 'bg-white text-gray-400 border-gray-200'
                                        }`}
                                >
                                    {step.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden shadow-xl">
                <div className="p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                            <img 
                                src={steps[currentSlide].image} 
                                alt={steps[currentSlide].name} 
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/3 space-y-3 md:space-y-4 text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            {steps[currentSlide].name}
                        </h2>
                        <p className="text-base md:text-lg text-white/90">
                            {steps[currentSlide].description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center md:justify-end gap-3">
                <button 
                    onClick={handlePrevious}
                    disabled={currentSlide === 0}
                    className={`p-2 rounded-full border bg-white shadow-sm transition-all duration-300 
                        ${currentSlide === 0 
                            ? 'opacity-50 cursor-not-allowed border-gray-200' 
                            : 'border-gray-300 hover:bg-gray-50 active:bg-gray-100'}`}
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={handleNext}
                    disabled={currentSlide === steps.length - 1}
                    className={`p-2 rounded-full border bg-white shadow-sm transition-all duration-300
                        ${currentSlide === steps.length - 1 
                            ? 'opacity-50 cursor-not-allowed border-gray-200' 
                            : 'border-gray-300 hover:bg-gray-50 active:bg-gray-100'}`}
                >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PentestProgress;
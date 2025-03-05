import React from 'react';
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
import { Shield, Lock, AlertTriangle, Code, Bug, FileSearch, Bell, Activity, KeyRound, Users, BookOpen, Database } from 'lucide-react';

const steps = [
    { id: "01", title: "Threat Modelling", icon: Shield },
    { id: "02", title: "Gather Requirements", icon: FileSearch },
    { id: "03", title: "Penetration Testing", icon: Bug },
    { id: "04", title: "Code Review", icon: Code },
    { id: "05", title: "Testing During Development", icon: AlertTriangle },
    { id: "06", title: "Security Audits", icon: Lock },
    { id: "07", title: "Incident Response Planning", icon: Bell },
    { id: "08", title: "Continual Monitoring", icon: Activity },
    { id: "09", title: "Data Encryption", icon: KeyRound },
    { id: "10", title: "Access Control", icon: Users },
    { id: "11", title: "User Education", icon: BookOpen },
    { id: "12", title: "Backup and Recovery", icon: Database },
];

const tools = [
    "AppScan", "Checkmarx", "HP WebInspect", "Acunetix", "ZAP", "BurpSuite", "Tenable Nessus", "Sonar", "Snyk"
];

export default function SecurityApproach() {
    return (
        <WrapperContainer className="px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Heading>
                        Our Approach To Ensure Complete Security
                    </Heading>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {steps.map((step) => {
                        const IconComponent = step.icon;
                        return (
                            <div 
                                key={step.id}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                                    {step.id}
                                </div>
                                <div className="mb-4">
                                    <IconComponent className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {step.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
                
                <div className="mt-20 text-center">
                    <Heading>
                        Tools We Use
                    </Heading>
                    <Paragraph className="text-lg text-center text-gray-600 mb-10">
                        We leverage the latest and best tools for web test automation
                    </Paragraph>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool) => (
                            <div 
                                key={tool}
                                className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-100"
                            >
                                <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    {tool}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
}
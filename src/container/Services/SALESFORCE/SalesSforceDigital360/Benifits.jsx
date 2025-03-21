    // import Heading from "@/Layout/Heading";
    // import Paragraph from "@/Layout/Paragraph";
    // import Subheading from "@/Layout/Subheading";
    // import WrapperContainer from "@/Layout/WrapperContainer";
    // import { BarChart, Users, Zap, Server, Monitor, MessageSquare } from "lucide-react";

    // export default function Digital360Benefits() {
    // return (
    //     <>

    //     <WrapperContainer>
    //     <Heading>
    //     Benefits of Digital 360
    //     </Heading>
    //     <Paragraph>
    //     Digital 360 provides a comprehensive suite of tools to help businesses grow and thrive in the digital economy.
    //     </Paragraph>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    //         {/* Business Leaders */}
    //         <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
    //         <Subheading>
    //         For Business Leaders
    //         </Subheading>
    //         <ul className="space-y-6">
    //             {[{
    //             icon: <BarChart className="h-5 w-5" />, title: "Revenue Growth",
    //             description:  "Increase sales through personalized marketing, optimized commerce, and enhanced customer experiences."
    //             }, {
    //             icon: <Users className="h-5 w-5" />, title: "Customer Retention",
    //             description: "Build lasting relationships with customers through consistent, personalized experiences."
    //             }, {
    //             icon: <Zap className="h-5 w-5" />, title: "Operational Efficiency",
    //             description: "Automate processes and streamline operations to reduce costs and improve productivity."
    //             }].map((item, index) => (
    //             <li key={index} className="flex items-start">
    //                 <div className="h-8 w-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mr-4">
    //                 {item.icon}
    //                 </div>
    //                 <div>
    //                 <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
    //                 <p className="text-gray-700">{item.description}</p>
    //                 </div>
    //             </li>
    //             ))}
    //         </ul>
    //         </div>

    //         {/* IT Leaders */}
    //         <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
    //         <Subheading>
    //         For IT Leaders
    //         </Subheading>
    //         <ul className="space-y-6">
    //             {[{
    //             icon: <Server className="h-5 w-5" />, title: "Scalable Architecture",
    //             description: "Built on a cloud platform that can handle growing traffic and data without performance issues."
    //             }, {
    //             icon: <Monitor className="h-5 w-5" />, title: "Integration Capabilities",
    //             description: "Connect with existing systems and applications through robust APIs and pre-built connectors."
    //             }, {
    //             icon: <MessageSquare className="h-5 w-5" />, title: "Security & Compliance",
    //             description: "Enterprise-grade security features and compliance certifications to protect sensitive data."
    //             }].map((item, index) => (
    //             <li key={index} className="flex items-start">
    //                 <div className="h-8 w-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mr-4">
    //                 {item.icon}
    //                 </div>
    //                 <div>
    //                 <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
    //                 <p className="text-gray-700">{item.description}</p>
    //                 </div>
    //             </li>
    //             ))}
    //         </ul>
    //         </div>
    //     </div>
        
    //     {/* Success Metrics */}
    //     <div className="bg-[#1D4ED8] text-white p-10 rounded-lg shadow-lg text-center">
    //         <h3 className="text-3xl font-bold mb-6">Digital 360 Success Metrics</h3>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    //         {[{
    //             value: "34%", text: "Average increase in conversion rates"
    //         }, {
    //             value: "45%", text: "Faster time-to-market for new initiatives"
    //         }, {
    //             value: "28%", text: "Reduction in customer service costs"
    //         }, {
    //             value: "3.2x", text: "Return on investment within first year"
    //         }].map((item, index) => (
    //             <div key={index} className="text-center">
    //             <p className="text-5xl font-bold mb-2">{item.value}</p>
    //             <p className="text-lg">{item.text}</p>
    //             </div>
    //         ))}
    //         </div>
    //     </div>

    //     </WrapperContainer>

    //     </>
        
    // );
    // }
    
'use client';

import React from 'react';
import { BarChart, Users, Zap, Server, Monitor, MessageSquare, ChevronRight } from 'lucide-react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';
import Subheading from '@/Layout/Subheading';

export default function Digital360Benefits() {
  return (
    <WrapperContainer>

   
    <div >
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="text-center">
        <Heading>
        Benifits Of Digital 360
        </Heading>
        <Paragraph>
        Transform your business with our comprehensive suite of digital tools designed for the modern economy.
        </Paragraph>
        </div>
      </div>

      {/* Benefits Section - Business Leaders */}
      <div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <Subheading>
            For Business Leaders
            </Subheading>
            <p className="text-indigo-600 font-medium">Drive growth and improve customer satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                  <BarChart className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Revenue Growth</h3>
              </div>
              <p className="text-gray-600 pl-12">
                Increase sales through personalized marketing, optimized commerce, and enhanced customer experiences.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Customer Retention</h3>
              </div>
              <p className="text-gray-600 pl-12">
                Build lasting relationships with customers through consistent, personalized experiences.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="group">
              <div className="flex items-center mb-7">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                  <Zap className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Operational Efficiency</h3>
              </div>
              <p className="text-gray-600 pl-12">
                Automate processes and streamline operations to reduce costs and improve productivity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - IT Leaders */}
      <div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <Subheading>
            For IT Leaders
            </Subheading>
            <p className="text-blue-600 font-medium">Build robust, secure, and scalable systems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Server className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Scalable Architecture</h3>
              </div>
              <p className="text-gray-600 pl-12">
                Built on a cloud platform that can handle growing traffic and data without performance issues.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Monitor className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Integration Capabilities</h3>
              </div>
              <p className="text-gray-600 pl-12">
                Connect with existing systems and applications through robust APIs and pre-built connectors.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Security & Compliance</h3>
              </div>
              <p className="text-gray-600 pl-12">
                Enterprise-grade security features and compliance certifications to protect sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
}
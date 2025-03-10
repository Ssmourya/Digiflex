import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";


const reasons = [
  "Single Codebase for iOS, Android & Windows – Code once, deploy everywhere",
  "Native-Like UI & Performance – Full access to native APIs & controls",
  "Powered by Microsoft .NET & C# – Secure & enterprise-ready technology",
  "Supports MVVM Architecture – Improves code maintainability",
  "Seamless Integration with Microsoft Ecosystem – Azure, Visual Studio, DevOps"
];

const WhyChooseXamarin = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white-500 to-white-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className=" px-8 py-6">
          <Heading>
          
              <span>🚀</span> Why Choose Xamarin for App Development?
            </Heading>
            
          </div>
          {/* Reasons Grid */}
          <div className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <FaCheckCircle className="text-blue-600 text-3xl mt-1" />
                  <Subheading>{reason}</Subheading>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseXamarin;

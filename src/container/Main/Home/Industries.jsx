import React from 'react';
import { Cpu, LineChart, Wallet, Building2, Stethoscope, FileText, ServerCrash, Building } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

function App() {
  return (
    <div className="bg-white relative overflow-hidden">
      <WrapperContainer>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row relative px-4 py-8 lg:py-0 md:px-6 lg:px-0">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 z-10">
              <div className="inline-block mb-6">
                <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                  WHAT WE SERVE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-blue-700 leading-tight mb-4">
                Industries We Serve.
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-xl mb-6 lg:mb-2">
                Empowering Businesses with Innovative IT Solutions Across Diverse Sectors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-3 md:gap-4">
                      {/* Information Technology */}
      <div className="bg-white rounded-xl p-3 lg:p-2">
        <div className="inline-block bg-gray-100 rounded-xl p-3 mb-4 lg:mb-3">
          <ServerCrash className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mb-3 lg:mb-0">Information Technology</h3>
        <p className="text-gray-500 text-sm mb-2 leading-relaxed">
          Delivering cutting-edge IT infrastructure, cloud solutions, and cybersecurity services to modernize your business operations.
        </p>
        <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
          Read More <span className="ml-2">→</span>
        </button>
      </div>

      {/* Medical */}
      <div className="bg-white rounded-xl p-3 lg:p-2">
        <div className="inline-block bg-gray-100 rounded-xl p-3 mb-4 lg:mb-3">
          <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mb-3 lg:mb-0">Medical</h3>
        <p className="text-gray-500 text-sm mb-2 leading-relaxed">
          Specialized healthcare solutions including telemedicine platforms, patient management systems, and medical device integration.
        </p>
        <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
          Read More <span className="ml-2">→</span>
        </button>
      </div>

      {/* Finance */}
      <div className="bg-white rounded-xl p-3 lg:p-2">
        <div className="inline-block bg-gray-100 rounded-xl p-3 mb-4 lg:mb-3">
          <Wallet className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mb-3 lg:mb-0">Finance</h3>
        <p className="text-gray-500 text-sm mb-2 leading-relaxed">
          Comprehensive financial technology solutions including payment processing, digital banking platforms, and secure transaction systems.
        </p>
        <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
          Read More <span className="ml-2">→</span>
        </button>
      </div>

      {/* Real-Estate */}
      <div className="bg-white rounded-xl p-3 lg:p-2">
        <div className="inline-block bg-gray-100 rounded-xl p-3 mb-4 lg:mb-3">
          <Building className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mb-3 lg:mb-0">Real-Estate</h3>
        <p className="text-gray-500 text-sm mb-2 leading-relaxed">
          Property management systems, virtual viewing , and smart building technology solutions for estate business needs.
        </p>
        <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
          Read More <span className="ml-2">→</span>
        </button>
      </div>

              </div>
            </div>

            {/* Right Images */}
            <div className="hidden lg:flex w-1/2 xl:w-[50%] items-center justify-center relative">
              <div className="relative w-full max-w-5xl">
              <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Technology Solutions"
                  className="w-full h-full object-cover right-2 rounded-3xl "
                />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Advanced Technology"
                  className="absolute -bottom-10 -right-8 w-3/4 rounded-3xl shadow-2xl border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default App;
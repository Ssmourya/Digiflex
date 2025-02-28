import React from 'react';
import { Cpu, LineChart, Wallet, Code } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <WrapperContainer>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row relative px-4 md:px-6 lg:px-0">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 lg:mb-0 z-10">
              <div className="inline-block mb-6">
                <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                  WHAT WE SERVE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-blue-700 leading-tight mb-4">
                Industries We Serve.
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-xl mb-2">
                Empowering Businesses with Innovative IT Solutions Across Diverse Sectors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Technology */}
                <div className="bg-white rounded-xl p-2">
                  <div className="inline-block bg-gray-100 rounded-xl p-3 mb-3">
                    <Cpu className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b]">Technology</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Delivering innovative technology solutions that drive digital transformation and business growth.
                  </p>
                  <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
                    Read More <span className="ml-2">→</span>
                  </button>
                </div>

                {/* Consulting */}
                <div className="bg-white rounded-xl p-2">
                  <div className="inline-block bg-gray-100 rounded-xl p-3 mb-3">
                    <LineChart className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b]">Consulting</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Strategic IT consulting services helping businesses optimize operations and reduce costs.
                  </p>
                  <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
                    Read More <span className="ml-2">→</span>
                  </button>
                </div>

                {/* Financial Services */}
                <div className="bg-white rounded-xl p-2">
                  <div className="inline-block bg-gray-100 rounded-xl p-3 mb-3">
                    <Wallet className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b]">Financial Services</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Comprehensive fintech solutions including payment processing and digital banking platforms.
                  </p>
                  <button className="text-[#2196f3] text-sm font-medium flex items-center hover:text-blue-600">
                    Read More <span className="ml-2">→</span>
                  </button>
                </div>

                {/* Development */}
                <div className="bg-white rounded-xl p-2">
                  <div className="inline-block bg-gray-100 rounded-xl p-3 mb-3">
                    <Code className="w-6 h-6 md:w-8 md:h-8 text-[#2196f3]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e293b]">Development</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Custom software and website development services delivering scalable and secure solutions.
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

import React from 'react';
import { Cpu, LineChart, Wallet, Code } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* Left Content */}
          <div className="w-[50%]">
          <div className="inline-block">
              <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                WHAT WE SERVE
              </span>
            </div>
              <h2 className="text-[3.5rem] font-bold text-blue-700 leading-tight">
                Industries We Serve.
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
              Empowering Businesses with Innovative IT Solutions Across Diverse Sectors.
              </p>
            <div className="grid grid-cols-2 gap-8 py-5">
              {/* Technology */}
              <div className="bg-white rounded-xl">
                <div className="inline-block bg-gray-100 rounded-xl mb-6">
                  <Cpu className="w-8 h-8 text-[#2196f3]" />
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
              <div className="bg-white rounded-xl">
                <div className="inline-block bg-gray-100 rounded-xl mb-6">
                  <LineChart className="w-8 h-8 text-[#2196f3]" />
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
              <div className="bg-white rounded-xl">
                <div className="inline-block bg-gray-100 rounded-xl mb-6">
                  <Wallet className="w-8 h-8 text-[#2196f3]" />
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
              <div className="bg-white rounded-xl">
                <div className="inline-block bg-gray-100 rounded-xl mb-6">
                  <Code className="w-8 h-8 text-[#2196f3]" />
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
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-[45%]">
            <div className="relative">
              <img 
                src="https://html.designingmedia.com/futureai/assets/images/service-image1.png"
                alt="AI Technology Visualization"
                className="w-3/4 h-1/2 right-9"
              />
              <img 
                src="https://html.designingmedia.com/futureai/assets/images/service-image2.png"
                alt="Advanced AI Technology"
                className="absolute -bottom-32 right-4 w-[70%] h-[85%]"
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
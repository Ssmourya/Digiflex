import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

function App() {
  return (
    <div className=" bg-gradient-to-br from-[#000B1F] to-[#001F4E] relative overflow-hidden">
      {/* Network grid background effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80')] opacity-10 bg-cover bg-center" />
      <WrapperContainer>
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block">
              <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                WHY CHOOSE US
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transforming Business Through Advanced AI Solutions
            </h1>
            
            <p className="text-gray-300 text-lg">
              Leverage the power of artificial intelligence to streamline operations, enhance decision-making, and drive innovation across your organization with our cutting-edge solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="text-blue-400 h-5 w-5" />
                <span>Custom AI Solutions for Enterprise Growth</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="text-blue-400 h-5 w-5" />
                <span>Advanced Machine Learning Integration</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="text-blue-400 h-5 w-5" />
                <span>24/7 Intelligent Process Automation</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-blue-500 text-white px-8 py-2 mb-6 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-100">
            <img 
              src="https://html.designingmedia.com/artelligence/assets/images/choose-image.png"
              alt="AI Technology Visualization"
              className="rounded-4xl "
            />
          </div>
        </div>
      </div>
      </WrapperContainer>
    </div>
  );
}

export default App;
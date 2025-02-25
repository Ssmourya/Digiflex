import React from 'react';
import { Lightbulb, Palette, CheckCircle, Code } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

function App() {
  return (
    <div className="min-h-screen">
      <WrapperContainer>
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">WHAT WE OFFER</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-700">
            Comprehensive Digital Solutions for Your Business
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From ideation to execution, we provide expert consulting, design, development, and quality assurance to bring your vision to life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Collage */}
<div className="relative order-2 lg:order-1 h-[600px]">
  {/* Main Large Image */}
  <div className="absolute left-0 top-0 w-[70%] h-[500px] bg-white rounded-3xl">
    <img 
      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
      alt="AI Technology"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>

  {/* Top Right Image */}
  <div className="absolute -right-8 top-[5%] w-[35%] h-[300px] border-8 border-white">
    <img 
      src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=400"
      alt="Data Analysis"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>

  {/* Bottom Right Image */}
  <div className="absolute -right-10 bottom-0 w-[60%] h-[300px] border-8 border-white rounded-3xl">
    <img 
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
      alt="Machine Learning"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
  
  {/* Success Rate Badge */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    <div className="bg-blue-900 text-white rounded-full h-40 w-40 flex flex-col items-center justify-center shadow-2xl border-[6px] border-white">
      <span className="text-5xl font-bold">80%</span>
      <span className="text-sm font-medium mt-1">Success Project</span>
    </div>
  </div>
</div>

          {/* Right Side - Services List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-10">
          {/* Consulting */}
          <div className="flex items-start gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <Lightbulb className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic guidance and innovative solutions to help businesses harness technology and drive growth effectively.
              </p>
            </div>
          </div>

          {/* UI & UX Design */}
          <div className="flex items-start gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <Palette className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UI & UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Crafting seamless, engaging, and intuitive digital experiences that enhance user interaction and satisfaction.
              </p>
            </div>
          </div>

          {/* Testing & QA */}
          <div className="flex items-start gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <CheckCircle className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing & QA</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring high-quality, bug-free, and efficient applications through rigorous testing and quality assurance processes.
              </p>
            </div>
          </div>

          {/* Development */}
          <div className="flex items-start gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <Code className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Full-cycle development services, from frontend and backend to cloud and AI integrations, ensuring scalable and robust solutions.
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      </WrapperContainer>
    </div>
  );
}

export default App;
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <WrapperContainer>
      <div className="container mx-auto   ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative h-[600px]">
            {/* Main image */}
            <div className="relative z-10 h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Team Meeting"
                className="rounded-lg w-full h-full object-cover"
              />
              {/* Experience badge */}
              <div className="absolute right-4 top-1/3 bg-blue-500 text-white px-6 py-4 rounded-xl z-30">
                <div className="text-center">
                  <div className="text-3xl font-bold">+25 Years</div>
                  <div className="text-sm">Of Experience</div>
                </div>
              </div>
            </div>
            {/* Bottom image */}
            <div className="absolute bottom-0 right-0 transform translate-x-5 -translate-y-1 z-10 w-3/4 h-[200px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Team Collaboration"
                className="rounded-lg w-full h-full object-cover grayscale"
              />
            </div>
            {/*  accent line */}
            <div className="absolute left-0 bottom-0 w-24 h-2 bg-blue-500 transform -translate-y-20"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:pl-8">
          <div className="inline-block">
              <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                About Our Company
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Professional And Dedicated IT Services
            </h1>

            <p className="text-slate-600 text-lg">
              Empowering businesses through cutting-edge technology solutions and strategic consulting. We deliver comprehensive IT services that drive growth and innovation in the digital age.
            </p>

            <blockquote className="text-blue-500 text-xl font-medium italic">
              "Above all, we believe that real change is possible and that tomorrow doesn't have to be like today"
            </blockquote>

            <p className="text-slate-600 text-lg">
              With over two decades of experience in IT consulting, we've helped countless businesses transform their digital landscape. Our dedicated team combines technical expertise with strategic insight to create lasting value for our clients.
            </p>

            {/* Review Section */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center justify-between mt-12">
              <div className="flex items-center gap-8">
                <button className="text-blue-400 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  READ MORE <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Client" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Client" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Client" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Client" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm mt-1">Original reviews</div>
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
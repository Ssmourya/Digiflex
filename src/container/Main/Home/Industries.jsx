import React, { useState, useEffect } from 'react';
import WrapperContainer from '../../../Layout/WrapperContainer'
import { 
  LineChart, 
  Building2, 
  Cpu, 
  Factory, 
  BadgeDollarSign, 
  Landmark, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  MoveRight,
  Briefcase,
  Plane,
  Truck,
  ShoppingBag,
  Leaf
} from 'lucide-react';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const industries = [
    {
      title: "Fintech",
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Healthcare",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Energy",
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Government",
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Technology",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Retail",
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Banking",
      icon: <BadgeDollarSign className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Education",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Transportation",
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Travel",
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Real Estate",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Agriculture",
      icon: <Leaf className="w-8 h-8 text-blue-600" />,
      description: [
        "Streamline financial operations",
        "Enhance security and compliance"
      ],
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Limit to 12 industries
  const limitedIndustries = industries.slice(0, 12);

  const visibleIndustries = () => {
    const start = activeIndex;
    const end = Math.min(start + visibleCount, limitedIndustries.length);
    return limitedIndustries.slice(start, end);
  };

  const handlePrev = () => {
    if (isAnimating || activeIndex === 0) return;
    
    setIsAnimating(true);
    setAnimationClass('animate-slide-out-right');
    
    setTimeout(() => {
      setActiveIndex(Math.max(0, activeIndex - visibleCount));
      setAnimationClass('animate-slide-in-left');
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationClass('');
      }, 500);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating || activeIndex >= limitedIndustries.length - visibleCount) return;
    
    setIsAnimating(true);
    setAnimationClass('animate-slide-out-left');
    
    setTimeout(() => {
      setActiveIndex(Math.min(limitedIndustries.length - visibleCount, activeIndex + visibleCount));
      setAnimationClass('animate-slide-in-right');
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationClass('');
      }, 500);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      <WrapperContainer>
        <div className="flex flex-col items-center text-center mb-12">
          {/* Header Section with Navigation on the side */}
          <div className="w-full flex flex-col items-center">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                WHAT WE SERVE
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between -space-x-16 items-center w-full">
              <div className="flex flex-col items-center text-center mx-auto md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-4">
                  Industries We Serve.
                </h2>
                <p className="text-gray-500 text-base md:text-lg max-w-xl">
                  Empowering Businesses with Innovative IT Solutions Across Diverse Sectors.
                </p>
              </div>
              
              <div className="flex space-x-2 absolute right-8 md:relative md:right-0">
                <button 
                  onClick={handlePrev}
                  disabled={activeIndex === 0 || isAnimating}
                  className={`rounded-full p-3 border transition-all duration-200 ${activeIndex === 0 || isAnimating ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  disabled={activeIndex >= limitedIndustries.length - visibleCount || isAnimating}
                  className={`rounded-full p-3 border transition-all duration-200 ${activeIndex >= limitedIndustries.length - visibleCount || isAnimating ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 transition-all duration-500 ease-in-out ${animationClass}`}
          >
            {visibleIndustries().map((industry, index) => (
              <div key={index} className="relative">
                {/* Divider line (except for the first item) */}
                {index !== 0 && (
                  <div className="absolute left-0 top-8 bottom-8 w-px bg-gray-200"></div>
                )}
                
                <div className="group relative flex flex-col h-[450px] px-6 py-8 overflow-hidden transition-all duration-500">
                  {/* Background image container - always present but opacity changes */}
                  <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content container */}
                  <div className="relative z-10 flex flex-col h-full transition-colors duration-500 ease-in-out">
                    {/* Icon */}
                    <div className="transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:bg-blue-600/20 group-hover:border group-hover:border-blue-400/30 bg-blue-100 p-4 rounded-lg inline-flex items-center justify-center w-16 h-16 mb-4">
                      {React.cloneElement(industry.icon, { 
                        className: "w-8 h-8 text-blue-600 transition-colors duration-500 ease-in-out group-hover:text-white"
                      })}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-500 ease-in-out group-hover:text-white">
                      {industry.title}
                    </h3>
                    
                    {/* Description */}
                    <div className="space-y-2 mb-6">
                      {industry.description.map((desc, i) => (
                        <p key={i} className="text-gray-600 transition-colors duration-500 ease-in-out group-hover:text-gray-200">
                          {desc}
                        </p>
                      ))}
                    </div>
                    
                    {/* Image or Button */}
                    <div className="mt-auto">
                      <div className="transition-all duration-500 ease-in-out transform">
                        {/* Image (visible when not hovered) */}
                        <div className="h-48 rounded-lg overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:h-0">
                          <img 
                            src={industry.image} 
                            alt={industry.title} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </WrapperContainer>
    </div>
  );
}

export default App;
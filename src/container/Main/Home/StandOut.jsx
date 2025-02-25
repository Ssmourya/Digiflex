import React, { useState } from "react";
import WrapperContainer from '../../../Layout/WrapperContainer';

export const StandOut = () => {
  const strategies = [
    {
      number: "01",
      title: "PROJECT STRATEGY",
      description:
        "Every project is a canvas where we blend creative vision with strategic foresight. From the initial spark of an idea to the final flourish of execution, our seasoned strategists work hand-in-hand with your team to define goals, streamline processes, and chart a course to success.",
    },
    {
      number: "02",
      title: "DESIGN & MOTION",
      description:
        "We create visually stunning designs and animations that enhance user engagement and bring your brand to life.",
    },
    {
      number: "03",
      title: "SMOOTH DEVELOPMENT",
      description:
        "Our developers build seamless, high-performance solutions using the latest technologies to ensure scalability and efficiency.",
    },
    {
      number: "04",
      title: "POWERFUL MARKETING",
      description:
        "Through data-driven marketing strategies, we maximize reach, engagement, and conversions for your brand's success.",
    },
    {
      number: "05",
      title: "ONGOING SUPPORT",
      description:
        "We provide continuous support and maintenance to ensure your digital ecosystem remains secure and up-to-date.",
    }
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouchStart = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-full text-black ">
      <WrapperContainer>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <header className="text-center max-w-3xl mx-auto pb-6 sm:pb-8">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              PATHWAY TO <span className="relative text-blue-700">SUCCESS<span className="absolute -right-4 text-blue-700">.</span></span>
            </h1>
            <p className="mt-3 sm:mt-4 text-black text-sm sm:text-base lg:text-lg">
              Discover our proven strategies for business excellence
            </p>
          </header>

          <div className="hidden sm:flex justify-center">
            <div className="flex gap-3 lg:gap-6 pb-2">
              {strategies.map((strategy, index) => (
                <div
                  key={strategy.number}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => handleTouchStart(index)}
                  className={`relative rounded-3xl transition-all duration-500 ease-in-out cursor-pointer
                    ${hoverIndex === index || activeIndex === index ? "w-[280px] md:w-[320px] lg:w-[380px]" : "w-[100px] md:w-[120px] lg:w-[140px]"}
                    h-[320px] md:h-[380px] lg:h-[400px] bg-gradient-to-br from-blue-200 to-white hover:shadow-2xl hover:shadow-blue-200`}
                >
                  <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col transition-all duration-500 ease-in-out">
                    <div className="h-full flex flex-col justify-between">
                      <span className="text-blue-500 font-semibold">{strategy.number}</span>
                      <h3 className={`text-lg md:text-xl lg:text-2xl font-bold text-gray-900 transition-all duration-500 ease-in-out
                        ${hoverIndex === index || activeIndex === index ? "rotate-0" : "-rotate-90 origin-[0%_50%] translate-x-8"}
                        whitespace-nowrap`}>{strategy.title}</h3>
                    </div>
                  </div>
                  <div className={`absolute inset-0 p-4 md:p-6 lg:p-8 bg-white rounded-3xl shadow-xl
                    transform transition-all duration-700 ease-in-out
                    ${hoverIndex === index || activeIndex === index ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-10"}`}
                  >
                    <div className="flex flex-col h-full">
                      <span className="text-blue-500 font-semibold transition-all duration-700 delay-150">{strategy.number}</span>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 mb-3 md:mb-4 transition-all duration-700 delay-200">{strategy.title}</h3>
                      <p className="text-black text-sm md:text-base leading-relaxed flex-grow transition-all duration-700 delay-300">{strategy.description}</p>
                      <button className="mt-4 py-2 px-4 bg-blue-700 text-white rounded-xl hover:bg-blue-500 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-700 delay-500" aria-label={`Learn more about ${strategy.title}`}>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default StandOut;

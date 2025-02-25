import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import WrapperContainer from "../../../Layout/WrapperContainer";

function EnhancedTimeline() {
  const [activeId, setActiveId] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(null);
  const timelineRefs = useRef([]);
  const scrollTimeout = useRef(null);
  const scrollingTimeout = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const timelineData = [
    { 
      id: 1, 
      title: "Project Inception", 
      description: "Initial project planning and requirements gathering phase.", 
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      icon: "🚀"
    },
    { 
      id: 2, 
      title: "Design Phase", 
      description: "Creating wireframes, mockups, and finalizing the design system.", 
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      icon: "🎨"
    },
    { 
      id: 3, 
      title: "Development Start", 
      description: "Beginning the development process with core functionality.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: "💻"
    },
    { 
      id: 4, 
      title: "Initial Prototype", 
      description: "First working prototype ready for testing and feedback.", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      icon: "⚙️"
    },
    { 
      id: 5, 
      title: "Testing and Refinement", 
      description: "Comprehensive testing phase including bug fixes.", 
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
      icon: "🔍"
    },
    { 
      id: 6, 
      title: "Project Launch", 
      description: "Final deployment and official launch.", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      icon: "🎯"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollingTimeout.current) clearTimeout(scrollingTimeout.current);
      scrollingTimeout.current = setTimeout(() => setIsScrolling(false), 150);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const scrollContainer = document.querySelector('.timeline-scroll');
        if (!scrollContainer) return;

        const containerRect = scrollContainer.getBoundingClientRect();
        const containerCenter = containerRect.top + (containerRect.height / 2);

        let closestId = activeId;
        let minDistance = Number.MAX_VALUE;

        timelineRefs.current.forEach((el, index) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + (rect.height / 2);
            const distance = Math.abs(elementCenter - containerCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = timelineData[index].id;
            }
          }
        });

        if (closestId !== activeId) {
          setIsAnimating(true);
          setActiveId(closestId);
          setTimeout(() => setIsAnimating(false), 800);
        }
      }, 100);
    };

    const scrollContainer = document.querySelector('.timeline-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (scrollContainer) scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
      clearTimeout(scrollingTimeout.current);
    };
  }, [activeId]);

  // Auto-scroll to active item if it's changed by image click
  useEffect(() => {
    const activeElement = timelineRefs.current[activeId - 1];
    const scrollContainer = document.querySelector('.timeline-scroll');
    
    if (activeElement && scrollContainer && !isScrolling) {
      scrollContainer.scrollTo({
        top: activeElement.offsetTop - scrollContainer.offsetHeight / 2 + activeElement.offsetHeight / 2,
        behavior: 'smooth'
      });
    }
  }, [activeId, isScrolling]);

  // Image container variants for hover and active animations
  const imageContainerVariants = {
    normal: { scale: 1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" },
    hover: { scale: 1.03, boxShadow: "0 20px 30px rgba(37, 99, 235, 0.3)" }
  };

  // Step item variants for staggered animation
  const stepItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1, 
      x: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-black text-white min-h-screen py-12">
     
    <WrapperContainer>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-4 px-4 py-1 bg-blue-600/20 rounded-full"
          >
            <span className="text-blue-400 font-semibold">Our Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Project Timeline
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Follow our structured approach to delivering exceptional results at every stage
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Timeline section - 2 columns */}
          <div className="timeline-scroll lg:col-span-2 relative py-6 pr-4 max-h-[650px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/70 scrollbar-track-gray-900/20">
            {/* Timeline connector line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-9 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 rounded-full"
            />
            
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20%" }}
                  variants={stepItemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveId(item.id);
                    setTimeout(() => setIsAnimating(false), 800);
                  }}
                  onMouseEnter={() => setIsHovering(item.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  className={`p-6 pl-16 ml-4 rounded-xl cursor-pointer transition-all duration-300 relative backdrop-blur-sm
                    ${activeId === item.id 
                      ? 'bg-gradient-to-r from-blue-900/90 to-blue-700/90 text-white shadow-xl shadow-blue-900/30 transform'
                      : 'bg-gray-800/40 hover:bg-gray-800/60 hover:shadow-lg hover:shadow-blue-900/10'
                    }`}
                >
                  {/* Timeline icon */}
                  <motion.div 
                    className={`absolute left-0 top-1/2 w-8 h-8 flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10
                      ${activeId === item.id 
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' 
                        : 'bg-gray-800 text-blue-400 border-2 border-blue-500/50'}`}
                    animate={{ 
                      scale: activeId === item.id ? [1, 1.2, 1] : 1,
                      backgroundColor: activeId === item.id ? '#3B82F6' : '#1F2937',
                      boxShadow: activeId === item.id ? '0 0 15px rgba(59, 130, 246, 0.5)' : 'none'
                    }}
                    transition={{ 
                      scale: { repeat: activeId === item.id ? Infinity : 0, duration: 2.5 },
                      backgroundColor: { duration: 0.3 },
                      boxShadow: { duration: 0.3 }
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </motion.div>
                  
                  <div className="flex items-center">
                    <motion.span 
                      className="text-sm font-medium bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md"
                      animate={{ 
                        backgroundColor: activeId === item.id ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.1)',
                        color: activeId === item.id ? '#93C5FD' : '#60A5FA'
                      }}
                    >
                      Step {item.id}
                    </motion.span>
                    
                    {activeId === item.id && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full flex items-center"
                      >
                        <span className="mr-1">●</span> Active
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.h3 
                    className="mt-3 text-xl font-bold flex items-center"
                    animate={{ 
                      fontSize: activeId === item.id ? '1.375rem' : '1.25rem',
                      color: activeId === item.id ? '#ffffff' : '#e5e7eb'
                    }}
                  >
                    {item.title}
                    {activeId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="ml-2 text-blue-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.h3>
                  
                  <motion.p 
                    className="mt-2 text-gray-300"
                    animate={{ 
                      opacity: activeId === item.id ? 1 : 0.8,
                      lineHeight: activeId === item.id ? 1.7 : 1.6
                    }}
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* View button that appears on hover or active */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: (isHovering === item.id || activeId === item.id) ? 1 : 0,
                      y: (isHovering === item.id || activeId === item.id) ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center w-fit
                      ${activeId === item.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30'}`}
                    >
                      <span>{activeId === item.id ? 'Currently Viewing' : 'View Details'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image and content section - 3 columns */}
          <motion.div 
            className="lg:col-span-3 h-[650px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl shadow-blue-700/10"
            variants={imageContainerVariants}
            whileHover="hover"
            initial="normal"
          >
            {/* Progress indicator */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 bg-gray-900/70 backdrop-blur-sm px-4 py-2 rounded-full">
              {timelineData.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveId(item.id);
                    setTimeout(() => setIsAnimating(false), 800);
                  }}
                  className="relative w-4 h-4 rounded-full focus:outline-none overflow-hidden"
                  animate={{ 
                    backgroundColor: activeId === item.id ? '#3B82F6' : '#374151',
                    scale: activeId === item.id ? 1.2 : 1,
                  }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeId === item.id && (
                    <motion.div 
                      className="absolute inset-0 bg-blue-400"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1], opacity: [0, 0.6, 0] }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Background animated glowing ball */}
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-blue-600 filter blur-3xl opacity-20"
              animate={{
                x: ["10%", "60%", "20%", "10%"],
                y: ["20%", "40%", "70%", "20%"],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: "easeOut" }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.95,
                  filter: "blur(10px)",
                  transition: { duration: 0.3 }
                }}
                className="w-full h-full relative"
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={timelineData.find((item) => item.id === activeId)?.image}
                    alt="Timeline illustration"
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: isAnimating ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ 
                      scale: { duration: 1.5, ease: "easeInOut" } 
                    }}
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90 z-10"></div>
                
                {/* Main content container with parallax effect */}
                <motion.div 
                  className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-12"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {/* Icon avatar */}
                  <motion.div 
                    className="mb-6 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-blue-600/40"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  >
                    {timelineData.find((item) => item.id === activeId)?.icon}
                  </motion.div>
                  
                  <div className="flex items-center mb-4">
                    <motion.span 
                      className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg mr-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      STEP {activeId}
                    </motion.span>
                    <motion.div 
                      className="h-px bg-blue-400/30 flex-grow"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    />
                  </div>
                  
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {timelineData.find((item) => item.id === activeId)?.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xl text-gray-300 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {timelineData.find((item) => item.id === activeId)?.description}
                  </motion.p>
                  
                  {/* Action button */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-600/30 font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3">
                      Explore Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default EnhancedTimeline;
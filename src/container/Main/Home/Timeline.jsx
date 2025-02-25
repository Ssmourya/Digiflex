import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import WrapperContainer from "../../../Layout/WrapperContainer";

function App() {
  const [activeId, setActiveId] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const timelineRefs = useRef([]);
  const scrollTimeout = useRef(null);
  const scrollingTimeout = useRef(null);

  const timelineData = [
    { id: 1, title: "Project Inception", 
      description: "Initial project planning and requirements gathering phase.", 
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
    { id: 2, title: "Design Phase", 
      description: "Creating wireframes, mockups, and finalizing the design system.", 
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5" },
    { id: 3, title: "Development Start", 
      description: "Beginning the development process with core functionality.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
    { id: 4, title: "Initial Prototype", 
      description: "First working prototype ready for testing and feedback.", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
    { id: 5, title: "Testing and Refinement", 
      description: "Comprehensive testing phase including bug fixes.", 
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9" },
    { id: 6, title: "Project Launch", 
      description: "Final deployment and official launch.", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state to true
      setIsScrolling(true);
      
      if (scrollingTimeout.current) {
        clearTimeout(scrollingTimeout.current);
      }
      
      // Reset scrolling state after scrolling stops
      scrollingTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const scrollContainer = document.querySelector('.timeline-scroll');
        if (!scrollContainer) return;

        const containerRect = scrollContainer.getBoundingClientRect();
        const containerCenter = containerRect.top + (containerRect.height/2);

        let closestId = activeId;
        let minDistance = Number.MAX_VALUE;
        
        timelineRefs.current.forEach((el, index) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + (rect.height/2);
            
            const distance = Math.abs(elementCenter - containerCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = timelineData[index].id;
            }
          }
        });
        
        if (closestId == activeId) {
          setActiveId(closestId);
        }
      }, 100);
    };
    
    const scrollContainer = document.querySelector('.timeline-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (scrollingTimeout.current) {
        clearTimeout(scrollingTimeout.current);
      }
    };
  }, [activeId]);

  const handleItemClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="bg-white">
      <WrapperContainer>
        <div className="text-center">
          <h2 className="text-4xl pb-5 sm:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Project Timeline
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow our structured approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8">
          <div className="timeline-scroll relative py-8 pr-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%", amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => handleItemClick(item.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeId === item.id && !isScrolling
                      ? 'bg-blue-50 shadow-lg transform scale-105'
                      : 'hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <span className="text-sm font-medium text-blue-500">Step {item.id}</span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeId}
                src={timelineData.find((item) => item.id === activeId)?.image}
                alt="Timeline illustration"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default App;
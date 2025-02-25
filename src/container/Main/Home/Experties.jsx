import { motion } from "framer-motion";
import { Lightbulb, Palette, Smartphone, TestTube } from "lucide-react";
import WrapperContainer from '../../../Layout/WrapperContainer'

function Expertises() {
  const services = [
    {
      title: "CONSULTING",
      description: "We analyze your business needs and strategic solutions to enhance efficiency, scalability, and innovation.",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "UI/UX",
      description: "We focus on user research, wireframing, prototyping, and testing to deliver seamless and impactful designs.",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "CUSTOM APPS",
      description: "We build high-performance, scalable, and secure applications tailored to your unique requirements.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "DESIGN TESTING",
      description: "Bringing ideas to life through interactive prototypes and designs, we refine every detail before development.",
      icon: <TestTube className="w-8 h-8 text-blue-600" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <WrapperContainer>
        {/* Main Container with Mirrored Animated Border */}
        <div className="relative w-full max-w-[1400px] rounded-[2.5rem] p-0.5 overflow-hidden bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20">
          {/* Animated gradient overlays */}
          <div className="absolute inset-0">
            {/* Left-to-right gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-20 animate-gradient-x" />
            {/* Right-to-left gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-500 via-blue-400 to-blue-600 opacity-20 animate-gradient-x-reverse" />
          </div>

          {/* Inner Container */}
          <div className="relative bg-white rounded-[2.4rem] p-8 sm:p-12 lg:p-10 overflow-hidden">
            {/* Mirrored Background Gradient Elements */}
            {/* <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-400 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" /> */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
            {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" /> */}

            {/* Content */}
            <div className="relative max-w-7xl mx-auto">
              {/* Header Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <h2 className="text-5xl pb-5 font-bold text-blue-700">
                  Our Expertise
                </h2>
                <p className="mt-2 pb-5 text-gray-600 text-lg sm:text-xl">
                  Our expertise spans across multiple domains to ensure seamless user experiences, 
                  scalable applications, and innovative designs.
                </p>
              </motion.div>

              {/* Content Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative group"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center
                        group-hover:bg-blue-100 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide
                          group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Mirrored Hover Effect Lines */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-4 left-1/2 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 origin-left"
                    />
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-4 right-1/2 left-0 h-0.5 bg-gradient-to-l from-blue-500 to-blue-600 origin-right"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default Expertises;
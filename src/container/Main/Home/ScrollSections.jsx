import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Smartphone, TestTube } from "lucide-react";
import WrapperContainer from "../../../Layout/WrapperContainer";

const CenteredScrollSections = () => {
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

  return (
    <div className="bg-black w-full">
      {/* Section 1 - Why Us */}
      <div className="min-h-screen flex items-center justify-center sticky top-0">
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl p-0.5 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-30 animate-pulse" />
          <div className="relative bg-black rounded-3xl p-10 overflow-hidden text-white">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="relative text-center"
            >
              <motion.div variants={item}>
                <h2 className="text-5xl pb-5 font-bold text-blue-600 drop-shadow-lg">
                  Why Us
                </h2>
                <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
                  At Digiflex, we empower businesses with cutting-edge IT solutions,
                  cloud services, and strategic consulting to drive digital
                  innovation and operational efficiency.
                </p>
              </motion.div>
              
              <div className="flex justify-center mt-8">
                <ul className="mt-6 space-y-4 text-left max-w-md">
                  {["Innovation-Driven Solution", "Customer-Centric Approach", "Industry Expertise", "Scalability & Growth"].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="flex items-center space-x-3 group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-400 transition-colors duration-300">
                        ✔
                      </span>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div variants={item} className="mt-12">
                <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-blue-600">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20" />
                  <video
                    className="w-full h-full object-cover"
                    src="https://videos.pexels.com/video-files/3205618/3205618-sd_640_360_25fps.mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2 - Expertise */}
      <div className=" flex items-center justify-center sticky top-0 bg-black shadow-xl overflow-hidden">
      <WrapperContainer>
        <div className="relative rounded-3xl p-1 bg-gradient-to-br from-blue-600 to-black shadow-xl overflow-hidden">
          <div className="relative bg-black rounded-3xl p-12 backdrop-blur-md bg-opacity-90">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
                Our Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Our expertise spans across multiple domains to ensure seamless user experiences,
                scalable applications, and innovative designs.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative group p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-600 hover:border-white"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide drop-shadow-md">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        </WrapperContainer>
      </div>

      {/* Section 3 - Industries */}
      <div className=" flex items-center justify-center sticky top-0">
      <WrapperContainer>
        <div className="relative  rounded-3xl p-0.5 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-30 animate-pulse" />
          <div className="relative bg-black rounded-3xl p-10 overflow-hidden text-white">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="relative text-center"
            >
              <motion.div variants={item}>
                <h2 className="text-5xl pb-5 font-bold text-blue-600">
                  Industries
                </h2>
                <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
                  At Digiflex, we empower businesses with cutting-edge IT solutions, 
                  cloud services, and strategic consulting to drive digital 
                  innovation and operational efficiency.
                </p>
              </motion.div>
              
              <div className="flex justify-center mt-8">
                <ul className="mt-6 space-y-4 text-left max-w-md">
                  {["Technology", "Consulting", "Financial Services", "Development"].map((text, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="flex items-center space-x-3 group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors duration-300">
                        ✔
                      </span>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div variants={item} className="mt-12">
                <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-blue-600">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20" />
                  <video
                    className="w-full h-full object-cover"
                    src="https://videos.pexels.com/video-files/3245638/3245638-sd_640_360_25fps.mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        </WrapperContainer>

      </div>
    </div>
  );
};

export default CenteredScrollSections;
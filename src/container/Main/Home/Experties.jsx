import { motion } from "framer-motion";
import { Lightbulb, Palette, Smartphone, TestTube } from "lucide-react";

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
    <div className="flex items-center justify-center bg-black py-20 px-6 w-full">
      {/* Main Container with Animated Border */}
      <div className="relative w-full max-w-[1400px] rounded-3xl p-1 bg-gradient-to-br from-blue-600 to-black shadow-xl overflow-hidden">
        <div className="relative bg-black rounded-3xl p-10 sm:p-14 lg:p-16 backdrop-blur-md bg-opacity-90">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto">
              Our expertise spans across multiple domains to ensure seamless user experiences, 
              scalable applications, and innovative designs.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mt-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-600 hover:border-white"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide drop-shadow-md">
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
    </div>
  );
}

export default Expertises;

import { motion } from "framer-motion";
import Subheading from '../../../../Layout/Subheading';
import Heading from "../../../../Layout/Heading";
const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    description: "Telemedicine, fitness tracking, health monitoring",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Mobile shopping apps with fast checkout",
  },
  {
    icon: "🚖",
    title: "On-Demand Services",
    description: "Ride-hailing, food delivery, home services",
  },
  {
    icon: "🎮",
    title: "Entertainment & Gaming",
    description: "Video streaming, AR/VR gaming",
  },
  {
    icon: "📚",
    title: "Education & E-learning",
    description: "Interactive learning apps",
  },
  {
    icon: "💰",
    title: "FinTech & Banking",
    description: "Secure payment gateways, digital wallets, and banking apps",
  },
];

const IndustriesWeServe = () => {
  return (
    <motion.div
      className="w-full py-16 bg-white text-[#172554] px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}

      <Heading>
      <motion.h1
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Industries We Serve with React Native Apps
      </motion.h1>
      </Heading>

      {/* Industry Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white text-[#172554] border border-gray-200 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
              {/* Industry Icon */}
            
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-900 text-white mb-4 text-3xl">
                {industry.icon}
              </div>
               <Subheading>
              {/* Industry Title */}
              {industry.title} </Subheading>

              {/* Industry Description */}
              <p className="text-base text-center text-gray-700">
                {industry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustriesWeServe;

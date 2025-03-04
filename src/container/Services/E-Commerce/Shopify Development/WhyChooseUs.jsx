import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

// Import single image
import Image from "../../../../assets/Shopify_App_Development.jpg";

const WhyChooseUs = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-blue-900 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-0 pb-0 w-full mb-0">
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Choose DigiFlex?
      </motion.h1>

      {/* Features Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-6xl">
        
        {/* Left Side - Text */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {[ 
            { icon: <FaRocket size={30} className="text-blue-950" />, title: "Fast Development", description: "We ensure quick and efficient Shopify store development to get your business online faster." },
            { icon: <FaUsers size={30} className="text-blue-950" />, title: "Expert Team", description: "Our team of Shopify professionals provides top-tier solutions customized for your needs." },
            { icon: <FaCogs size={30} className="text-blue-950" />, title: "Custom Solutions", description: "We create unique, scalable Shopify solutions to match your business goals." },
            { icon: <FaShieldAlt size={30} className="text-blue-950" />, title: "Secure & Reliable", description: "We prioritize security to keep your Shopify store safe from threats." },
            { icon: <FaChartLine size={30} className="text-blue-950" />, title: "Growth-Oriented", description: "Our solutions are designed to help you scale and grow your business effortlessly." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg shadow-md w-full bg-blue-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
                <p className="text-md text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Larger Single Image with Professional Animation */}
        <motion.div 
          className="w-full max-w-lg h-96 flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={Image}
            alt="Shopify Development"
            className="w-full h-full object-contain rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

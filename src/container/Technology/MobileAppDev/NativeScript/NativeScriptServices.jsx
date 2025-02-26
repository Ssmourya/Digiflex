import { motion } from "framer-motion";
import { FaMobileAlt, FaSync, FaPaintBrush, FaServer, FaBug, FaTools, FaUsers, FaRocket, FaLock, FaChartLine, FaCogs, FaHeadset } from "react-icons/fa";
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const services = [
  { icon: <FaMobileAlt />, title: "Custom NativeScript App Development", description: "Tailored solutions for businesses" },
  { icon: <FaSync />, title: "Migration to NativeScript", description: "Convert existing apps to a native experience" },
  { icon: <FaPaintBrush />, title: "Native UI/UX Design", description: "Build pixel-perfect, high-performing interfaces" },
  { icon: <FaServer />, title: "API & Backend Integration", description: "Firebase, REST APIs, GraphQL, Node.js" },
  { icon: <FaBug />, title: "NativeScript App Testing & Debugging", description: "Performance optimization & security audits" },
  { icon: <FaTools />, title: "Post-Launch Maintenance & Support", description: "Continuous improvements & updates" },
];

const whyDigiflex = [
  { icon: <FaUsers />, title: "Expert NativeScript Developers", description: "Skilled in JavaScript, TypeScript, Angular, and Vue.js" },
  { icon: <FaRocket />, title: "Faster Time to Market", description: "Rapid development with a single codebase" },
  { icon: <FaLock />, title: "Enterprise-Grade Security", description: "End-to-end encryption, secure authentication" },
  { icon: <FaChartLine />, title: "High Performance & Scalability", description: "Optimized apps for global reach" },
  { icon: <FaCogs />, title: "Seamless Integration with Native APIs", description: "Camera, GPS, Bluetooth, and more" },
  { icon: <FaHeadset />, title: "24/7 Customer Support", description: "Dedicated support team for seamless assistance" },
];

export default function NativeScriptServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading >
            🛠 Our NativeScript App Development Services
          </Heading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
              </motion.div>
              <Subheading>{service.title}</Subheading>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading className="text-3xl font-bold text-[#172554] mt-16 mb-8 flex justify-center items-center gap-2">
            📌 Why Digiflex for NativeScript Development?
          </Heading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyDigiflex.map((reason, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <div className="text-4xl text-green-500 mb-4">{reason.icon}</div>
              </motion.div>
              <Subheading>{reason.title}</Subheading>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

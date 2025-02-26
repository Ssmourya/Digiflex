import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
const processSteps = [
  {
    id: 1,
    title: "Strategy & Planning",
    description: "Understanding client needs & business goals",
    logo: "📌",
  },
  {
    id: 2,
    title: "UI/UX Wireframing & Prototyping",
    description: "Designing smooth user experiences",
    logo: "🎨",
  },
  {
    id: 3,
    title: "App Development",
    description: "Using NativeScript for performance optimization",
    logo: "💻",
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description: "Ensuring bug-free, high-performance apps",
    logo: "✅",
  },
  {
    id: 5,
    title: "Deployment & Store Launch",
    description: "Publishing on App Store & Google Play",
    logo: "🚀",
  },
  {
    id: 6,
    title: "Post-Launch Maintenance",
    description: "Regular updates & feature enhancements",
    logo: "🔧",
  },
];

export default function NativeScriptProcess() {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        
       <Heading
          className="text-3xl text-[#172554] font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our NativeScript App Development Process
          </Heading>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() =>
                setSelectedStep(selectedStep === step.id ? null : step.id)
              }
            >
              <div
                className={`p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedStep === step.id ? "border-2 border-blue-500" : ""
                }`}
              >
                <div className="text-5xl mb-4">{step.logo}</div>
                <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {step.title}
                </h3>
                {selectedStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-700"
                  >
                    <p className="text-lg">{step.description}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

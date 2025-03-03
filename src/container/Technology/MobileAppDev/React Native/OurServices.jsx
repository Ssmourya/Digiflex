import { motion } from "framer-motion";
import Heading from "../../../../Layout/Heading";
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph'
const OurServices = () => {
  const services = [
    {
      text: "Custom React Native App Development – Scalable apps for startups & enterprises",
      icon: "🔹",
    },
    {
      text: "UI/UX Design & Prototyping – Stunning and intuitive user interfaces",
      icon: "🎨",
    },
    {
      text: "Migration to React Native – Convert existing native apps into React Native",
      icon: "🔄",
    },
    {
      text: "React Native App Testing & QA – Ensure high performance & bug-free experience",
      icon: "✅",
    },
    {
      text: "App Deployment & Maintenance – Smooth launch and ongoing updates",
      icon: "🚀",
    },
  ];

  return (
    <motion.div
      className="w-full min-h-screen bg-white text-[#172554] px-6 md:px-12 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <Heading
        className="text-5xl font-semibold text-[#172554] text-center mb-10 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our React Native Development Services
      </Heading>

      {/* Services List */}
      <motion.div
        className="flex flex-col space-y-6 w-full max-w-6xl]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center p-5 bg-white rounded-xl shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl mr-4">{service.icon}</span>
            <Subheading>{service.text}</Subheading>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurServices;

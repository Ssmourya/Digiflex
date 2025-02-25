
import React from "react";
import { motion } from "framer-motion";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const securityFeatures = [
  { title: "Biometric Authentication", icon: "👤" },
  { title: "Pin Code or Password Protection", icon: "🔢" },
  { title: "Encrypted Transaction", icon: "🔒" },
  { title: "Browser Detection Security", icon: "🌐" },
  { title: "Anti Phishing Protocols", icon: "⚠️" },
  { title: "Key Management Server", icon: "🔑" },
  { title: "Threat Protection", icon: "🛡️" },
  { title: "Database Encryption", icon: "🗄️" },
];

const SecurityFeatures = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto lg:w-[78vw] md:w-[80vw] px-4 sm:px-6">
        {/* Section Heading */}
        <Heading>
          <h1>
            Security Features Of Our Cryptocurrency Wallet Development
          </h1>
        </Heading>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-between p-6 border border-gray-300 rounded-xl shadow-md bg-white h-[320px] w-full max-w-[280px] sm:h-[350px] sm:max-w-[300px] md:h-auto md:max-w-none"
              whileHover={{ scale: 1.02, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Feature Icon */}
              <div className="text-5xl text-[#1E3A8A] mb-4">{feature.icon}</div>

              {/* Feature Title */}
              <h3 className="text-lg font-semibold text-[#1E3A8A] text-center mb-2">
                {feature.title}
              </h3>
              
              {/* Feature Description */}
              <p className="text-gray-600 text-sm text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default SecurityFeatures;

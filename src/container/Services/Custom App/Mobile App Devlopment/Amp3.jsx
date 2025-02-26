import React from "react";
import { motion } from "framer-motion";
import { Code, Download, HeadphonesIcon, Shield, Workflow } from "lucide-react";
import Subheading from "../../../../Layout/Subheading";
import Heading from "../../../../Layout/Heading";

const features = [
  {
    title: "Stable",
    description:
      "We build stable web applications that run consistently without any crashes and provide end-users with an error-free experience. We guarantee 99.99% uptime for all applications we deliver. This way, we help businesses improve engagement and drive constant sales flow.",
    icon: <Shield className="h-6 w-6 text-white" />,
  },
  {
    title: "Scalable",
    description:
      "Our web apps development services imply building scalable web apps to accommodate customer evolving needs and growing businesses. We follow the key principles of scalable web architecture design to make sure web apps will handle increased load up to 1,000,000 users.",
    icon: <Workflow className="h-6 w-6 text-white" />,
  },
  {
    title: "Fast",
    description:
      "53% of users will leave your website if it takes more than three seconds to load. So we apply mature technologies, such as Ruby on Rails or React, that have already proven their effectiveness. We have learned to make the most of them to guarantee the page loads in less than three seconds.",
    icon: <Download className="h-6 w-6 text-white" />,
  },
  {
    title: "Mobile-first",
    description:
      "We adopt the mobile-first approach to offer a growing number of mobile users a better experience. We optimize web solutions for any mobile device, be it a smartphone, iPad, or tablet.",
    icon: <HeadphonesIcon className="h-6 w-6 text-white" />,
  },
  {
    title: "Secure",
    description:
      "We apply the highest security standards to protect our web products from security risks outlined in OWASP Top 10 standard awareness document on the security of web apps. They are regularly updated to meet the latest security requirements.",
    icon: <Shield className="h-6 w-6 text-white" />,
  },
  {
    title: "Well-planned",
    description:
      "We carefully plan each stage of the software development process. Such thoughtfulness helps us deliver 95% of the projects on time and within budget and avoid many potential pitfalls.",
    icon: <Code className="h-6 w-6 text-white" />,
  },
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 text-center md:text-left transform transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center justify-center md:justify-start">
      <div className="bg-[#3730A3] rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-md">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-blue-600 ml-4">
        {feature.title}
      </h3>
    </div>
    <p className="text-gray-600 text-sm mt-4">
      {feature.description}
    </p>
  </motion.div>
);

export default function Amp() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
      <Heading>Our Key Features</Heading>
          
      
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

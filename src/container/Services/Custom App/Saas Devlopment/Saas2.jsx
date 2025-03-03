import React from "react";
import { motion } from "framer-motion";
import { Settings, Users, Box, HeartHandshake } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from '../../../../Layout/Paragraph'

const Saas2 = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />, 
      title: "Expertise in SaaS Architecture",
      description: "We excel in building solutions with both multi-tenant and single-tenant architectures, optimizing security, cost-efficiency, and scalability. Our expertise extends to vertical and horizontal SaaS models, allowing us to tailor your app to tackle industry-specific challenges. We also leverage serverless architecture to build highly scalable and cost-effective backend functionalities."
    },
    {
      icon: <Box className="w-8 h-8 text-blue-600" />, 
      title: "Customized Solutions",
      description: "We understand that every business is unique, so we take a tailored approach to SaaS development. Our team partners closely with clients to understand their specific requirements, challenges, and goals. This allows us to deliver customized solutions, be it for business management, marketing, or communication, that effectively address their needs and drive tangible results."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />, 
      title: "End-to-end Services",
      description: "From ideation and design to development, testing, and integration, we offer comprehensive end-to-end services to ensure a seamless and successful SaaS development journey. Our multidisciplinary team encompasses experts in UI/UX design, software engineering, quality assurance, and project management, enabling us to deliver high-quality solutions within the stipulated time frame."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-blue-600" />, 
      title: "Post-launch Support",
      description: "Our commitment to your success doesn't end with the launch of your SaaS solution. We offer comprehensive post-launch support services to ensure that your solution continues to perform optimally and evolve to meet changing business needs. Whether it's troubleshooting, performance optimization, or feature enhancements, we're here to support you every step of the way."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Heading>
          Why Choose LeewayHertz for Your Next SaaS Development Project?
        </Heading>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col p-6 bg-white shadow-lg rounded-lg"
            style={{ transitionDelay: `${index * 200}ms` }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 rounded-lg p-3">
                {feature.icon}
              </div>
            </div>
            <Subheading>
              {feature.title}
            </Subheading>
            <Paragraph>
              {feature.description}
            </Paragraph>
          </motion.div>
        ))}
      </div>

      {/* Extra Content for Larger Screens */}
      <div className="hidden lg:block mt-16 p-8 bg-white rounded-lg shadow-lg">
        <Heading >
          Additional Insights
        </Heading>
        <Paragraph>
          Our SaaS solutions empower businesses with seamless scalability, enhanced security, and optimized user experiences. Join our growing list of successful partners today!
        </Paragraph>
      </div>
    </div>
  );
};

export default Saas2;

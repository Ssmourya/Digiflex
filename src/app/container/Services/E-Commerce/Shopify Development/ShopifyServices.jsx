"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Store, Settings, Truck, CreditCard, Globe } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const services = [
  { icon: <Store size={40} />, title: "Custom Shopify Store", description: "Tailor-made Shopify stores with high performance and great UX." },
  { icon: <ShoppingCart size={40} />, title: "E-commerce Optimization", description: "Speed, SEO, and UX improvements for better conversions." },
  { icon: <Settings size={40} />, title: "App Integration", description: "Seamless integrations with payment, shipping, and CRM tools." },
  { icon: <Truck size={40} />, title: "Dropshipping Setup", description: "End-to-end dropshipping solutions for global businesses." },
  { icon: <CreditCard size={40} />, title: "Payment Gateway Setup", description: "Secure and efficient payment solutions for your store." },
  { icon: <Globe size={40} />, title: "Multilingual & Multi-Currency", description: "Expand your business globally with multilingual support." },
];

const ShopifyServices = () => {
  return (
    <WrapperContainer>
      <section className="py-0 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <Heading>Shopify Development Services</Heading>
          <Paragraph className="text-center">Enhance your Shopify store with our expert solutions.</Paragraph>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: "#4f46e5", // Indigo-600 
                boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.2)" 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-transparent hover:border-indigo-600 transition-all"
            >
              <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }} className="text-indigo-600">
                {service.icon}
              </motion.div>
              <Subheading>{service.title}</Subheading>
              <Paragraph>{service.description}</Paragraph>
            </motion.div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default ShopifyServices;

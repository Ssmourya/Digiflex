"use client";

import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import store_1 from '../../../../../../public/assets/shop_store_3.mp4';
import store_2 from '../../../../../../public/assets/shop_store_2.mp4';
import store_3 from '../../../../../../public/assets/shop_store_4.mp4';
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
import SectionContainer from '../../../../Layout/SectionContainer';

const projects = [
  {
    title: "Luxury Fashion Store",
    video: store_1,
    description: "A premium Shopify store with high-end design and seamless user experience.",
  },
  {
    title: "Tech Gadget Hub",
    video: store_2,
    description: "A modern Shopify store optimized for selling cutting-edge technology.",
  },
  {
    title: "Organic Beauty Shop",
    video: store_3,
    description: "A nature-inspired Shopify store designed for organic beauty products.",
  },
];

const FeaturedShopifyProjects = () => {
  return (
    <WrapperContainer>
      <section className="relative w-full flex flex-col items-center bg-white text-gray-900 px-0 py-0 pt-0 mt-0 mb-0">
        <div className="text-center relative z-10 mb-12">
          <Heading>Our Shopify Creations</Heading>
          <Paragraph className="text-gray-600 max-w-2xl mx-auto">
            Explore our stunning Shopify projects, crafted with excellence and innovation.
          </Paragraph>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <video
                src={project.video}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="p-5 text-center absolute bottom-0 left-0 right-0 bg-white transition-transform duration-500 transform translate-y-0 group-hover:translate-y-full">
                <Subheading>{project.title}</Subheading>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white text-center p-6">
                <Subheading className="text-white text-xl mb-3">{project.title}</Subheading>
                <Paragraph className="text-white text-base">{project.description}</Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default FeaturedShopifyProjects;
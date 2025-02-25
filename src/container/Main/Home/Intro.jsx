"use client";
import { motion } from "framer-motion";
import { FaCode, FaCogs, FaUsers, FaTrophy, FaBuilding, FaClock, FaArrowRight } from "react-icons/fa";
import CustomCursor from "./custom-cursor";
import WrapperContainer from "../../../Layout/WrapperContainer";

const Intro = () => {
  return (
    <>
    
      <CustomCursor />
      <section className="py-20 px-6 bg-black text-white overflow-hidden relative cursor-none">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-600 blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwaC02VjBoNnYzMHptMTIgMGgtNlYwaDZ2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              Next-Gen IT Solutions
            </div>
            <h2 className="text-5xl font-bold mb-2 leading-tight">
              Welcome to <span className="text-blue-600">Digiflex.ai</span>
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              We build innovative and scalable web applications that transform how businesses operate in the digital
              landscape.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition duration-300 flex items-center gap-2 group cursor-none">
                Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 border border-white/20 hover:border-blue-600 hover:bg-blue-600/10 rounded-md font-medium transition duration-300 cursor-none">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-blue-600 rounded-xl blur opacity-30"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-50 blur-lg"></div>
            <img
              src="https://i.pinimg.com/736x/41/fa/a3/41faa3508a7b1210a03d8b6265ed7848.jpg"
              alt="Team Working"
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover border border-blue-600/50"
            />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-600 rounded-xl z-[-1]"></div>
            <div className="absolute -left-8 -top-8 w-16 h-16 border-2 border-blue-600/40 rounded-xl z-[-1]"></div>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mt-32 max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="mt-3 text-gray-400 max-w-xl">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="px-4 py-2 text-sm font-medium border border-white/20 rounded hover:bg-blue-600/10 transition duration-300 cursor-none">
                View All Services
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:border-blue-600 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-50"></div>
                <FaCode size={28} className="relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Software</h3>
              <p className="text-gray-400 mb-6">
                We develop tailor-made software solutions designed specifically to address your unique business
                challenges.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium group-hover:translate-x-2 transition-transform cursor-none"
              >
                Learn more <FaArrowRight size={12} />
              </a>
            </motion.div>

            <motion.div
              className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:border-blue-600 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-50"></div>
                <FaCogs size={28} className="relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="text-gray-400 mb-6">
                Creating scalable and efficient solutions that grow with your business and adapt to changing needs.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium group-hover:translate-x-2 transition-transform cursor-none"
              >
                Learn more <FaArrowRight size={12} />
              </a>
            </motion.div>

            <motion.div
              className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:border-blue-600 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-50"></div>
                <FaUsers size={28} className="relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
              <p className="text-gray-400 mb-6">
                We prioritize understanding your business goals to deliver solutions that exceed expectations.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium group-hover:translate-x-2 transition-transform cursor-none"
              >
                Learn more <FaArrowRight size={12} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-32 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative"
          >
            <div className="w-64 h-64 absolute -left-12 -bottom-12 bg-blue-600/20 rounded-full blur-3xl z-[-1]"></div>
            <div className="absolute -inset-4 border border-blue-600/30 rounded-xl z-[-1]"></div>
            <img
              src="https://i.pinimg.com/736x/46/d9/80/46d9801bf884c626d13cb28133749b04.jpg"
              alt="Team Collaboration"
              className="rounded-xl shadow-2xl w-full border border-white/10"
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded border border-white/10">
              <span className="text-blue-400 font-medium">90% Client Retention Rate</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              Our Track Record
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
            <p className="text-gray-300 mb-8">
              Digiflex.ai has established a proven track record of excellence in delivering high-performance web
              solutions that empower businesses worldwide.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-blue-600/50 transition duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 border border-blue-600/30 rounded-lg shrink-0">
                  <FaTrophy className="text-blue-400" size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Products Ongoing</h4>
                  <p className="text-gray-400">
                    Successfully managing over <span className="text-blue-400 font-semibold">10+</span> active products
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-blue-600/50 transition duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 border border-blue-600/30 rounded-lg shrink-0">
                  <FaBuilding className="text-blue-400" size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Projects Completed</h4>
                  <p className="text-gray-400">
                    Delivered <span className="text-blue-400 font-semibold">60+</span> successful projects on time
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-blue-600/50 transition duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 border border-blue-600/30 rounded-lg shrink-0">
                  <FaClock className="text-blue-400" size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Years in Industry</h4>
                  <p className="text-gray-400">
                    Over <span className="text-blue-400 font-semibold">5+</span> years of industry expertise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 max-w-6xl mx-auto relative z-10">
          <div className="p-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-2xl">
            <div className="bg-black p-8 rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-white">
                    50<span className="text-blue-400">+</span>
                  </h3>
                  <div className="w-8 h-1 bg-blue-600 mx-auto my-3"></div>
                  <p className="text-gray-400">Talented Employees</p>
                </motion.div>

                <motion.div
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-white">
                    10<span className="text-blue-400">+</span>
                  </h3>
                  <div className="w-8 h-1 bg-blue-600 mx-auto my-3"></div>
                  <p className="text-gray-400">Years Experience</p>
                </motion.div>

                <motion.div
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-white">
                    99<span className="text-blue-400">%</span>
                  </h3>
                  <div className="w-8 h-1 bg-blue-600 mx-auto my-3"></div>
                  <p className="text-gray-400">Success Rate</p>
                </motion.div>

                <motion.div
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-white">
                    2<span className="text-blue-400">+</span>
                  </h3>
                  <div className="w-8 h-1 bg-blue-600 mx-auto my-3"></div>
                  <p className="text-gray-400">Global Offices</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-8 max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-full opacity-30 blur-2xl"></div>

            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto">
                Empowering Businesses with <span className="text-blue-400">Scalable Software</span>
              </h2>
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                At Digiflex.ai, we create innovative, scalable, and secure solutions designed to help your business
                thrive in the digital age.
              </p>
              <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-md font-medium text-white inline-flex items-center gap-2 group transition duration-300 cursor-none">
                Schedule a Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-400">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-400">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-400">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
     
    </>
  );
};

export default Intro;

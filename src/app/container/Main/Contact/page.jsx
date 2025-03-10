"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
// import image from "../../../../../public/assets/ContactUs.jpg";
import WrapperContainer from "../../../Layout/WrapperContainer";

const INQUIRY_TYPES = ["general", "support", "sales", "partnership"];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [validFields, setValidFields] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length >= 2;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "subject":
        return value.length >= 5;
      case "message":
        return value.length >= 10;
      default:
        return true;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const newValidFields = { ...validFields };

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      newValidFields.name = false;
    } else {
      newValidFields.name = true;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      newValidFields.email = false;
    } else {
      newValidFields.email = true;
    }

    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
      newValidFields.subject = false;
    } else {
      newValidFields.subject = true;
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      newValidFields.message = false;
    } else {
      newValidFields.message = true;
    }

    setErrors(newErrors);
    setValidFields(newValidFields);
    return Object.keys(newErrors).length === 0;
  };

  const getInputClassName = (fieldName) => {
    const baseClasses =
      "mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1";

    if (validFields[fieldName] === null) {
      return `${baseClasses} border-gray-300 focus:border-blue-500 focus:ring-blue-500`;
    } else if (validFields[fieldName]) {
      return `${baseClasses} border-green-500 focus:border-green-500 focus:ring-green-500`;
    } else {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-500`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name in validFields) {
      setValidFields((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  // Rest of the component remains the same until the form inputs
  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src='/assets/ContactUs.jpg'
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-black/20 z-10 animate-gradient-extreme mix-blend-overlay" />
        <motion.div
          className="relative flex h-full flex-col items-center justify-center text-center text-white"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
            variants={fadeIn}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl px-4 text-lg text-blue-50"
            variants={fadeIn}
          >
            Let's discuss how Digiflex.ai can transform your business with
            cutting-edge IT solutions and AI innovation.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div>
        <WrapperContainer>
          <div className="grid gap-8 lg:grid-cols-2 mb-10">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                <p className="mt-4 text-gray-600">
                  Have questions about our services? We're here to help and
                  would love to hear from you.
                </p>
              </motion.div>

              <motion.div className="space-y-6" variants={staggerChildren}>
                {[
                  {
                    Icon: MapPin,
                    title: "Office",
                    content:
                      "1206 , Skye Earth Corporate Park , Indore , Madhya Pradesh",
                  },
                  { Icon: Phone, title: "Phone", content: "+91 9111453332" },
                  { Icon: Mail, title: "Email", content: "info@digiflex.ai" },
                ].map(({ Icon, title, content }) => (
                  <motion.div
                    key={title}
                    className="flex items-start space-x-4"
                    variants={fadeIn}
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-gray-600">{content}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="h-[400px] w-full overflow-hidden rounded-lg"
                variants={fadeIn}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0285081438947!2d75.89621627519199!3d22.764323279355725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631db109e84267%3A0x8b6216486f6fb156!2sQuest%20Digiflex%20Pvt.%20LTD!5e0!3m2!1sen!2sin!4v1739793737864!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Locations"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="rounded-lg bg-gray-50 p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={getInputClassName("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={getInputClassName("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Inquiry Type
                  </label>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {INQUIRY_TYPES.map((type) => (
                      <motion.label
                        key={type}
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type}
                          checked={formData.inquiryType === type}
                          onChange={handleChange}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    className={getInputClassName("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={getInputClassName("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </WrapperContainer>
      </div>
    </div>
  );
}

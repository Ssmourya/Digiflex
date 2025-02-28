import React from 'react';
import { Lightbulb, MessageSquare, CheckCircle, Diamond } from 'lucide-react';
import { Code, Users, Layout, Smartphone, Video, Box } from 'lucide-react';
import productdesign32 from '../../../../assets/productdesign32.png';
import productdesign33 from '../../../../assets/productdesign33.png';
import productdesign34 from '../../../../assets/productdesign34.png';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import WrapperContainer from "../../../../Layout/WrapperContainer"
import SubHeading from "../../../../Layout/Subheading"

// section 1 
const services = [
    {
      title: 'Consumer & Enterprise Software',
      icon: <Code className="w-8 h-8 text-blue-500" />,
      description: 'End-to-end software solutions for businesses and consumers'
    },
    {
      title: 'User Research & Testing',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: 'Deep insights into user behavior and preferences'
    },
    {
      title: 'CX, UX & Interaction Design',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      description: 'Creating seamless and intuitive user experiences'
    },
    {
      title: 'UI Design',
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      description: 'Beautiful and functional interface designs'
    },
    {
      title: 'Motion Design',
      icon: <Video className="w-8 h-8 text-blue-500" />,
      description: 'Engaging animations and interactive elements'
    },
    {
      title: 'Design Systems',
      icon: <Box className="w-8 h-8 text-blue-500" />,
      description: 'Scalable and consistent design frameworks'
    }
  ];

//section 3
const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500 transform transition-transform duration-300 hover:scale-125 animate-pulse" />,
      title: "Innovation Partners",
      description: "We're collaborators in your success. We bring fresh perspectives, cutting-edge technology, and a commitment to pushing boundaries, transforming your vision into groundbreaking solutions"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-500 transform transition-transform duration-300 hover:scale-125 animate-bounce" />,
      title: "We're Humans",
      description: "Being a good listener makes it all easier. Our consulting team will hear your pain areas, aspirations, and needs. This helps craft solutions that resonate with your brand and goals."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-500 transform transition-transform duration-300 hover:rotate-180" />,
      title: "People's Choice",
      description: "Our clients choose us because we don't just deliver software—we deliver success, turning challenges into opportunities and visions into reality. We're trusted globally for excellence in innovation."
    },
    {
      icon: <Diamond className="w-8 h-8 text-purple-500 transform transition-transform duration-300 hover:scale-125 animate-spin" />,
      title: "Deliver Value for $",
      description: "Excellence doesn't have to come with a hefty price tag—just the right partner. With us, every dollar invested brings you closer to success, ensuring high-quality results without breaking the bank."
    }
];



const DigitalProducts = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="relative z-10 flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 ">
        <WrapperContainer>
          <div className="w-full max-w-7xl flex flex-col items-center space-y-8">
            <div className="w-full text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-950 leading-tight">
                Digital Products
              </h1>
            </div>

            <Paragraph className="text-base text-gray-700 max-w-3xl text-center">
              At Digiflex, we believe that every user deserves an intuitive and
              seamless experience, whether engaging with a product for work or
              leisure. We design impactful enterprise and consumer products
              while developing comprehensive design systems that ensure
              effortless scalability and innovation.
            </Paragraph>

            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 sm:p-8 rounded-lg bg-white shadow-md shadow-gray-400 
              transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg hover:shadow-blue-200 cursor-pointer"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg shrink-0">
                      {service.icon}
                    </div>
                    <div className="space-y-2 flex-1">
                      <SubHeading className="text-blue-950">
                        {service.title}
                      </SubHeading>
                      <Paragraph className="text-gray-600">
                        {service.description}
                      </Paragraph>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/*section 2*/}
      <WrapperContainer>
        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
          {/* Header Section */}
          <div className="mb-2 flex flex-col items-center justify-center ">
            <h1 className="text-5xl font-bold text-blue-950 mb-5">
              Our Web Design Services
            </h1>
            <Paragraph>
              At the heart of our web design services lies a blend of advanced
              tools and forward-thinking techniques that set us apart. Here's
              what you'll gain by choosing us:
            </Paragraph>
          </div>

          {/* Card Section */}
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-6 duration-300 hover:shadow-lg  hover:shadow-blue-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-blue-950">
                  Custom website design
                </h2>

                <Paragraph className="text-black leading-relaxed">
                  At Digiflex, we create bespoke web design solutions tailored
                  to your unique business needs. Our expert team ensures that
                  your website not only meets expectations but also drives
                  engagement and delivers a seamless user experience. No matter
                  the complexity, we’re here to help you achieve your goals.
                </Paragraph>

                <ul className="space-y-3">
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    Product websites
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    Service websites
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    Landing pages
                  </li>
                </ul>

                <button className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors group mt-4">
                  <span className="mr-2">GET IN TOUCH</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 w-full">
                <img
                  src={productdesign32}
                  alt="Website Design Preview"
                  className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" mt-10 bg-white rounded-3xl shadow-lg p-8 lg:p-6 duration-300 hover:shadow-lg  hover:shadow-blue-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-blue-950">
                  Custom SaaS Platform Design
                </h2>

                <Paragraph>
                  At Digiflex, we specialize in creating tailored SaaS design
                  solutions that align with your business objectives and enhance
                  user experiences. Our expert team ensures seamless
                  functionality, scalability, and intuitive interfaces to help
                  your product stand out in the competitive SaaS market.
                </Paragraph>

                <ul className="space-y-3">
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    SaaS Dashboards
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    Admin Panels
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    User Portals
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    Subscription & Billing Interfaces
                  </li>
                </ul>

                <button className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors group mt-4">
                  <span className="mr-2">GET IN TOUCH</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 w-full">
                <img
                  src={productdesign33}
                  alt="Website Design Preview"
                  className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" mt-10 bg-white rounded-3xl shadow-lg p-8 lg:p-6 duration-300 hover:shadow-lg  hover:shadow-blue-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-blue-950">
                  Custom Mobile App Design
                </h2>

                <Paragraph className="text-black leading-relaxed">
                  Digiflex crafts seamless and engaging mobile app designs that
                  elevate user interaction and ensure smooth functionality.
                  Whether for iOS, Android, or cross-platform solutions, our
                  team creates intuitive experiences tailored to your audience.
                </Paragraph>

                <ul className="space-y-3">
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    iOS & Android Apps
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    Mobile UI/UX Design
                  </li>
                  <li className="flex items-center text-black">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></span>
                    App Prototyping & Wireframing
                  </li>
                </ul>

                <button className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors group mt-4">
                  <span className="mr-2">GET IN TOUCH</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 w-full">
                <img
                  src={productdesign34}
                  alt="Website Design Preview"
                  className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>

      {/*section 3*/}
      <div className="felx-1 justify-center items-center pb-20">
        <WrapperContainer>
          {/* Heading */}
          <h1 className="text-5xl text-center pb-10 font-bold text-blue-950">
            Why Digiflex is the Right Partner .
          </h1>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white border border-gray-200 duration-300 shadow-lg hover:shadow-lg hover:scale-105 hover:shadow-blue-200 rounded-lg w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <div className="mb-6">{feature.icon}</div>

                <SubHeading className="text-xl font-semibold text-blue-950 mb-4">
                  {feature.title}
                </SubHeading>

                <Paragraph className="text-gray-600 leading-relaxed">
                  {feature.description}
                </Paragraph>
              </div>
            ))}
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default DigitalProducts;
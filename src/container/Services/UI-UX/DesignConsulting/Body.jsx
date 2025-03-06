import React from 'react';
import { RefreshCw, Search, Layout, Palette, Send } from "lucide-react";
import { RefreshCcw, Code, Users, Smartphone } from "lucide-react";
import { Brain, Building2, ShoppingCart, Heart } from 'lucide-react';
import WrapperContainer from "../../../../Layout/WrapperContainer"
import { DesignConsultingFAQData } from "../FAQData";
import Faq from "../../../../components/Faq";


// FeatureCard Component
const FeatureCard = ({ title, description, titleColor }) => {
  return (
    <div className="flex-1 p-8 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
      <h3 className={`text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300`}>{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{description}</p>
    </div>
  );
};

// TimelineItem Component
const TimelineItem = ({ icon: Icon, title, items }) => {
  return (
    <div className="flex-1 relative group">
      <div className="flex flex-col items-center transform transition-transform duration-500 hover:scale-105">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
          <Icon className="w-8 h-8 text-white animate-bounce-subtle" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ServiceCard Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-8 bg-white/90 backdrop-blur-lg rounded-lg group transform transition-all duration-500 hover:scale-105 hover:bg-white">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
    </div>
  );
};

// ProcessStep Component
const ProcessStep = ({ icon, step, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
      <div className="relative mb-4">
        <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
        <div className="relative z-10 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {icon}
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm animate-bounce-subtle">
          {step}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
    </div>
  );
};

// ArrowIcon Component
const ArrowIcon = () => {
  return (
    <div className="hidden md:block w-8">
      <svg className="w-8 h-8 text-blue-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  );
};

// Cards array
const Cards = [
  {
    title: "Business-Focused Creativity",
    description:
      "At Digiflex, we approach design with your audience in mind. Every asset we create is crafted to resonate with your target market, ensuring your ads and campaigns consistently deliver results.",
    titleColor: "text-gray-800",
  },
  {
    title: "From Small Details to Big Ideas",
    description:
      "Whether it's a single banner ad or a comprehensive campaign concept, Digiflex has the expertise to bring your vision to life. No project is too small or too ambitious for our team.",
    titleColor: "text-gray-800",
  },
  {
    title: "Fast, Flexible, and Reliable",
    description:
      "We understand the fast-paced demands of modern business. Tight deadlines? No problem. Our agile workflow ensures you get high-quality assets exactly when you need them – no compromises.",
    titleColor: "text-gray-800",
  }
];

// Timeline Items array
const timelineItems = [
  {
    icon: RefreshCw,
    title: "Understanding",
    items: ["Business objectives & challenges", "Technology & functionality", "Competitive analysis"],
  },
  {
    icon: Search,
    title: "Research",
    items: ["UX reviews", "Metrics & analytics", "User testing"],
  },
  {
    icon: Layout,
    title: "Wireframes",
    items: ["Rapid concept sketching", "Functionality exploration", "Prototypes"],
  },
  {
    icon: Palette,
    title: "Mockups",
    items: ["Brand identity integration", "High-fidelity mockups", "Prototypes"],
  },
  {
    icon: Send,
    title: "Delivery",
    items: ["Finalize UX deliverables", "Style guide & functional specs", "Suggestions/next steps"],
  }
];

// Services array
const servicescard2 = [
  {
    icon: Search,
    title: "UX/UI audit",
    description:
      "With a UI/UX check-up, we pinpoint areas where your platform can be smoother, faster, and more intuitive.",
  },
  {
    icon: RefreshCcw,
    title: "Product redesign",
    description:
      "We revamp your product to enhance its functionality and visual appeal, meeting the demands of the audience.",
  },
  {
    icon: Code,
    title: "MVP design",
    description:
      "We craft MVPs to test your idea and deliver core features with exceptional user experience from the outset.",
  },
  {
    icon: Palette,
    title: "Design system creation",
    description:
      "Our team will create a comprehensive set of design guidelines and components, all to make your brand consistent.",
  },
  {
    icon: Users,
    title: "User research and testing",
    description:
      "We provide comprehensive research and usability testing services to ensure your product meets user needs.",
  },
  {
    icon: Smartphone,
    title: "UI for web and mobile",
    description:
      "Our UI design solutions bring aesthetics and functionality, making your product shine on every screen.",
  }
];

// Industries array
const industries = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI & Machine Learning",
    description: "Maxiom provides UI/UX consulting for AI and machine learning platforms, designing interfaces that simplify complex data interactions."
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Finance",
    description: "Maxiom's consulting services for financial platforms ensure secure, user-friendly interfaces that provide real-time data visualization."
  },
  {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "E-commerce & Retail",
    description: "Our UI/UX consulting for e-commerce helps create engaging and intuitive shopping experiences."
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Healthcare",
    description: "Maxiom's UI/UX consulting services for healthcare focus on creating user-friendly interfaces that improve patient outcomes."
  }
];

// Steps array
const steps = [
  {
    icon: <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    title: "Discovery & analysis",
    description: "We begin by understanding your unique challenges and goals to tailor our solution to your specific needs."
  },
  {
    icon: <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>,
    title: "Strategic planning",
    description: "Our experts craft a detailed roadmap that aligns with your objectives and ensures successful implementation."
  },
  {
    icon: <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    title: "Design & development",
    description: "We design and develop a customized solution, leveraging cutting-edge technology and best practices."
  },
  {
    icon: <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>,
    title: "Implementation",
    description: "Our team seamlessly integrates the solution into your existing infrastructure, ensuring minimal disruption."
  },
  {
    icon: <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    title: "Optimization",
    description: "We continuously monitor and optimize the solution to enhance performance and deliver maximum ROI."
  },
  {
    icon: <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    title: "Ongoing support",
    description: "Maxiom provides ongoing support and maintenance to ensure long-term success and adaptability."
  }
];

const Body = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen pb-10">
      {/* section 1 */}
      <div className="relative w-full bg-white/80 backdrop-blur-lg    ">
        <WrapperContainer>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 animate-glow">
                Why Choose Digiflex for{" "}
                <span className="text-blue-800">UI/UX Design?</span>
              </h2>
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-6">
              <p className="text-xl md:text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Businesses we've partnered with have experienced greater
                alignment between user needs and business objectives, resulting
                in enhanced engagement and boosted conversions.
              </p>

              <div className="text-xl md:text-xl text-gray-600 leading-relaxed">
                At Digiflex, we specialize in crafting user-centric solutions
                tailored for:
                <ul className="list-disc pl-4 mt-4 space-y-2">
                  <li className="hover:text-blue-600 transition-colors duration-300">
                    SaaS Platforms
                  </li>
                  <li className="hover:text-blue-600 transition-colors duration-300">
                    E-commerce Experiences
                  </li>
                  <li className="hover:text-blue-600 transition-colors duration-300">
                    B2B and B2C Applications
                  </li>
                  <li className="hover:text-blue-600 transition-colors duration-300">
                    Mobile and Web Interfaces
                  </li>
                </ul>
              </div>

              <p className="text-xl md:text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Let us help you create intuitive designs that drive meaningful
                results for your business.
              </p>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* section 2 */}
      <div className="w-full bg-white/90 backdrop-blur-lg    ">
        <WrapperContainer>
          <div className="max-w-6xl mx-auto pb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 hover:text-blue-600 transition-colors duration-300 animate-glow">
              What Makes Digiflex Your Ideal{" "}
              <span className="text-blue-800">Graphic Design</span> Partner?
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-12 md:space-y-0">
              {Cards.map((card, index) => (
                <FeatureCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  titleColor={card.titleColor}
                />
              ))}
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* section 3 */}
      <div className="w-full bg-white/95 backdrop-blur-lg pb-10">
        <WrapperContainer>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 hover:text-blue-600 transition-colors duration-300 animate-glow">
              Our <span className="text-blue-800">Design</span> Process
            </h2>

            {/* Timeline */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  items={item.items}
                />
              ))}
            </div>
          </div>
        </WrapperContainer>
      </div>
      {/* section 3 part2 */}
      <div className="bg-blue-950">
        <WrapperContainer>
          {/* Testing Cycle */}
          <div className="py-10 max-w-md mx-auto justify-center text-center">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin-slow">
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              </div>
              <div className="absolute inset-4 bg-blue-950 backdrop-blur-lg rounded-full flex items-center justify-center">
                <p className="text-sm font-medium text-white max-w-[120px] leading-tight animate-glow">
                  User Testing & Observation Cycle
                </p>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* section 4 */}
      <div className="w-full bg-white/90 backdrop-blur-lg ">
        <WrapperContainer>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-blue-600 font-bold text-lg mb-4 animate-pulse">
                Let's transform your UI/UX
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight animate-glow">
                WHAT WE <span className="text-blue-800">CAN</span>
                <br />
                DO FOR <span className="text-blue-800">YOU?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicescard2.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* section 5 */}
      <div className="w-full bg-white/95 backdrop-blur-lg    ">
        <WrapperContainer>
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-16 max-w-2xl mx-auto text-center">
              <span className="inline-block   py-2 text-blue-700 font-bold text-sm rounded-md mb-8 animate-pulse">
                STRATEGIC UX CONSULTING
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Industry-Specific
                <div className="relative">
                  <span className="text-blue-800">UI/UX</span>
                  <span className="relative">Consulting</span>
                </div>
                Solutions
              </h2>

              <p className="text-lg text-gray-600">
                Digiflex.ai delivers tailored UI/UX consulting solutions across
                various industries, creating intuitive interfaces that enhance
                efficiency, security, and user engagement.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-8 bg-white/90 backdrop-blur-lg rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-white group"
                >
                  <div className="text-blue-500 transition-transform duration-300 group-hover:scale-110 animate-bounce-subtle">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* section 6 */}
      <div className="w-full bg-white/90 backdrop-blur-lg ">
        <WrapperContainer>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 animate-glow">
              DIGIFLEX.AI{" "}
              <span className="text-blue-600">UI/UX Consulting</span> Process
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center"
                >
                  <ProcessStep
                    icon={step.icon}
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                  />
                  {index < steps.length - 1 && index % 3 !== 2 && <ArrowIcon />}
                </div>
              ))}
            </div>
          </div>
          <Faq faqs={DesignConsultingFAQData} />
        </WrapperContainer>
      </div>
    </div>
  );
};

export default Body;

"use client";
import Image from "next/image";
import { React, useState } from "react";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import { DesignConsultingFAQData, UXResearchFAQData } from "../FAQData";
import Faq from "@/components/Faq";

// section 2
const services = [
  {
    number: "01",
    title: "Ad-hoc prototyping",
    description:
      "Do you have more ideas than the capacity of an internal design team or want an alternative product concept? Rapid product prototyping, visual concept design, plastic card branding and design are how we can help.",
  },
  {
    number: "02",
    title: "Product UX/UI design",
    description:
      "A complete cycle of product design, starting from UX benchmarking and customer research through prototyping, visual concept, UI elements development, mandatory Usability Testing, and development team support. Mobile applications, web platforms, payment kiosks.",
  },
  {
    number: "03",
    title: "Corporate & product websites",
    description:
      "World-class UX/UI design and development services for corporate and product websites that help you highlight the value of your brand and effectively convert visitors into customers.",
  },
  {
    number: "04",
    title: "Usability & Accessibility Audits",
    description:
      "Ensure your digital products meet usability best practices and are fully accessible to all users, including those with disabilities. Our in-depth audits identify friction points, improve navigation, and align with WCAG and industry standards.",
  },
  {
    number: "05",
    title: "User Testing & Behavioral Analysis",
    description:
      "Understand how users interact with your platform through real-time usability testing, heatmaps, and behavior tracking. Our research helps refine user flows, reduce friction, and create seamless, high-performing experiences.",
  },
  {
    number: "06",
    title: "Data-Driven UX Strategy",
    description:
      "Transform insights into action with data-backed UX strategies that drive engagement and retention. We analyze customer pain points, industry trends, and user behavior to craft solutions that increase conversion rates and customer satisfaction.",
  },
];

// section 4
const tools = [
  {
    id: 1,
    logo: "https://img.icons8.com/ios/150/google-cloud-platform.png",
    name: "Dovetail",
    description:
      "A powerful qualitative research platform that helps us analyze and synthesize user feedback, ensuring every insight is actionable.",
  },
  {
    id: 2,
    logo: "https://img.icons8.com/material-outlined/24/workshop.png",
    name: "Miro",
    description:
      "An interactive collaborative whiteboard that enables our team to map out user journeys, brainstorm ideas, and facilitate agile UX workshops.",
  },
  {
    id: 3,
    logo: "https://img.icons8.com/material-sharp/96/positive-dynamic.png",
    name: "Notion",
    description:
      "A productivity tool that helps us organize research findings, track usability insights, and streamline project collaboration for maximum efficiency.",
  },
];

const ServicesHero = () => {
  return (
    <>
      {/*Section 1 */}
      <div className="bg-white">
        <WrapperContainer>
          <h1 className="text-5xl text-center pb-5 font-bold text-blue-950 ">
            UX Research
          </h1>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Main Content */}

            <div className="w-full relative z-10">
              <div className="space-y-4">
                <Paragraph className="text-base  text-black">
                  At DigiFlex, we specialize in UX research and usability
                  testing to ensure financial products are intuitive,
                  accessible, and enjoyable to use. Through in-depth user
                  research, behavioral analysis, and iterative testing, we
                  uncover insights that drive better design decisions and
                  improve user engagement.
                </Paragraph>
                <Paragraph className="text-base  text-black">
                  Partner with DigiFlex to create research-driven financial
                  experiences that enhance usability and boost customer
                  satisfaction.
                </Paragraph>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full mt-1 lg:mt-0">
              <div className="relative w-full h-full flex justify-center lg:justify-center">
                <Image
                  src="/assets/uxreasearch43.jpg"
                  width={500}
                  height={300}
                  alt="UX Research Illustration"
                  className="w-full max-w-[500px] lg:max-w-none object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/*Section 2 */}
      <div className="flex">
        <WrapperContainer>
          <Heading className="  text-center   font-bold text-blue-950 ">
            DigiFlex UX Research Services
          </Heading>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col p-6 rounded-xl w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] 
                        transition-all duration-300 ease-in-out
                        hover:bg-white shadow-xl shadow-gray-200 hover:shadow-xl hover:-translate-y-2
                        border border-transparent hover:border-blue-400
                        cursor-pointer group"
              >
                {/* Number */}
                <span className="text-3xl font-medium text-blue-500 group-hover:text-blue-500 transition-colors duration-300">
                  {service.number}
                </span>

                {/* Title */}
                <h2
                  className="text-2xl font-bold text-blue-950 mt-4 mb-3
                           group-hover:text-blue-600 transition-colors duration-300"
                >
                  {service.title}
                </h2>

                {/* Description */}
                <Paragraph
                  className="text-base text-gray-200 leading-relaxed
                          group-hover:text-black transition-colors duration-300"
                >
                  {service.description}
                </Paragraph>

                {/* Hover indicator */}
                <div className="h-1 w-0 bg-blue-500 mt-6 transition-all duration-300 group-hover:w-full rounded-full" />
              </div>
            ))}
          </div>
        </WrapperContainer>
      </div>

      {/*Section 3 */}
      <div className="flex">
        <WrapperContainer>
          <Heading className="   font-bold text-blue-950  ">
            DigiFlex UX Research Process
          </Heading>

          <p className="text-black mb-6 text-lg">
            At DigiFlex, we believe UX research should be adaptable,
            data-driven, and aligned with business goals. We dive deep into user
            behaviors, pain points, and needs to create meaningful,
            research-backed design decisions.
          </p>

          <div className="flex flex-col my-15 md:flex-col gap-6">
            {/* Discovery & Understanding */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl shadow-gray-200  hover:shadow-blue-200 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-950  mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <h2 className="text-2xl text-blue-950  font-bold">
                  Discovery & Understanding
                </h2>
              </div>
              <p className="text-gray-600 hover:text-black">
                Our UX research begins with a broad exploration of the business,
                users, and industry context. We conduct stakeholder interviews,
                competitive analysis, and user research to uncover insights that
                shape the foundation of our strategy. Every detail matters—one
                key finding can redefine the entire approach.
              </p>
            </div>

            {/* Insight & Analysis */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:shadow-xl ">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-950  mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M12 22.08V12" />
                </svg>
                <h2 className="text-2xl text-blue-950  font-bold">
                  Insight & Analysis
                </h2>
              </div>
              <p className="text-gray-600 hover:text-black">
                We systematically analyze qualitative and quantitative data,
                organizing insights into actionable themes. Through usability
                testing, surveys, and behavioral mapping, we identify patterns
                that reveal opportunities for improved user experiences.
              </p>
            </div>

            {/* Synthesis & Roadmaps */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl shadow-gray-200  hover:shadow-blue-200 hover:shadow-xl ">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-950 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <h2 className="text-2xl text-blue-950  font-bold">
                  Synthesis & Roadmaps
                </h2>
              </div>
              <p className="text-gray-600 hover:text-black">
                We synthesize research findings to define clear UX roadmaps. By
                pinpointing user pain points, needs, and behaviors, we develop
                strategic recommendations for seamless, high-performing digital
                experiences. Our data-driven approach ensures that every design
                and product decision is rooted in real user insights, not
                assumptions.
              </p>
            </div>

            {/* User Testing & Validation */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:shadow-xl ">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-950 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <h2 className="text-2xl text-blue-950  font-bold">
                  User Testing & Validation
                </h2>
              </div>
              <p className="text-gray-600 hover:text-black">
                Before finalizing any UX solution, we conduct iterative user
                testing and prototype validation to ensure that designs resonate
                with real users. Our testing includes A/B testing, heatmaps,
                eye-tracking studies, and usability sessions to refine
                interactions and optimize engagement.
              </p>
            </div>

            {/* Accessibility & Compliance Review */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl shadow-gray-200  hover:shadow-blue-200 hover:shadow-xl ">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-950 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <h2 className="text-2xl text-blue-950  font-bold">
                  Accessibility & Compliance Review
                </h2>
              </div>
              <p className="text-gray-600 hover:text-black">
                We ensure that digital experiences are inclusive and accessible
                for all users, following WCAG standards and industry-specific
                compliance guidelines. Our research highlights accessibility
                gaps and provides recommendations to enhance usability for
                diverse audiences.
              </p>
            </div>

            {/* Behavioral & Emotional Analysis */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-xl shadow-gray-200  hover:shadow-blue-200 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-950 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <h2 className="text-2xl text-blue-950  font-bold">
                  Behavioral & Emotional Analysis
                </h2>
              </div>
              <p className="text-gray-600 hover:text-black">
                At DigiFlex, UX research isn't just about collecting data—it's
                about transforming insights into action, helping businesses
                create products that truly connect with their users.
              </p>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* Section 4 */}
      <div className="flex">
        <WrapperContainer>
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <Heading className=" font-bold text-blue-950 ">
              DigiFlex UX Research Tools
            </Heading>
            <Paragraph className="text-sm sm:text-base text-black">
              At DigiFlex, we leverage industry-leading UX research tools to
              uncover meaningful, data-driven insights that represent the voice
              of the user while aligning with business objectives.
            </Paragraph>
          </div>

          {/* Tools Cards Section */}
          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col p-10 rounded-xl w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] 
                        transition-all duration-300 ease-in-out
                        hover:bg-white shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:shadow-lg hover:-translate-y-2
                        border border-transparent hover:border-blue-400
                        cursor-pointer group my-6"
              >
                <div className="flex flex-col h-full">
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={`${tool.name} Logo`}
                    width={32}
                    height={32}
                    className="h-8 w-auto mb-6 object-contain"
                    priority={false}
                  />
                  <p className="text-[#1a1a1a] leading-relaxed flex-grow">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Faq faqs={UXResearchFAQData} />
        </WrapperContainer>
      </div>
    </>
  );
};

export default ServicesHero;

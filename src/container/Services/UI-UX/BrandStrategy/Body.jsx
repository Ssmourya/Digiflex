import React from 'react';
import brandwhy from '../../../../assets/brandwhy.jpg';
import brandstrategy from '../../../../assets/brandstrategy.jpg';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import WrapperContainer from "../../../../Layout/WrapperContainer"
import SubHeading from '../../../../Layout/Subheading';



const Body = () => {
  return (
    <div className=" bg-gray-50">
      {/* Why Us Section */}
      <WrapperContainer>
        <h1 className="font-bold text-black text-5xl text-center mb-6">
          Why <span className="text-blue-700">Us?</span>
        </h1>
        {/* Description */}
        <Paragraph>
          Digiflex is a UX design agency with over a decade of experience in
          user-centered design, usability, and information architecture. We
          create seamless, engaging experiences that delight customers and drive
          major client successes like acquisitions and record-breaking funding
          rounds.
        </Paragraph>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8 text-center">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {[
                {
                  number: "1",
                  text: "We integrate smooth animations, transitions, and micro-interactions that enhance usability and create fluid, engaging experiences for web and mobile applications.",
                },
                {
                  number: "2",
                  text: "Every animation and UI element is rooted in behavioral research and user testing, ensuring that our designs are not only visually stunning but also intuitive and effective.",
                },
                {
                  number: "3",
                  text: "Our lightweight animations and optimized UI components ensure that digital experiences remain fast, smooth, and responsive without compromising on aesthetics or functionality.",
                },
                {
                  number: "4",
                  text: "From interactive web platforms to immersive mobile experiences, our designs are built to scale, adapting to future trends in motion design and UI innovation.",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h2 className="text-2xl font-bold mb-2 text-[#1A2E6F]">
                    {stat.number}
                  </h2>
                  <Paragraph>{stat.text}</Paragraph>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={brandwhy}
              alt="Brand Why"
              className="max-w-full h-auto "
            />
          </div>
        </div>
      </WrapperContainer>

      {/* Brand Strategy Section */}
      <div className="bg-white">
        <WrapperContainer>
          <h1 className="text-4xl md:text-5xl text-center font-bold mb-6 text-black">
            Brand <span className="text-blue-700">Strategy</span>
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="w-[500px]  flex justify-center">
              <img
                src={brandstrategy}
                alt="Brand Strategy"
                className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-left">
              <SubHeading>Building Connections That Last</SubHeading>
              <Paragraph>
                At Digiflex, we believe brands find their place in customers'
                hearts and minds through meaningful relevance and crystal-clear
                communication.
              </Paragraph>

              {/* Expertise List */}
              <div className="mt-6">
                <SubHeading className="font-bold">
                  Our Expertise Includes:
                </SubHeading>
                <ul className="mt-4 space-y-3">
                  {[
                    "Brand Identity, Positioning & Purpose: Defining who you are and why you matter.",
                    "Communication & Touchpoint Strategy: Ensuring consistent, engaging interactions across every channel.",
                    "Brand Insights, Segmentation & Personas: Understanding your audience to drive impactful decisions.",
                    "Employer Branding & Brand-Driven Culture: Empowering your team to embody and champion your brand.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="pl-4 border-l-2 border-[#1A2E6F] hover:border-[#2d4899] transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* Workflow Section */}
      <WrapperContainer>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className=" font-bold  mb-8 text-black text-5xl">
            We adapt to your <span className="text-blue-700">workflow</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Team Extension",
                color: "bg-purple-600",
                description:
                  "Fill in any expertise and technology gaps in your team with our range of professionals.",
              },
              {
                title: "Dedicated Team",
                color: "bg-yellow-500",
                description:
                  "Get a complete team with all the roles and skills you need while having full control.",
              },
              {
                title: "Integrated Team",
                color: "bg-green-500",
                description:
                  "Entrust your software development to our team and refocus on achieving business goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg shadow-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6"
              >
                <div
                  className={`${item.color} w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <SubHeading>{item.title}</SubHeading>
                <Paragraph>{item.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>

      {/* Principles Section */}
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className=" font-bold text-black text-5xl md:text-left">
              STAND-OUT <span className="text-blue-700">BRANDS</span> ARE BUILT
              ON 3 PRINCIPLES
            </h1>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            {["INSIGHT", "INTELLIGENCE", "DESIGN"].map((item, index) => (
              <div
                key={index}
                className="bg-blue-950 hover:bg-[#2563eb] transition-colors p-6 rounded-lg cursor-pointer transform hover:-translate-x-2 duration-300"
              >
                <h3 className="text-2xl font-medium text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>

      {/* Brand Purpose Section */}
      <div className="bg-white">
      <WrapperContainer>
          <h1 className=" font-bold text-5xl text-black  text-center">
            <span className="text-blue-700">Brand</span> Purpose
          </h1>
          <div className=" my-6 text-gray-600">
              <Paragraph>
                At Digiflex, we believe that flourishing businesses are built on a
                strong foundation of brand architecture, identity, and meaningful
                associations. Our brand strategy services act as the guiding light
                behind every decision, ensuring your brand resonates with purpose
                and clarity.
              </Paragraph>
            </div>
      </WrapperContainer>
      <WrapperContainer>
            <div className="bg-white rounded-lg shadow-sm pb-20 ">
              <h1 className=" font-bold text-5xl mb-6 text-black  text-center">
                <span className="text-blue-700">Our</span> approach
              </h1>
                <Paragraph>
                  We examine the DNA of your brand – the why you exist, speaking
                  with founders, leaders, team members, and customers to gain a
                  complete understanding.
                </Paragraph>
                <Paragraph>
                  We examine every touchpoint your brand has with customers –
                  from pre-purchase interactions to purchase experiences and
                  post-purchase engagement.
                </Paragraph>
              </div>
      </WrapperContainer>
        </div>
    </div>
  );
};

export default Body;
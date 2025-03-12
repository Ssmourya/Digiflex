import Image from "next/image";
import * as React from "react";
import {
  FaRocket,
  FaPencilAlt,
  FaCode,
  FaMobile,
  FaVial,
  FaFlag,
} from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

export const OurJourney = () => {
  const timelineData = [
    {
      id: 1,
      title: "Digiflex Founding (2015)",
      description:
        "The inception of Digiflex with the goal to provide innovative tech solutions for businesses.",
      icon: <FaRocket className="text-primary text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
    },
    {
      id: 2,
      title: "Brand Development (2016)",
      description:
        "Digiflex focuses on building its brand presence and expanding its client base through targeted marketing.",
      icon: <FaPencilAlt className="text-chart-1 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800",
    },
    {
      id: 3,
      title: "Product Launch (2017)",
      description:
        "Official launch of Digiflex's flagship product, attracting interest from several prominent clients.",
      icon: <FaCode className="text-chart-2 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
    },
    {
      id: 4,
      title: "Mobile Platform Expansion (2018)",
      description:
        "Expanding Digiflex's services to mobile platforms, making it more accessible to users on the go.",
      icon: <FaMobile className="text-chart-3 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800",
    },
    {
      id: 5,
      title: "Global Reach & Partnerships (2019)",
      description:
        "Digiflex partners with global companies to expand its reach and enter new markets across the world.",
      icon: <FaVial className="text-chart-4 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?auto=format&fit=crop&w=800",
    },
    {
      id: 6,
      title: "Major Update & Innovation (2020)",
      description:
        "A major platform update introduces cutting-edge features that revolutionize the way businesses use technology.",
      icon: <FaFlag className="text-chart-5 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800",
    },
    {
      id: 7,
      title: "AI Integration (2021)",
      description:
        "Introducing AI-driven features to optimize client solutions, improving automation and data analysis.",
      icon: <FaRocket className="text-primary text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QUklMjBJbnRlZ3JhdGlvbiUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 8,
      title: "Expanded Product Suite (2022)",
      description:
        "Launch of additional products designed to help businesses in new verticals like healthcare and finance.",
      icon: <FaPencilAlt className="text-chart-1 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=800",
    },
    {
      id: 9,
      title: "Enhanced User Experience (2023)",
      description:
        "A redesign of the platform with a more intuitive user interface and better customer support features.",
      icon: <FaCode className="text-chart-2 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",
    },
    {
      id: 10,
      title: "Cloud Expansion (2024)",
      description:
        "Shifting more services to the cloud, ensuring scalability, security, and efficiency for all users.",
      icon: <FaMobile className="text-chart-3 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    },
    {
      id: 11,
      title: "Sustainability Commitment (2025)",
      description:
        "Digiflex integrates sustainability into its operations with eco-friendly solutions and green technology initiatives.",
      icon: <FaVial className="text-chart-4 text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800",
    },
  ];

  // Rest of the component remains the same
  return (
    <div className="bg-gradient-to-tr from-blue-50 via-white to-blue-50">
      <WrapperContainer>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Digiflex's <span className="text-blue-700">Journey</span>
          </h1>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  }`}
                >
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-black/40 shadow-sm hover:shadow-lg hover:scale-105 hover:shadow-blue-200 transition-transform duration-300">
                    <div
                      className={`flex items-center justify-center mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <div className="ml-4 md:ml-0 md:mx-4">{item.icon}</div>
                    </div>
                    <p className="text-gray-600 mb-2 text-sm">{item.date}</p>
                    <p className="text-gray-700 text-justify text-sm sm:text-base">
                      {item.description}
                    </p>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 sm:h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105 mt-4"
                      priority={false}
                    />
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white mt-8 md:mt-0"></div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default OurJourney;

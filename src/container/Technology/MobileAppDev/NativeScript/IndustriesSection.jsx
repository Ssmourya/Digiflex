"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaHospital,
  FaShoppingCart,
  FaTaxi,
  FaBook,
  FaUniversity,
  FaPlane,
  FaBuilding,
  FaIndustry,
  FaFilm,
  FaDumbbell,
} from "react-icons/fa";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const industries = [
  {
    id: 1,
    name: "Healthcare & Telemedicine",
    description:
      "Patient portals, appointment booking apps, teleconsultation, medical record management, and remote patient monitoring to improve healthcare accessibility and efficiency.",
    icon: <FaHospital />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Healthcare.jpg",
  },
  {
    id: 2,
    name: "E-commerce & Retail",
    description:
      "Mobile shopping experiences with real-time inventory tracking, secure payment gateways, personalized recommendations, and seamless order fulfillment.",
    icon: <FaShoppingCart />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Ecomerce.jpg",
  },
  {
    id: 3,
    name: "On-Demand Services",
    description:
      "Ride-hailing, home services, logistics, and instant service booking platforms providing convenience and efficiency to users.",
    icon: <FaTaxi />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Automation.jpeg",
  },
  {
    id: 4,
    name: "Education & E-learning",
    description:
      "Interactive learning platforms, educational games, virtual classrooms, and knowledge assessment tools for students of all ages.",
    icon: <FaBook />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Education.jpg",
  },
  {
    id: 5,
    name: "Finance & Banking",
    description:
      "Mobile banking, payment solutions, investment platforms, and financial management tools with robust security features.",
    icon: <FaUniversity />,
    image:
      "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/fintech-investment-financial-internet-technology-concept.jpg",
  },
  {
    id: 6,
    name: "Travel & Hospitality",
    description:
      "Travel booking, itinerary management, contactless check-ins, and personalized travel recommendations for enhanced customer experiences.",
    icon: <FaPlane />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Travel.jpg",
  },
  {
    id: 7,
    name: "Real Estate & Property",
    description:
      "Property listing, virtual tours, mortgage calculators, and property management solutions for buyers, sellers, and agents.",
    icon: <FaBuilding />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Reacl-estate.jpg",
  },
  {
    id: 8,
    name: "Manufacturing & Logistics",
    description:
      "Supply chain management, inventory tracking, production monitoring, and quality control applications for industrial operations.",
    icon: <FaIndustry />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Manufacturing.jpg",
  },
  {
    id: 9,
    name: "Entertainment & Media",
    description:
      "Content streaming, social media, gaming, and interactive entertainment applications with engaging user experiences.",
    icon: <FaFilm />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Entertainment.jpg",
  },
  {
    id: 10,
    name: "Fitness & Wellness",
    description:
      "Workout tracking, nutrition planning, meditation guides, and health monitoring applications for holistic wellness.",
    icon: <FaDumbbell />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Fitness.jpg",
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-white shadow-lg p-6 rounded-lg border border-gray-300">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-[#172554] text-white shadow-md p-4 rounded-lg mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4">
            Industries We Serve at Digiflex.ai
          </h2>
          <ul>
            {industries.map((industry) => (
              <li
                key={industry.id}
                onClick={() => setSelectedIndustry(industry)}
                className={`flex items-center gap-2 p-2 cursor-pointer rounded-lg ${
                  selectedIndustry.id === industry.id
                    ? "bg-white text-[#172554]"
                    : "hover:bg-gray-200"
                }`}
              >
                {industry.icon}
                <span className="text-sm md:text-base">{industry.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-3/4 flex flex-col items-center justify-center p-6">
          <Image
            src={selectedIndustry.image}
            alt={selectedIndustry.name}
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 object-cover"
            width={500}
            height={300}

            priority={false}
          />
          <div className="flex flex-col items-center">
            <Heading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-semibold flex items-center gap-2 text-[#172554]"
            >
              {selectedIndustry.icon}
              <span>{selectedIndustry.name}</span>
            </Heading>
            <Paragraph
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-700 mt-2 text-center max-w-2xl"
            >
              {selectedIndustry.description}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

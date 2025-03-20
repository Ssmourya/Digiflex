import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import {
  FaShoppingCart,
  FaHospital,
  FaUniversity,
  FaBuilding,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";
const industries = [
  {
    icon: <FaShoppingCart className="text-blue-500 text-4xl" />,
    title: "E-commerce & Retail",
    description: "AI-powered shopping assistants & customer service chatbots.",
  },
  {
    icon: <FaHospital className="text-red-500 text-4xl" />,
    title: "Healthcare",
    description:
      "Appointment scheduling, patient support, and health chatbots.",
  },
  {
    icon: <FaMoneyBillWave className="text-green-500 text-4xl" />,
    title: "Finance & Banking",
    description: "Virtual banking assistants and fraud detection chatbots.",
  },
  {
    icon: <FaBuilding className="text-yellow-500 text-4xl" />,
    title: "Real Estate",
    description:
      "Chatbots for property listings, inquiries, and virtual tours.",
  },
  {
    icon: <FaUniversity className="text-purple-500 text-4xl" />,
    title: "Education",
    description: "AI tutors, student assistance, and LMS-integrated chatbots.",
  },
  {
    icon: <FaHeadset className="text-indigo-500 text-4xl" />,
    title: "Customer Support",
    description: "Automated FAQ handling and support ticket management.",
  },
];

function Chatbot_Industries() {
  return (
    <>
      <WrapperContainer>
        <Heading>Industries We Serve</Heading>
        <section>
          <div className="container text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105"
                >
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-gray-700 mt-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </WrapperContainer>
    </>
  );
}

export default Chatbot_Industries;

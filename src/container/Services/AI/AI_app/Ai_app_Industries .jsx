import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
import Fontheading from "../../../../Layout/Fontheading";


const IndustriesData = [
  {
    title: "E-Commerce & Retail",
    description:
      "At Digiflex.ai, we enhance E-Commerce & Retail with AI-driven chatbots, recommendation engines, and customer analytics. Our chatbots provide real-time assistance, while recommendation systems personalize shopping experiences, boosting sales and engagement.",
    logo: "xyz",
  },
  {
    title: "Healthcare & MedTech",
    description:
      "Digiflex.ai revolutionizes healthcare with AI-powered diagnostics, medical image analysis, and predictive analytics. Our AI-driven tools assist doctors in faster, more accurate disease detection, improving patient care.",
    logo: "xyz",
  },
  {
    title: "Finance & FinTech",
    description:
      "We secure the Finance & FinTech industry with AI-driven fraud detection, risk assessment, and automated financial advisory. Our AI systems detect suspicious transactions in real-time, preventing fraud and ensuring compliance.",
    logo: "xyz",
  },
  {
    title: "Education & E-Learning",
    description:
      "Digiflex.ai enhances education with AI-driven personalized learning and smart tutoring systems. Our AI adapts to student needs, providing customized learning experiences and real-time feedback.",
    logo: "xyz",
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "We optimize Manufacturing & Logistics with AI-based automation, predictive maintenance, and supply chain optimization. AI helps detect equipment failures before they happen, reducing downtime and maintenance costs.",
    logo: "xyz",
  },
];

function Ai_app_Industries() {
  const [select, setSelect] = useState(IndustriesData[0]);

  return (
    <WrapperContainer>
      <Heading>Industries We Serve</Heading>
      <div className="flex flex-col md:flex-row border-2 border-[#C0DCFE] rounded-3xl w-full h-auto">
        {/* Left Section (Industry List) */}
        <div className="md:w-1/2 w-full bg-[#C0DCFE] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
          <ol className="p-4 md:p-6 space-y-2 md:space-y-4">
            {IndustriesData.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelect(item)}
                className={`text-lg md:text-2xl font-medium p-3 md:p-4 cursor-pointer rounded-md transition-all duration-300 ${
                  select.title === item.title ? "text-[#203d8c] bg-white shadow-md" : "hover:bg-white/70"
                }`}
              >
              <Fontheading>
              {item.title}
              </Fontheading>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Section (Industry Details) */}
        <div className="md:w-1/2 w-full p-6 md:p-10 bg-white rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
          <Subheading>
            <span className="text-xl md:text-3xl font-semibold">{select.title}</span>
          </Subheading>
          <Paragraph className="pt-3 md:pt-5 text-sm md:text-lg text-justify">
            {select.description}
          </Paragraph>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Ai_app_Industries;

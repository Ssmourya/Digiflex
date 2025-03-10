import React from "react";
import AI_First from "../../../../../../public/assets/AI_First.webp";
import AI_Expert from "../../../../../../public/assets/AI_Expert.jpg";
import AI_Cutting_Edge from "../../../../../../public/assets/AI_Cutting-Edge.jpeg";
import AI_Scable from "../../../../../../public/assets/AI_Scable.jpg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";


const data = [
  {
    title: "AI-First Approach",
    number: "01",
    description:
      "We specialize in AI-driven solutions that redefine business processes.",
    image: AI_First,
  },
  {
    title: "Expert Team",
    number: "02",
    description:
      "Our AI engineers, developers, and data scientists bring years of expertise in building AI-powered applications.",
    image: AI_Expert,
  },
  {
    title: "Cutting-Edge Technologies",
    number: "03",
    description:
      "We leverage TensorFlow, PyTorch, OpenAI, GPT models, and advanced AI frameworks.",
    image: AI_Cutting_Edge,
  },
  {
    title: "Scalable & Secure Solutions",
    number: "04",
    description:
      "We build apps that are robust, secure, and designed for future scalability. ",
    image: AI_Scable,
  },
];

const Card = ({ title, number, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 h-auto border mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        <span className="text-gray-300 text-5xl md:text-6xl font-bold">
          {number}
        </span>
      </div>
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="mt-5 w-full h-52 rounded-lg object-cover"
        />
      </div>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

const Ai_digiflex_development = () => {
  return (
    <WrapperContainer>
      <Heading>Why Choose Digiflex.ai for AI App Development?</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Ai_digiflex_development;

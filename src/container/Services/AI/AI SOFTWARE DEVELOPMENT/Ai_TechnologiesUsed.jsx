import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';
import Heading from '../../../../Layout/Heading';

const technologies = [
    {
      category: "Programming Languages & AI Frameworks",
      icon: "",
      items: ["Python", "JavaScript", "Node.js", "TensorFlow", "PyTorch", "OpenAI GPT"],
    },
    {
      category: "Cloud AI Services",
      icon: "",
      items: ["AWS AI", "Azure AI", "Google AI"],
    },
    {
      category: "AI Libraries & Tools",
      icon: "",
      items: ["Hugging Face", "LangChain", "OpenCV", "Scikit-Learn", "Keras"],
    },
  ];

function Ai_TechnologiesUsed() {
    return (
        <WrapperContainer>
        <div >
        <Heading>
        <span>
          <h2>
            Technologies Used at Digiflex.ai
          </h2>
          </span>
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
              <Subheading>
              <span>
                <h3 className='w-full h-14'>
                 {tech.category}
                </h3>
                </span>
                </Subheading>
                <ul className="mt-4 space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-500 text-xl">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </WrapperContainer>
      );
}

export default Ai_TechnologiesUsed
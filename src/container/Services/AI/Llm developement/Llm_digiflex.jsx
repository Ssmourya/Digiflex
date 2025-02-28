import React from 'react';
import { BrainCircuit, Settings, ShieldCheck, RefreshCw, Layers } from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const data = [
  {
    icon: <BrainCircuit size={48} className='bg-blue-600 text-white p-3 rounded-full' />,
    title: "AI Expertise",
    description: "Our team of AI professionals has deep expertise in machine learning, NLP, and LLM development."
  },
  {
    icon: <Settings size={48} className='bg-blue-600 text-white p-3 rounded-full' />,
    title: "Tailored Solutions",
    description: "We develop AI models customized to your business needs."
  },
  {
    icon: <ShieldCheck size={48} className='bg-blue-600 text-white p-3 rounded-full' />,
    title: "Scalability & Security",
    description: "High-performance models with a focus on data security and compliance."
  },
  {
    icon: <RefreshCw size={48} className='bg-blue-600 text-white p-3 rounded-full' />,
    title: "Continuous Support & Upgrades",
    description: "Ongoing maintenance and optimization for AI solutions."
  },
  {
    icon: <Layers size={48} className='bg-blue-600 text-white p-3 rounded-full' />,
    title: "Industry-Specific AI Models",
    description: "We cater to finance, healthcare, retail, legal, and more."
  },
];

function Llm_digiflex() {
  return (
    <WrapperContainer>
      <Heading>
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800">Why Choose Quest Digiflex?</h1>
      </Heading>
      
      {/* Horizontal Scroll Container */}
      <div className="flex mt-10 scrollbar-hide">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center min-w-[250px] ">
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <Paragraph>
              <p className="text-gray-600">{item.description}</p>
            </Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default Llm_digiflex;

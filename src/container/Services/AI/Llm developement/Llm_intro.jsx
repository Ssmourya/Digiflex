import React from 'react';
import { MessageSquare, Bot, Code, Smile, Globe, FileText } from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import photo from '../../../../assets/LLM_intro.jpg';

const data = [
  {
    title: "Text Generation",
    about: "AI generates high-quality content for blogs, marketing, and creative writing, ensuring consistency and efficiency. It helps businesses create engaging articles, product descriptions, and social media posts effortlessly.",
    logo: <MessageSquare size={48} className='bg-[#1D4ED8]  p-3 rounded-full' />
  },
  {
    title: "Chatbots & Virtual Assistants",
    about: "AI-driven bots handle customer support, answer queries, and provide 24/7 assistance. They improve response time, enhance user engagement, and automate routine interactions, making customer service more efficient.",
    logo: <Bot size={48} className='bg-[#1D4ED8]  p-3 rounded-full' />
  },
  {
    title: "Code Generation & Automation",
    about: "AI assists developers by writing, reviewing, and debugging code. It automates repetitive tasks, optimizes performance, and enhances software development, reducing manual effort and increasing productivity.",
    logo: <Code size={48} className='bg-[#1D4ED8]  p-3 rounded-full' />
  },
  {
    title: "Sentiment Analysis & Insights",
    about: "AI analyzes customer feedback, social media, and reviews to detect emotions and trends. Businesses use it to understand user sentiments, improve services, and make data-driven decisions.",
    logo: <Smile size={48} className='bg-[#1D4ED8]  p-3 rounded-full' />
  },
  {
    title: "Translation & Multilingual Support",
    about: "AI enables real-time language translation for global communication. It ensures accuracy and context awareness, making it easier for businesses to connect with international audiences.",
    logo: <Globe size={48} className='bg-[#1D4ED8]  p-3 rounded-full' />
  },
  {
    title: "Document Summarization & Processing",
    about: "AI extracts key information from lengthy documents, reports, and articles. It helps users quickly understand essential points, saving time and improving information accessibility.",
    logo: <FileText size={48} className='bg-[#1D4ED8] p-3 rounded-full' />
  }
];

function Llm_intro() {
  return (
    <WrapperContainer>
      <Heading>
        <div>
          <h1>What is LLM Development?</h1>
        </div>
      </Heading>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <div className='w-full md:w-1/2 mt-10 md:mt-20 px-4'>
          <Paragraph>
            LLM (Large Language Model) Development involves building, fine-tuning, and deploying AI-powered language models that can understand, generate, and process human language. These models are trained on vast amounts of data and can be used for tasks such as chatbots, content generation, code completion, data analysis, and more.
          </Paragraph>
        </div>
        <div className='w-full md:w-1/2 flex justify-center mt-6 md:mt-0 px-4'>
          <img src={photo} alt='LLM' className='max-w-full h-auto'/>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 text-left'>
        {data.map((item, index) => (
          <div key={index} className='flex flex-col items-start space-y-4 duration-500 hover:scale-105 '>
            <div>{item.logo}</div>
            <h3 className='text-xl font-semibold '>{item.title}</h3>
            <Paragraph>
            <p className='text-left'>{item.about}</p>
            </Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default Llm_intro;
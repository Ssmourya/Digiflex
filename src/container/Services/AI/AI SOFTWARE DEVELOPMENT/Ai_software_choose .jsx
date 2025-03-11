import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const data = [
    {
        title: "AI Expertise",
        num: "01",
        description: "Our skilled team specializes in AI, ML, NLP, and automation, delivering advanced solutions for smarter decision-making.",
    },
    {
        title: "Tailored Solutions",
        num: "02",
        description: "We design AI software customized to your business needs, enhancing efficiency and innovation.",
    },
    {
        title: "Scalable & Secure",
        num: "03",
        description: "Our AI platforms are built for growth, ensuring top-tier security and seamless scalability.",
    },
];

function Ai_software_choose() {
    return (
        <WrapperContainer>
            <Heading>
                <span>
                    <h1>Why Choose Digiflex.ai?</h1>
                </span>
            </Heading>
            <div className='flex flex-wrap md:flex-nowrap gap-6 md:gap-8 h-auto justify-center'>
                {data.map((value, index) => (
                    <div key={index} className='border-2 rounded-lg w-full md:w-1/3'>
                        <div className='flex items-center justify-between'>
                            <Subheading>
                                <div className='pl-2 text-lg md:text-xl font-semibold'>
                                    {value.title}
                                </div>
                            </Subheading>
                            <div className="text-gray-300 text-5xl md:text-6xl font-bold">
                                {value.num}
                            </div>
                        </div>

                        <Paragraph>
                            <div className='p-2 text-sm md:text-base'>
                                {value.description}
                            </div>
                        </Paragraph>
                    </div>
                ))}
            </div>
        </WrapperContainer>
    );
}

export default Ai_software_choose;

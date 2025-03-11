"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WrapperContainer from '@/Layout/WrapperContainer';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const ContentBlock = ({ title, description, image, hyperlink }) => {
    
    const truncateDescription = (desc) => {
        const words = desc.split(' ');
        if (words.length > 20) {
            return words.slice(0, 20).join(' ') + '...';
        }
        return desc;
    };

    return (
        <div className="lg:h-[400px] flex flex-col md:flex-row items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-11/12 mx-auto my-2 sm:my-4 md:my-6 lg:my-12 p-2 sm:p-3 md:p-4 lg:p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-2 sm:mb-3 md:mb-0">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
            />
        </div>
    
        <div className="w-full md:w-1/2 space-y-1 sm:space-y-2 py-1 sm:py-2 md:py-3">
            <div className="inline-block">
                <Subheading className="text-base sm:text-lg md:text-xl lg:text-2xl">{title}</Subheading>
            </div>
    
            <Paragraph className="text-xs sm:text-sm md:text-base">
                {
                    truncateDescription(description)
                }
            </Paragraph>
    
            <div className="pt-1 sm:pt-2">
                <a 
                    href={hyperlink} 
                    className="text-blue-500 hover:text-blue-700 font-semibold text-xs sm:text-sm md:text-base inline-flex items-center"
                >
                    Know More 
                    <span className="ml-1">→</span>
                </a>
            </div>
        </div>
    </div>
    );
};

const ContentSlider = () => {
    const sliderRef = useRef(null);
    const contentData = [
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'Digiflex Streamlined Supply Chain for E-Commerce Giant',
            description: 'By integrating automation into the supply chain, Digiflex helped an e-commerce leader to reduce operational costs, improve delivery times, and increase overall efficiency in their processes.',
            hyperlink: 'https://www.digiflex.ai/know-more1'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'AI Automation Boosts Financial Services Efficiency',
            description: 'Digiflex partnered with a financial services provider to automate manual processes, resulting in a 50% reduction in errors and faster data processing, helping the company scale more efficiently.',
            hyperlink: 'https://www.digiflex.ai/know-more2'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'Retail Inventory Management Enhanced with AI',
            description: 'Leveraging advanced AI models, Digiflex optimized inventory management for a retail client, reducing stockouts by 30% and preventing overstocking, increasing profitability and customer satisfaction.',
            hyperlink: 'https://www.digiflex.ai/know-more3'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'AI Improves Customer Retention for Telecom Provider',
            description: 'Through AI-driven solutions, Digiflex helped a telecom provider enhance personalized customer experiences, resulting in improved customer retention and reduced churn by 25%.',
            hyperlink: 'https://www.digiflex.ai/know-more4'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'AI-Driven Marketing Boosts Engagement by 25%',
            description: 'Digiflex empowered a leading global brand to optimize their marketing campaigns with AI, increasing customer engagement by 25% and driving a notable uplift in revenue.',
            hyperlink: 'https://www.digiflex.ai/know-more5'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'AI Fraud Detection Reduces Incidents by 40%',
            description: 'With AI-driven fraud detection, Digiflex helped a banking client lower fraud-related incidents by 40%, protecting assets and improving security measures for customers.',
            hyperlink: 'https://www.digiflex.ai/know-more6'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'AI Cuts Hiring Time by 50% in HR Processes',
            description: 'By implementing AI-powered recruitment tools, Digiflex helped a client cut their hiring time by half and significantly improved the quality of new hires.',
            hyperlink: 'https://www.digiflex.ai/know-more7'
        },
        {
            img: "/assets/Software _Testing.jpeg",
            title: 'Healthcare Data Processing Automated by 80%',
            description: 'Digiflex helped a healthcare provider automate 80% of their data processing workflows, improving operational efficiency and reducing human error in critical healthcare data management.',
            hyperlink: 'https://www.digiflex.ai/know-more8'
        }
    ];
    
    const sliderSettings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '5%',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '15%',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            }
        ]
    };

    return (
        <WrapperContainer className="relative w-full overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                <Slider {...sliderSettings} ref={sliderRef}>
                    {contentData.map((item, index) => (
                        <ContentBlock
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.img}
                            hyperlink={item.hyperlink}
                        />
                    ))}
                </Slider>
            </div>
        </WrapperContainer>
    );
};

export default ContentSlider;
import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import software from "../../../../assets/Software _Testing.jpeg"; // Image import (make sure the path is correct)

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

// ContentBlock component to display each content
const ContentBlock = ({ title, description, image, hyperlink }) => {
    // Function to truncate the description if it exceeds 20 words
    const truncateDescription = (desc) => {
        const words = desc.split(' ');
        if (words.length > 20) {
            return words.slice(0, 20).join(' ') + '...'; // Truncate and add "..."
        }
        return desc;
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-8 w-11/12 max-h-[42vh] mx-auto my-12 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out">

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={image} alt={title} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Left Content Section */}
            <div className="w-full md:w-1/2 space-y-6 py-3">
                {/* Title Section */}
                <div className="space-y-2">
                    <div className="inline-block">
                        <Subheading>{title}</Subheading>
                    </div>
                </div>

                {/* Description Section */}
                <Paragraph>
                    {truncateDescription(description)}
                </Paragraph>

                {/* Hyperlink Section */}
                <div>
                    <a href={hyperlink} className="text-blue-500 hover:text-blue-700 font-semibold">Know More {"->"}</a>
                </div>
            </div>
        </div>
    );
};



// Main ContentSlider component
const ContentSlider = () => {
    
    const sliderRef = useRef(null); // Ref to access slider instance
    const contentData = [
        {
            img: software,
            title: 'Digiflex Streamlined Supply Chain for E-Commerce Giant',
            description: 'By integrating automation into the supply chain, Digiflex helped an e-commerce leader to reduce operational costs, improve delivery times, and increase overall efficiency in their processes.',
            hyperlink: 'https://www.digiflex.ai/know-more1'
        },
        {
            img: software,
            title: 'AI Automation Boosts Financial Services Efficiency',
            description: 'Digiflex partnered with a financial services provider to automate manual processes, resulting in a 50% reduction in errors and faster data processing, helping the company scale more efficiently.',
            hyperlink: 'https://www.digiflex.ai/know-more2'
        },
        {
            img: software,
            title: 'Retail Inventory Management Enhanced with AI',
            description: 'Leveraging advanced AI models, Digiflex optimized inventory management for a retail client, reducing stockouts by 30% and preventing overstocking, increasing profitability and customer satisfaction.',
            hyperlink: 'https://www.digiflex.ai/know-more3'
        },
        {
            img: software,
            title: 'AI Improves Customer Retention for Telecom Provider',
            description: 'Through AI-driven solutions, Digiflex helped a telecom provider enhance personalized customer experiences, resulting in improved customer retention and reduced churn by 25%.',
            hyperlink: 'https://www.digiflex.ai/know-more4'
        },
        {
            img: software,
            title: 'AI-Driven Marketing Boosts Engagement by 25%',
            description: 'Digiflex empowered a leading global brand to optimize their marketing campaigns with AI, increasing customer engagement by 25% and driving a notable uplift in revenue.',
            hyperlink: 'https://www.digiflex.ai/know-more5'
        },
        {
            img: software,
            title: 'AI Fraud Detection Reduces Incidents by 40%',
            description: 'With AI-driven fraud detection, Digiflex helped a banking client lower fraud-related incidents by 40%, protecting assets and improving security measures for customers.',
            hyperlink: 'https://www.digiflex.ai/know-more6'
        },
        {
            img: software,
            title: 'AI Cuts Hiring Time by 50% in HR Processes',
            description: 'By implementing AI-powered recruitment tools, Digiflex helped a client cut their hiring time by half and significantly improved the quality of new hires.',
            hyperlink: 'https://www.digiflex.ai/know-more7'
        },
        {
            img: software,
            title: 'Healthcare Data Processing Automated by 80%',
            description: 'Digiflex helped a healthcare provider automate 80% of their data processing workflows, improving operational efficiency and reducing human error in critical healthcare data management.',
            hyperlink: 'https://www.digiflex.ai/know-more8'
        }
    ];
    
    
  // Slider settings
    const sliderSettings = {
        // dots: true, // Show navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 1.7, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Enable auto play
        autoplaySpeed: 3000, // Auto play speed
        arrows: false, // Hide arrows 
        pauseOnHover: true, // Pause autoplay on hover
    };

    return (
        <WrapperContainer className="relative w-full bg-white">
            {/* Slider component */}
            <Slider {...sliderSettings} ref={sliderRef}>
                {
                    contentData.map((item, index) => (
                        <ContentBlock
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.img}
                            hyperlink={item.hyperlink}
                        />
                    ))
                }
            </Slider>
        </WrapperContainer>
    );
};

export default ContentSlider;

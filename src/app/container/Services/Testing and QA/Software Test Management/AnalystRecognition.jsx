"use client";

import React, { useState } from 'react';
import Automation from "../../../../../../public/assets/Automation.jpeg";
import Automation2 from "../../../../../../public/assets/Automation-2.jpeg";
import Cybersecurity from "../../../../../../public/assets/Cybersecurity.jpeg";
import Shield from "../../../../../../public/assets/Shield.jpeg";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

// Reusable Card Component
const Card = ({ index, hoveredIndex, onHover, onLeave, image, title }) => {
    return (
        <div
            className={`flex flex-col items-center space-y-4 bg-black transform transition-transform duration-300 border rounded-lg
            ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeave}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-[300px] rounded-lg shadow-lg object-cover"
            />
            <p className="font-medium text-lg text-white">{title}</p>
        </div>
    );
};

const AnalystRecognition = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    const cards = [
        { image: Automation, title: "NelsonHall" },
        { image: Cybersecurity, title: "Gartner" },
        { image: Shield, title: "ISG" },
        { image: Automation2, title: "MPQ" },
    ];

    return (
        <WrapperContainer>
            <div className="bg-white">
                {/* Heading Section */}
                <div className="flex flex-col items-center justify-center">
                    {/* <div className="flex flex-row items-center justify-start space-x-4">
                        <span className="w-2 h-2 rounded-full bg-[#E42525]"></span>
                        <p className="text-[#E42525] font-bold text-2xl">Our Value</p>
                    </div> */}
                    <Heading>Analyst Recognition</Heading>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            onHover={handleMouseEnter}
                            onLeave={handleMouseLeave}
                            image={card.image}
                            title={card.title}
                        />
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default AnalystRecognition;

import React, { useState } from 'react';
import Automation from "../../../../assets/Automation.jpeg";
import Automation2 from "../../../../assets/Automation-2.jpeg";
import Cybersecurity from "../../../../assets/Cybersecurity.jpeg";
import Shield from "../../../../assets/Shield.jpeg";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

// Reusable Card Component
const Card = ({ index, hoveredIndex, onHover, onLeave, image, title }) => {
    return (
        <div
            className={`flex flex-col items-center space-y-4 bg-black transform transition-transform duration-300 border border-green-500 rounded-lg 
            ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeave}
        >
            <img
                src={image}
                alt={title}
                className="w-[200px] h-[300px] rounded-lg shadow-lg object-cover"
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
        { image: Automation2, title: "MPQ" }, // Duplicate to match your example
    ];

    return (

        <WrapperContainer>

            <div className="flex flex-row items-center justify-between bg-white">

                <div className="flex items-center justify-center">

                    <div className="flex flex-col items-center justify-center space-y-6 w-3/4">

                        <div className="flex flex-row items-center justify-start space-x-4 -ml-10">
                            <span className="w-2 h-2 rounded-full bg-[#E42525]"></span>
                            <p className="text-[#E42525] font-bold text-2xl">Our Value</p>
                        </div>

                        <Heading>Analyst Recognition</Heading>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="flex flex-row justify-center items-center space-x-6 w-10/12">
                    {
                        cards.map((card, index) => (
                            <Card
                                key={index}
                                index={index}
                                hoveredIndex={hoveredIndex}
                                onHover={handleMouseEnter}
                                onLeave={handleMouseLeave}
                                image={card.image}
                                title={card.title}
                            />
                        ))
                    }
                </div>
            </div>

        </WrapperContainer>
    );
};

export default AnalystRecognition;


// import React, { useState } from 'react';
// import Automation from "../../../../assets/Automation.jpeg";
// import Cybersecurity from "../../../../assets/Cybersecurity.jpeg";
// import Shield from "../../../../assets/Shield.jpeg";

// // Reusable Card Component
// const Card = ({ index, hoveredIndex, onHover, onLeave, image, title }) => {
//     return (
//         <div
//             className={`flex flex-col items-center space-y-4 border border-green-500 rounded-lg transition-all duration-500 ${
//                 hoveredIndex === index ? "w-[300px] mx-6" : "w-[150px] mx-3"
//             }`}
//             style={{
//                 transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
//             }}
//             onMouseEnter={() => onHover(index)}
//             onMouseLeave={onLeave}
//         >
//             <img
//                 src={image}
//                 alt={title}
//                 className="h-[300px] rounded-lg shadow-lg transition-all duration-500 "
//             />
//             <p className="font-medium text-gray-600">{title}</p>
//         </div>
//     );
// };

// const AnalystRecognition = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const handleMouseEnter = (index) => {
//         setHoveredIndex(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredIndex(null);
//     };

//     const cards = [
//         { image: Automation, title: "NelsonHall" },
//         { image: Cybersecurity, title: "Gartner" },
//         { image: Shield, title: "ISG" },
//         { image: Shield, title: "ISG" }, // Duplicate to match your example
//     ];

//     return (
//         <div className="flex items-center py-12 space-y-8 w-11/12 mx-auto bg-black">
//             {/* Header */}
//             <div className="flex items-center justify-center">
//                 <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
//                     <div className="flex flex-row items-center justify-start space-x-4 -ml-20">
//                         <span className="w-2 h-2 rounded-full bg-[#E42525]"></span>
//                         <p className="text-[#E42525] font-bold text-lg">Our Value</p>
//                     </div>
//                     <p className="text-3xl font-semibold text-white">Analyst Recognition</p>
//                 </div>
//             </div>

//             {/* Cards Section */}
//             <div className="flex flex-row justify-center items-center w-10/12 object-cover">
//                 {cards.map((card, index) => (
//                     <Card
//                         key={index}
//                         index={index}
//                         hoveredIndex={hoveredIndex}
//                         onHover={handleMouseEnter}
//                         onLeave={handleMouseLeave}
//                         image={card.image}
//                         title={card.title}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AnalystRecognition;

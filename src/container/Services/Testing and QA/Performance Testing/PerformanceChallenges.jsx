// import React from 'react';
// import { Plus, Minus } from 'lucide-react';
// import perfo_test_and_sol from "../../../../assets/perfo_test_and_sol.jpeg";
// import Heading from '../../../../Layout/Heading';

// const PerformanceChallenges = () => {
//     return (
//         <div className="w-11/12 mx-auto min-h-screen bg-white px-4 py-12">
//             {/* Heading and Image Row */}
//             <div className="flex flex-wrap space-x-24 items-center w-full mb-16">
                
//                 {/* Heading */}
//                 <Heading>
//                     Performance Testing Challenges <br/>
//                     and Solutions
//                 </Heading>
//                 {/* Image */}
//                 <div className="w-[50%] md:w-[40%] lg:w-[35%] overflow-hidden">
//                     <img
//                         src={perfo_test_and_sol}
//                         alt="Performance Testing Challenges and Solutions"
//                         className="object-cover rounded-xl shadow-md"
//                     />
//                 </div>
//             </div>

//             {/* Challenges and Solutions Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Challenges Card */}
//                 <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
//                     <div className="flex justify-between items-center mb-5">
//                         <span className="text-red-500 font-medium text-xl">Challenges</span>
//                         <button className="text-red-500">
//                             <Minus className="w-5 h-5" />
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                         <div className="text-gray-900 text-lg">Identifying performance bottlenecks</div>
//                         <div className="text-gray-900 text-lg">Validating system reliability</div>
//                         <div className="text-gray-900 text-lg">Optimizing resource usage</div>
//                         <div className="text-gray-900 text-lg">Selecting the right performance testing tools</div>
//                         <div className="text-gray-900 text-lg">Lack of proper test strategy & test coverage</div>
//                         <div className="text-gray-900 text-lg">Improper analysis of performance test outcomes</div>
//                     </div>
//                 </div>

//                 {/* Solutions Card */}
//                 <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
//                     <div className="flex justify-between items-center mb-5">
//                         <span className="text-green-500 font-medium text-xl">Solutions</span>
//                         <button className="text-green-500">
//                             <Plus className="w-5 h-5" />
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                         <div className="text-gray-900 text-lg">Use profiling tools and monitoring software to identify bottlenecks</div>
//                         <div className="text-gray-900 text-lg">Implement stress testing and load testing to validate system reliability</div>
//                         <div className="text-gray-900 text-lg">Regularly monitor and fine-tune resource allocation</div>
//                         <div className="text-gray-900 text-lg">Research and select tools based on project requirements, scalability, and integration capabilities</div>
//                         <div className="text-gray-900 text-lg">Develop a robust test strategy and ensure adequate test coverage</div>
//                         <div className="text-gray-900 text-lg">Analyze test results comprehensively using data visualization and analytics tools</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PerformanceChallenges;
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import perfo_test_and_sol from "../../../../assets/perfo_test_and_sol.jpeg";
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const challenges = [
    "Identifying performance bottlenecks",
    "Validating system reliability",
    "Optimizing resource usage",
    "Selecting the right performance testing tools",
    "Lack of proper test strategy & test coverage",
    "Improper analysis of performance test outcomes"
];

const solutions = [
    "Use profiling tools and monitoring software to identify bottlenecks",
    "Implement stress testing and load testing to validate system reliability",
    "Regularly monitor and fine-tune resource allocation",
    "Research and select tools based on project requirements, scalability, and integration capabilities",
    "Develop a robust test strategy and ensure adequate test coverage",
    "Analyze test results comprehensively using data visualization and analytics tools"
];

const Card = ({ title, items, color, Icon }) => (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-5">
            <Subheading className={`text-${color}-500`}>{title}</Subheading>
            <button className={`text-${color}-500`}>
                <Icon className="w-5 h-5" />
            </button>
        </div>
        <div className="space-y-4">
            {
                items.map((item, index) => (
                    <Paragraph key={index} className="text-start">{item}</Paragraph>
                ))
            }
        </div>
    </div>
);

const PerformanceChallenges = () => {
    return (
        <WrapperContainer>
            {/* Heading and Image Row */}
            <div className="flex flex-wrap space-x-24 items-center w-full mb-16">
                <Heading>
                    Performance Testing Challenges <br/>
                    and Solutions
                </Heading>
                <div className="w-[50%] md:w-[40%] lg:w-[35%] overflow-hidden">
                    <img
                        src={perfo_test_and_sol}
                        alt="Performance Testing Challenges and Solutions"
                        className="object-cover rounded-xl shadow-md"
                    />
                </div>
            </div>
            
            {/* Challenges and Solutions Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Challenges" items={challenges} color="red" Icon={Minus} />
                <Card title="Solutions" items={solutions} color="green" Icon={Plus} />
            </div>
        </WrapperContainer>
    );
};

export default PerformanceChallenges;
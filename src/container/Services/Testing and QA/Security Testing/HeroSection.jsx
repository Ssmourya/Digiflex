import Image from "next/image";
import React from "react";
import HeroPageForAll from "@/components/HeroPageForAll";

const HeroSection = () => {
  const data = {
    image: "/assets/perfo_test_and_sol.jpeg",
    title: "AI-Driven Software Quality - Precision and Excellence",
    description:
      "We help you revolutionize your quality journey with AI-powered assurance and engineering—quick releases, minimized errors, and elevated user experiences.",
  };

  return (
    <HeroPageForAll
      title={data.title}
      image={data.image}
      description={data.description}
    />
  );
};

export default HeroSection;

// import React from "react";
// import perfo_test_and_sol from "@/assets/perfo_test_and_sol.jpeg";

// const HeroSection = () => {
//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white overflow-hidden px-4 py-12">
//             {/* Main content container with grid */}
//             <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                     {/* Left content */}
//                     <div className="max-w-2xl">
//                         <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                             Redefining Software Quality using AI — <br /> Engineering Excellence, <br /> Assuring Accuracy
//                         </h1>

//                         <p className="text-lg md:text-xl text-gray-300 mb-8">
//                             We help you revolutionize your quality journey with AI-powered assurance and engineering—quick releases, minimized errors, and elevated user experiences.
//                         </p>

//                         <button className="mt-6 px-6 w-[30%] py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
//                             Know more
//                         </button>
//                     </div>

//                     {/* Right image */}
//                     <div className="relative h-full w-full hidden lg:block">
//                         <Image
//                             src={perfo_test_and_sol}
//                             alt="Performance Testing"
//                             className="object-cover w-full rounded-md"
//                         priority={false} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

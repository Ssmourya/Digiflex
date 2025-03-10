"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroPageForAll from '../../../../components/HeroPageForAll';
import company_logo_2 from "../../../../../../public/assets/company_logo_2.jpg"

const Hero = () => {
    
    const data = {
        image: company_logo_2,
        title: "Creative and Minimal IT Agency",
        description: "Digiflex AI excels in turning your concept into realities with its comprehensive application and web development services, which let you easily incorporate special characteristics and technology that complement your business strategy.",
    };

    return (
        <HeroPageForAll title={data.title} image={data.image} description={data.description}/>
    );
};

export default Hero;



// import React from 'react';
// import { motion } from 'framer-motion';import company_logo_2 from "../../../../assets/company_logo_2.jpg"

// const Hero = () => {
//     return (
//         <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 w-full text-white min-h-screen px-4 py-12 mx-auto">

//             <div className="w-11/12 mx-auto flex flex-col space-y-36 px-4 py-12">

//                 {/* Hero Content */}

//                 <motion.div className='flex justify-center items-center'>

//                     <motion.div className='flex flex-col md:flex-row justify-between items-center'>

//                         <motion.div
//                             initial={{ opacity: 0, y: -50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 1 }}
//                             className="px-8 w-[65%]"
//                         >
//                             <motion.h1
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 1.2 }}
//                                 className="text-4xl md:text-7xl font-bold leading-tight mb-8"
//                             >
//                                 Creative and Minimal IT Agency
//                             </motion.h1>

//                             <motion.p
//                                 initial={{ opacity: 0, x: -50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 1.5 }}
//                                 className="text-xl text-white mb-6 mx-auto"
//                             >
//                                 Digiflex AI excels in turning your concept into realities with its comprehensive
//                                 application and web development services, which let you easily incorporate special
//                                 characteristics and technology that complement your business strategy.
//                             </motion.p>
                            
//                         </motion.div>


//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ duration: 1.2, ease: "easeOut" }}
//                             className="overflow-hidden"
//                         >
//                             <img src={company_logo_2} width={"550px"} alt="Company Logo" loading="lazy" className="rounded-md shadow-lg" />
//                         </motion.div>

//                     </motion.div>
                    
//                 </motion.div>
                
//                 {/* Stats */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 2 }}
//                     className="flex justify-between items-center"
//                 >
//                     <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//                         <p className="text-2xl font-bold">15x</p>
//                         <p className="text-white">AVG ROI</p>
//                     </motion.div>

//                     <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//                         <p className="text-2xl font-bold">200,100</p>
//                         <p className="text-white">Participants</p>
//                     </motion.div>
                    
//                     <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//                         <p className="text-2xl font-bold">$1 billion+</p>
//                         <p className="text-white">Total Assets Connected</p>
//                     </motion.div>
                    
//                 </motion.div>
        
//             </div>

//         </div>
//     );
// };

// export default Hero;

import React from 'react';
import hero_3 from "@/@/public/assets/hero_3.jpg";

import HeroPageForAll from '@/components/HeroPageForAll';
const PerformanceTestingHero = () => {

    const data = {
        image: hero_3,
        title: "Maximize Software Speed & Stability",
        description: "Our performance testing services ensure your application runs flawlessly under any load. We help you identify slowdowns, optimize responsiveness, and enhance scalability—delivering a seamless, high-performance user experience even in the most demanding conditions.",
    };
    

    return (
        <HeroPageForAll title={data.title} image={data.image} description={data.description}/>
    );
};

export default PerformanceTestingHero;
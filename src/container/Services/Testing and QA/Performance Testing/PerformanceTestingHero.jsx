import React from 'react';

import HeroPageForAll from '@/components/HeroPageForAll';
const PerformanceTestingHero = () => {

    const data = {
        image: "/assets/hero_3.jpg",
        title: "Maximize Software Speed & Stability",
        description: "Our performance testing services ensure your application runs flawlessly under any load. We help you identify slowdowns, optimize responsiveness, and enhance scalability—delivering a seamless, high-performance user experience even in the most demanding conditions.",
    };
    

    return (
        <HeroPageForAll title={data.title} image="/assets/hero_3.jpg" description={data.description}/>
    );
};

export default PerformanceTestingHero;
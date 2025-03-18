import React from 'react';
import HeroPageForAll from '@/components/HeroPageForAll';

const SeleniumAutomationHeroSection = () => {

    const data = {
        image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/selenium_testing.jpeg",
        title: "Selenium Testing",
        description : "DigiFlex.ai provides an open-source web automation framework designed to simplify testing and automation for modern web applications. It combines various advanced tools like DigiFlex IDE, DigiFlex WebDriver, DigiFlex RC, and DigiFlex Grid, offering a unified interface for executing test scripts in multiple programming languages such as JavaScript, Python, Java, C#, and more. With built-in support for local and remote test execution across different browsers, our framework enables businesses to create efficient, automated workflows, ensuring seamless performance and reliability in web applications.",
    }

    return (
        <HeroPageForAll title={data.title} image={data.image} description={data.description}/>
    );
}

export default SeleniumAutomationHeroSection;


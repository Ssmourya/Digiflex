import React from 'react';
import HeroPageForAll from '../../../../components/HeroPageForAll';
import selenium_testing from "../../../../../../public/assets/selenium_testing.jpeg"

const SeleniumAutomationHeroSection = () => {

    const data = {
        image: selenium_testing,
        title: "Selenium Testing",
        description : "DigiFlex.ai provides an open-source web automation framework designed to simplify testing and automation for modern web applications. It combines various advanced tools like DigiFlex IDE, DigiFlex WebDriver, DigiFlex RC, and DigiFlex Grid, offering a unified interface for executing test scripts in multiple programming languages such as JavaScript, Python, Java, C#, and more. With built-in support for local and remote test execution across different browsers, our framework enables businesses to create efficient, automated workflows, ensuring seamless performance and reliability in web applications.",
    }

    return (
        <HeroPageForAll title={data.title} image={data.image} description={data.description}/>
    );
}

export default SeleniumAutomationHeroSection;


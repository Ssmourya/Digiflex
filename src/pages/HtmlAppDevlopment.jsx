import React from 'react'
import Hero from '../app/container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/Hero';
import WhyChooseHTML5 from '../app/container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/WhyChooseHTML5';
import HTML5Services from '../app/container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/HTML5Services';
import TechnologiesSection from '../app/container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/TechnologiesSection';
import DevelopmentProcess from '../app/container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/DevelopmentProcess';
import Html5DevelopmentSection from '../app/container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/Html5DevelopmentSection';
import { HtmlAppDevlopmentfaqs } from "../app/container/Services/Cloud/Faqdata";import Faq from '../app/components/Faq';
const HtmlAppDevlopment = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseHTML5/>
      <HTML5Services/>  
      <TechnologiesSection/>
      <Html5DevelopmentSection/>
      <DevelopmentProcess/>
      <Faq faqs={HtmlAppDevlopmentfaqs}/>
    </div>
  )
}

export default HtmlAppDevlopment

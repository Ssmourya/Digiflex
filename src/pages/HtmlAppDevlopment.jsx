import React from 'react'
import Hero from '../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/Hero';
import WhyChooseHTML5 from '../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/WhyChooseHTML5';
import HTML5Services from '../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/HTML5Services';
import TechnologiesSection from '../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/TechnologiesSection';
import DevelopmentProcess from '../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/DevelopmentProcess';
import Html5DevelopmentSection from '../container/Technology/MobileAppDev/HTML5 APP DEVELOPMENT/Html5DevelopmentSection';
import { HtmlAppDevlopmentfaqs } from "../container/Services/Cloud/Faqdata";import Faq from '../components/Faq';
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

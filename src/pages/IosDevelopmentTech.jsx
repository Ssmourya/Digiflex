import React from "react";
import Hero from '../container/Technology/MobileAppDev/IOS Devlopment/Hero'
import WhyChooseDigiflex from '../container/Technology/MobileAppDev/IOS Devlopment/WhyChooseDigiflex'
import Industries from "../container/Technology/MobileAppDev/IOS Devlopment/Industries";
import TechStack from "../container/Technology/MobileAppDev/IOS Devlopment/TechStack";
import FAQItem from "../container/Technology/MobileAppDev/IOS Devlopment/FAQItem";
import WrapperContainer from '../Layout/WrapperContainer'
import Faq from "../components/Faq";
import { IosfaqData} from "../container/Services/Cloud/Faqdata";
const IosDevelopmentTech = () => {
  return (
   
    <>
    
    
      <Hero />
     <WrapperContainer>
      <WhyChooseDigiflex/>
      <Industries/>
      <TechStack/>  
      <Faq faqs={IosfaqData}/>
      </WrapperContainer> 
     
    </>
  );
};

export default IosDevelopmentTech;

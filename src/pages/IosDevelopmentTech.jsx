import React from "react";
import Hero from '../app/container/Technology/MobileAppDev/IOS Devlopment/Hero'
import WhyChooseDigiflex from '../app/container/Technology/MobileAppDev/IOS Devlopment/WhyChooseDigiflex'
import Industries from "../app/container/Technology/MobileAppDev/IOS Devlopment/Industries";
import TechStack from "../app/container/Technology/MobileAppDev/IOS Devlopment/TechStack";
import FAQItem from "../app/container/Technology/MobileAppDev/IOS Devlopment/FAQItem";
import WrapperContainer from '../app/Layout/WrapperContainer'
import Faq from "../app/components/Faq";
import { IosfaqData} from "../app/container/Services/Cloud/Faqdata";
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

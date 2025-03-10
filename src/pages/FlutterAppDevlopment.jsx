import React from 'react'
import HeroSection from '../app/container/Technology/MobileAppDev/FlutterAppDEvlopment/HeroSection';
import WhyChooseFlutter from '../app/container/Technology/MobileAppDev/FlutterAppDEvlopment/WhyChooseFlutter';
import OurServices from '../app/container/Technology/MobileAppDev/FlutterAppDEvlopment/OurServices';
import OurTechStack from '../app/container/Technology/MobileAppDev/FlutterAppDEvlopment/OurTechStack'
import IndustriesWeServe from '../app/container/Technology/MobileAppDev/FlutterAppDEvlopment/IndustriesWeServe'
import { FlutterfaqData } from "../app/container/Services/Cloud/Faqdata";import WrapperContainer from '../app/Layout/WrapperContainer';
import Faq from '../app/components/Faq';
const FlutterAppDevlopment = () => {
  return (
    <div>
      <HeroSection/>
      <WrapperContainer>
      <WhyChooseFlutter/>
      <OurServices/>
      <OurTechStack/>
      <IndustriesWeServe/>
      </WrapperContainer>
     <Faq faqs={FlutterfaqData}/>
      
    </div>
  )
}

export default FlutterAppDevlopment

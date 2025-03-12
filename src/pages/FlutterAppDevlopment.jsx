import React from 'react'
import HeroSection from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/HeroSection';
import WhyChooseFlutter from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/WhyChooseFlutter';
import OurServices from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/OurServices';
import OurTechStack from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/OurTechStack'
import IndustriesWeServe from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/IndustriesWeServe'
import { FlutterfaqData } from "../container/Services/Cloud/Faqdata";
import WrapperContainer from '@/Layout/WrapperContainer';
import Faq from '../components/Faq';
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

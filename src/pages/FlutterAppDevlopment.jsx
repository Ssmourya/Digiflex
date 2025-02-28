import React from 'react'
import HeroSection from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/HeroSection';
import WhyChooseFlutter from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/WhyChooseFlutter';
import OurServices from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/OurServices';
import OurTechStack from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/OurTechStack'
import IndustriesWeServe from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/IndustriesWeServe'
import FAQ from '../container/Technology/MobileAppDev/FlutterAppDEvlopment/FAQ';
import WrapperContainer from '../Layout/WrapperContainer';
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
      <FAQ/>
      
    </div>
  )
}

export default FlutterAppDevlopment

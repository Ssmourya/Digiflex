import React from 'react'
import HeroSection from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/HeroSection'
import WhyDigiflex from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/WhyDigiflex'
import AndroidServices from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/AndroidServices'
import TechStack from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/TechStack'
import SmartFeatures from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/SmartFeatures'
import AndroidDevelopmentProcess from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/AndroidDevelopmentProcess'
import WrapperContainer from '../Layout/WrapperContainer'
import Faq from '../components/Faq'
import { AndroidfaqData } from "../container/Services/Cloud/Faqdata";
const AndroidAppDevlopment = () => {
  return (
   <>
      <HeroSection/>
      <WrapperContainer>
      <WhyDigiflex/>
      <AndroidServices/>
      <TechStack/>
      <SmartFeatures/>
      <AndroidDevelopmentProcess/>
      <Faq faqs={AndroidfaqData}/>
      
      </WrapperContainer>
      
    </>
  )
}

export default AndroidAppDevlopment

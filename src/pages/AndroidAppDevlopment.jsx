import React from 'react'
import HeroSection from '../app/container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/HeroSection'
import WhyDigiflex from '../app/container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/WhyDigiflex'
import AndroidServices from '../app/container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/AndroidServices'
import TechStack from '../app/container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/TechStack'
import SmartFeatures from '../app/container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/SmartFeatures'
import AndroidDevelopmentProcess from '../app/container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/AndroidDevelopmentProcess'
import WrapperContainer from '../app/Layout/WrapperContainer'
import Faq from '../app/components/Faq'
import { AndroidfaqData } from "../app/container/Services/Cloud/Faqdata";
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

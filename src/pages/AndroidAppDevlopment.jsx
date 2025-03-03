import React from 'react'
import HeroSection from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/HeroSection'
import WhyDigiflex from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/WhyDigiflex'
import AndroidServices from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/AndroidServices'
import TechStack from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/TechStack'
import SmartFeatures from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/SmartFeatures'
import AndroidDevelopmentProcess from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/AndroidDevelopmentProcess'
import WrapperContainer from '../Layout/WrapperContainer'
import FAQ from '../container/Technology/MobileAppDev/ANDROID APP DEVELOPMENT/FAQ'
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
      
      </WrapperContainer>
      <FAQ/>
    </>
  )
}

export default AndroidAppDevlopment

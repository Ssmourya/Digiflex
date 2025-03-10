import React from 'react'
import Hero from '../app/container/Technology/MobileAppDev/React Native/Hero'
import WhyChooseReactNative from '../app/container/Technology/MobileAppDev/React Native/WhyChooseReactNative'
import OurServices from '../app/container/Technology/MobileAppDev/React Native/OurServices'
import OurTechStack from '../app/container/Technology/MobileAppDev/React Native/OurTechStack'
import SmartFeatures from '../app/container/Technology/MobileAppDev/React Native/SmartFeatures'
import IndustriesWeServe from '../app/container/Technology/MobileAppDev/React Native/IndustriesWeServe'
import { ReactfaqData } from "../app/container/Services/Cloud/Faqdata";
import WrapperContainer from '../app/Layout/WrapperContainer'
import Faq from '../app/components/Faq'
const ReactNative = () => {
  return (
    <div>

    
      <Hero/>
      <WrapperContainer>
      <WhyChooseReactNative/>
      <OurTechStack/>
      <OurServices/>
      <IndustriesWeServe/>
      <SmartFeatures/>
      <Faq faqs={ReactfaqData}/>
      </WrapperContainer>
      
      
    </div>
  )
}

export default ReactNative

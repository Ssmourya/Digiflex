import React from 'react'
import Hero from '../container/Technology/MobileAppDev/NativeScript/Hero'
import NativeScriptBenefits from '../container/Technology/MobileAppDev/NativeScript/NativeScriptBenefits'
import NativeScriptServices from '../container/Technology/MobileAppDev/NativeScript/NativeScriptServices'
import NativeScriptProcess from '../container/Technology/MobileAppDev/NativeScript/NativeScriptProcess'
import IndustriesSection from '../container/Technology/MobileAppDev/NativeScript/IndustriesSection'
import { NativefaqData } from "../container/Services/Cloud/Faqdata";
import Faq from '../components/Faq'


const NativeScript = () => {
  return (
    <>

      
      <Hero/>
      <NativeScriptBenefits/>
      <NativeScriptServices/>
      <NativeScriptProcess/>
      <IndustriesSection/>
      <Faq faqs={NativefaqData}/>
      
      
      
    </>
  )
}

export default NativeScript

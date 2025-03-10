import React from 'react'
import Hero from '../app/container/Technology/MobileAppDev/NativeScript/Hero'
import NativeScriptBenefits from '../app/container/Technology/MobileAppDev/NativeScript/NativeScriptBenefits'
import NativeScriptServices from '../app/container/Technology/MobileAppDev/NativeScript/NativeScriptServices'
import NativeScriptProcess from '../app/container/Technology/MobileAppDev/NativeScript/NativeScriptProcess'
import IndustriesSection from '../app/container/Technology/MobileAppDev/NativeScript/IndustriesSection'
import { NativefaqData } from "../app/container/Services/Cloud/Faqdata";
import Faq from '../app/components/Faq'


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

import React from 'react'
import Hero from '../container/Technology/MobileAppDev/XamarinAppDevlopment/Hero'
import WhyChooseXamarin from '../container/Technology/MobileAppDev/XamarinAppDevlopment/WhyChooseXamarin'
import XamarinAppServices from '../container/Technology/MobileAppDev/XamarinAppDevlopment/XamarinAppServices'
import WhyDigiflex from '../container/Technology/MobileAppDev/XamarinAppDevlopment/WhyDigiflex'
import XamarinTechStack from '../container/Technology/MobileAppDev/XamarinAppDevlopment/XamarinTechStack'
import IndustriesWeServe from '../container/Technology/MobileAppDev/XamarinAppDevlopment/IndustriesWeServe'
import { Xamarinfaqs } from "../container/Services/Cloud/Faqdata";import Faq from '../components/Faq'

const XamarinAppDEvlopment = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseXamarin/>
      <XamarinAppServices/>
      <WhyDigiflex/>
      <XamarinTechStack/>
      <IndustriesWeServe/>
      <Faq faqs={Xamarinfaqs}/>
    </div>
  )
}

export default XamarinAppDEvlopment

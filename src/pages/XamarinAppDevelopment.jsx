import React from 'react'
import Hero from '../app/container/Technology/MobileAppDev/XamarinAppDevlopment/Hero'
import WhyChooseXamarin from '../app/container/Technology/MobileAppDev/XamarinAppDevlopment/WhyChooseXamarin'
import XamarinAppServices from '../app/container/Technology/MobileAppDev/XamarinAppDevlopment/XamarinAppServices'
import WhyDigiflex from '../app/container/Technology/MobileAppDev/XamarinAppDevlopment/WhyDigiflex'
import XamarinTechStack from '../app/container/Technology/MobileAppDev/XamarinAppDevlopment/XamarinTechStack'
import IndustriesWeServe from '../app/container/Technology/MobileAppDev/XamarinAppDevlopment/IndustriesWeServe'
import { Xamarinfaqs } from "../app/container/Services/Cloud/Faqdata";import Faq from '../app/components/Faq'

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

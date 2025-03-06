import React from 'react'
import Hero from "../container/Technology/WebsiteDevlopment/Python/Hero"
import PythonServices from '../container/Technology/WebsiteDevlopment/Python/PythonServices'
import WrapperContainer from '../Layout/WrapperContainer'
import TechnologiesSection from '../container/Technology/WebsiteDevlopment/Python/TechnologiesSection'
import DevelopmentProcess from '../container/Technology/WebsiteDevlopment/Python/DevelopmentProcess'
import WhyChooseUsSection from '../container/Technology/WebsiteDevlopment/Python/WhyChooseUsSection'
import { Pythonfaqs } from "../container/Services/Cloud/Faqdata";import Faq from '../components/Faq'
const PythonDevelopment = () => {
  return (
    <div>
      <Hero/>
      <PythonServices/>
      <WrapperContainer>
      
      <TechnologiesSection/>
      <DevelopmentProcess/>
      <WhyChooseUsSection/>
     <Faq faqs={Pythonfaqs}/>
     
      </WrapperContainer>
    </div>
  )
}

export default PythonDevelopment

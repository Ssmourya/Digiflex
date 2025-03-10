import React from 'react'
import Hero from "../app/container/Technology/WebsiteDevlopment/Python/Hero"
import PythonServices from '../app/container/Technology/WebsiteDevlopment/Python/PythonServices'
import WrapperContainer from '../app/Layout/WrapperContainer'
import TechnologiesSection from '../app/container/Technology/WebsiteDevlopment/Python/TechnologiesSection'
import DevelopmentProcess from '../app/container/Technology/WebsiteDevlopment/Python/DevelopmentProcess'
import WhyChooseUsSection from '../app/container/Technology/WebsiteDevlopment/Python/WhyChooseUsSection'
import { Pythonfaqs } from "../app/container/Services/Cloud/Faqdata";import Faq from '../app/components/Faq'
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

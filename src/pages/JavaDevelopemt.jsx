import React from 'react'
import Hero from '../container/Technology/WebsiteDevlopment/JAVA/Hero'
import JavaDevelopmentServices from '../container/Technology/WebsiteDevlopment/JAVA/JavaDevelopmentServices'
import Technologies from '../container/Technology/WebsiteDevlopment/JAVA/Technologies'
import DevelopmentProcess from '../container/Technology/WebsiteDevlopment/JAVA/DevelopmentProcess'
import WhyChooseUs from '../container/Technology/WebsiteDevlopment/JAVA/WhyChooseUs'
import CaseStudies from '../container/Technology/WebsiteDevlopment/JAVA/CaseStudiesPortfolio'
import WrapperContainer from '../Layout/WrapperContainer'
import Faq from '../components/Faq'
import { Javafaqs } from "../container/Services/Cloud/Faqdata";

const JAVADEVELOPMENENT = () => {
  return (
    <>
    <Hero/>
    <WrapperContainer>
    <JavaDevelopmentServices/>
    <Technologies/>
    <DevelopmentProcess/>
    <WhyChooseUs/>
    <CaseStudies/>
    <Faq faqs={Javafaqs}/>
    </WrapperContainer>
    
    

    
    
    </>
    
  )
}

export default JAVADEVELOPMENENT

import React from 'react'
import Hero from '../app/container/Technology/WebsiteDevlopment/JAVA/Hero'
import JavaDevelopmentServices from '../app/container/Technology/WebsiteDevlopment/JAVA/JavaDevelopmentServices'
import Technologies from '../app/container/Technology/WebsiteDevlopment/JAVA/Technologies'
import DevelopmentProcess from '../app/container/Technology/WebsiteDevlopment/JAVA/DevelopmentProcess'
import WhyChooseUs from '../app/container/Technology/WebsiteDevlopment/JAVA/WhyChooseUs'
import CaseStudies from '../app/container/Technology/WebsiteDevlopment/JAVA/CaseStudiesPortfolio'
import WrapperContainer from '../app/Layout/WrapperContainer'
import Faq from '../app/components/Faq'
import { Javafaqs } from "../app/container/Services/Cloud/Faqdata";

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

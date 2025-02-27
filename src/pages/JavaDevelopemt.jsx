import React from 'react'
import Hero from '../container/Technology/WebsiteDevlopment/JAVA/Hero'
import JavaDevelopmentServices from '../container/Technology/WebsiteDevlopment/JAVA/JavaDevelopmentServices'
import Technologies from '../container/Technology/WebsiteDevlopment/JAVA/Technologies'
import DevelopmentProcess from '../container/Technology/WebsiteDevlopment/JAVA/DevelopmentProcess'
import WhyChooseUs from '../container/Technology/WebsiteDevlopment/JAVA/WhyChooseUs'
import JavaDevelopmentFAQ from '../container/Technology/WebsiteDevlopment/JAVA/JavaDevelopmentFAQ'
import CaseStudies from '../container/Technology/WebsiteDevlopment/JAVA/CaseStudiesPortfolio'
import WrapperContainer from '../Layout/WrapperContainer'

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
    <JavaDevelopmentFAQ/>
    </WrapperContainer>
    
    

    
    
    </>
    
  )
}

export default JAVADEVELOPMENENT

import React from 'react'

import BusinessAIHeader from "../container/Services/Testing and QA/Selenium Automation Testing/BusinessAIHeader"
import SeleniumAutomationHeroSection from '../container/Services/Testing and QA/Selenium Automation Testing/SeleniumAutomationHeroSection'
import OutcomesSection from '../container/Services/Testing and QA/Selenium Automation Testing/OutcomesSection'
import SeleniumServices from '../container/Services/Testing and QA/Selenium Automation Testing/SeleniumServices'
import SpeedBenefits from '../container/Services/Testing and QA/Selenium Automation Testing/SpeedBenefits'
import ProductShowcase from '../container/Services/Testing and QA/Selenium Automation Testing/ProductShowcase'
import IntegrationShowcase from '../container/Services/Testing and QA/Selenium Automation Testing/IntegrationShowcase'
import RealAutomation from '../container/Services/Testing and QA/Selenium Automation Testing/RealAutomation'
import WrapperContainer from '../Layout/WrapperContainer';
const SeleniumAutomationTesting = () => {
    return (
        <div>
            <SeleniumAutomationHeroSection/>
            <BusinessAIHeader/>
            <RealAutomation/>
            <OutcomesSection/>
            <SeleniumServices/>
            <SpeedBenefits/>
            <ProductShowcase/>
            <IntegrationShowcase/>
            
        </div>
    )
}

export default SeleniumAutomationTesting

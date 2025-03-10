import React from 'react'

import BusinessAIHeader from "../app/container/Services/Testing and QA/Selenium Automation Testing/BusinessAIHeader"
import SeleniumAutomationHeroSection from '../app/container/Services/Testing and QA/Selenium Automation Testing/SeleniumAutomationHeroSection'
import OutcomesSection from '../app/container/Services/Testing and QA/Selenium Automation Testing/OutcomesSection'
import SeleniumServices from '../app/container/Services/Testing and QA/Selenium Automation Testing/SeleniumServices'
import SpeedBenefits from '../app/container/Services/Testing and QA/Selenium Automation Testing/SpeedBenefits'
import ProductShowcase from '../app/container/Services/Testing and QA/Selenium Automation Testing/ProductShowcase'
import IntegrationShowcase from '../app/container/Services/Testing and QA/Selenium Automation Testing/IntegrationShowcase'
import RealAutomation from '../app/container/Services/Testing and QA/Selenium Automation Testing/RealAutomation'
import WrapperContainer from '../app/Layout/WrapperContainer';
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

import React from 'react'

import TestAutomationHeroSection from '../container/Services/Testing and QA/Test Automation/TestAutomationHeroSection';
import Body from '../container/Services/Testing and QA/Test Automation/Body';
import TestAutomationFeatures from '../container/Services/Testing and QA/Test Automation/TestAutomationFeatures';
import ImprovementSection from '../container/Services/Testing and QA/Test Automation/ImprovementSection';
import AutomationServices from '../container/Services/Testing and QA/Test Automation/AutomationServices';
import ContentSlider from '../container/Services/Testing and QA/Test Automation/ContentSlider';
import TestingCapabilities from '../container/Services/Testing and QA/Test Automation/TestingCapabilities';
import WrapperContainer from '../Layout/WrapperContainer';

const TestAutomation = () => {
    return (
        <div>
            <TestAutomationHeroSection/>
			<Body/>
			<TestAutomationFeatures/>
			<ImprovementSection/>
			<AutomationServices/>
			<ContentSlider/>
			<TestingCapabilities/>
        </div>
    )
}

export default TestAutomation
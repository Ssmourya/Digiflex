import React from 'react'

import TestAutomationHeroSection from '../app/container/Services/Testing and QA/Test Automation/TestAutomationHeroSection';
import Body from '../app/container/Services/Testing and QA/Test Automation/Body';
import TestAutomationFeatures from '../app/container/Services/Testing and QA/Test Automation/TestAutomationFeatures';
import ImprovementSection from '../app/container/Services/Testing and QA/Test Automation/ImprovementSection';
import AutomationServices from '../app/container/Services/Testing and QA/Test Automation/AutomationServices';
import ContentSlider from '../app/container/Services/Testing and QA/Test Automation/ContentSlider';
import TestingCapabilities from '../app/container/Services/Testing and QA/Test Automation/TestingCapabilities';
import WrapperContainer from '../app/Layout/WrapperContainer';

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
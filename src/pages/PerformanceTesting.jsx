import React from 'react';


import PerformanceTestingHero from "../app/container/Services/Testing and QA/Performance Testing/PerformanceTestingHero";
import PerformanceTestingSection from '../app/container/Services/Testing and QA/Performance Testing/PerformanceTestingSection';
import Services from '../app/container/Services/Testing and QA/Performance Testing/Services';
import PerformanceTestingDiagram from "../app/container/Services/Testing and QA/Performance Testing/PerformanceTestingDiagram";
import TestingTools from '../app/container/Services/Testing and QA/Performance Testing/TestingTools';
import BusinessSolutions from "../app/container/Services/Testing and QA/Performance Testing/BusinessSolutions";
import PerformanceChallenges from "../app/container/Services/Testing and QA/Performance Testing/PerformanceChallenges";
import WrapperContainer from '../app/Layout/WrapperContainer';
const PerformanceTesting = () => {
    return (
        <div>
            <PerformanceTestingHero/>
			<PerformanceTestingSection/>
			<Services/>
			<PerformanceTestingDiagram/>
			<TestingTools/>
			<BusinessSolutions/>
			<PerformanceChallenges/>
        </div>
    )
}

export default PerformanceTesting
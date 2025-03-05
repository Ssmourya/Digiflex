import React from 'react'

import HeroSection from "../container/Services/Testing and QA/Security Testing/HeroSection"
import CyberDefenseSection from '../container/Services/Testing and QA/Security Testing/CyberDefenseSection';
import SecurityOperations from '../container/Services/Testing and QA/Security Testing/SecurityOperations';
import DigitalTransformation from '../container/Services/Testing and QA/Security Testing/DigitalTransformation';
import WebAppPenetrationTesting from '../container/Services/Testing and QA/Security Testing/WebAppPenetrationTesting';
import WebAppPenetrationTestingProcess from '../container/Services/Testing and QA/Security Testing/WebAppPenetrationTestingProcess';
import SecurityApproach from '../container/Services/Testing and QA/Security Testing/SecurityApproach';
import WrapperContainer from '../Layout/WrapperContainer';

const SecurityTestingServices = () => {
  return (
    <div>
        <HeroSection/>
        <CyberDefenseSection/>
        <SecurityOperations/>
        <DigitalTransformation/>
        <WebAppPenetrationTesting/>
        <WebAppPenetrationTestingProcess/>
        <SecurityApproach/>
    </div>
  )
}

export default SecurityTestingServices
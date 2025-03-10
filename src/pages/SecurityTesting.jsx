import React from 'react'

import HeroSection from "../app/container/Services/Testing and QA/Security Testing/HeroSection"
import CyberDefenseSection from '../app/container/Services/Testing and QA/Security Testing/CyberDefenseSection';
import SecurityOperations from '../app/container/Services/Testing and QA/Security Testing/SecurityOperations';
import DigitalTransformation from '../app/container/Services/Testing and QA/Security Testing/DigitalTransformation';
import WebAppPenetrationTesting from '../app/container/Services/Testing and QA/Security Testing/WebAppPenetrationTesting';
import WebAppPenetrationTestingProcess from '../app/container/Services/Testing and QA/Security Testing/WebAppPenetrationTestingProcess';
import SecurityApproach from '../app/container/Services/Testing and QA/Security Testing/SecurityApproach';
import WrapperContainer from '../app/Layout/WrapperContainer';

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
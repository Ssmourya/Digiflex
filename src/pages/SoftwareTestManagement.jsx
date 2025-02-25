import React from 'react'

import Overview from "../container/Services/Testing and QA/Software Test Management/Overview"
import Hero from '../container/Services/Testing and QA/Software Test Management/HeroSection';
import ScalableAutomation from '../container/Services/Testing and QA/Software Test Management/ScalableAutomation';
import TestManagementSystem from '../container/Services/Testing and QA/Software Test Management/TestManagementSystem';
import Benifits from '../container/Services/Testing and QA/Software Test Management/Benifits';
import BodyData from '../container/Services/Testing and QA/Software Test Management/BodyData';
import AnalystRecognition from '../container/Services/Testing and QA/Software Test Management/AnalystRecognition';
import AccelerateBusiness from '../container/Services/Testing and QA/Software Test Management/AccelerateBusiness';
import WrapperContainer from '../Layout/WrapperContainer';


const SoftwareTestManagement = () => {
  return (
    <div>
        <Hero/>
		
		<Overview/>
		<ScalableAutomation/>
		<TestManagementSystem/>
		<Benifits/>
		<BodyData/>
		<AnalystRecognition/>
		<AccelerateBusiness/>
    </div>
  )
}

export default SoftwareTestManagement
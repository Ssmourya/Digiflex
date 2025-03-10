import React from 'react'

import Overview from "../app/container/Services/Testing and QA/Software Test Management/Overview"
import Hero from '../app/container/Services/Testing and QA/Software Test Management/HeroSection';
import ScalableAutomation from '../app/container/Services/Testing and QA/Software Test Management/ScalableAutomation';
import TestManagementSystem from '../app/container/Services/Testing and QA/Software Test Management/TestManagementSystem';
import Benifits from '../app/container/Services/Testing and QA/Software Test Management/Benifits';
import BodyData from '../app/container/Services/Testing and QA/Software Test Management/BodyData';
import AnalystRecognition from '../app/container/Services/Testing and QA/Software Test Management/AnalystRecognition';
import AccelerateBusiness from '../app/container/Services/Testing and QA/Software Test Management/AccelerateBusiness';
import WrapperContainer from '../app/Layout/WrapperContainer';


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
import React from 'react'
import VrXrServices from './VrXrServices'
import DevelopmentServices from './DevelopmentServices'
import Tools from './Tools'
import { VRXRSimulationFAQData } from '../FAQData'
import Faq from '../../../../components/Faq'


const Body = () => {
    return (
        <div>
            <VrXrServices />
            <DevelopmentServices/>
            <Tools />
            <Faq faqs={VRXRSimulationFAQData} />
    
            
        </div>
    )
}

export default Body

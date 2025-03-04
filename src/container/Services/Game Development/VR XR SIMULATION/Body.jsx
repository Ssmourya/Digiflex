import React from 'react'
import VrXrServices from './VrXrServices'
import DevelopmentServices from './DevelopmentServices'
import Tools from './Tools'
import { VRXRSimulationFAQData } from '../FAQData'
import Faq from '../../../../components/Faq'
import WhyChoose from './WhyChoose'

const Body = () => {
    return (
        <div>
            <VrXrServices />
            <DevelopmentServices/>
            <WhyChoose />
            <Tools />
            <Faq faqs={VRXRSimulationFAQData} />
    
            
        </div>
    )
}

export default Body

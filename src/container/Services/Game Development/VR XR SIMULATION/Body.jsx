import React, { Suspense, lazy } from 'react'
import { VRXRSimulationFAQData } from '../FAQData'

const VrXrServices = lazy(() => import('./VrXrServices'))
const DevelopmentServices = lazy(() => import('./DevelopmentServices'))
const Tools = lazy(() => import('./Tools'))
const WhyChoose = lazy(() => import('./WhyChoose'))
const Faq = lazy(() => import('../../../../components/Faq'))

const Body = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <VrXrServices />
                <DevelopmentServices/>
                <Tools />
                <WhyChoose />
                    
                <Faq faqs={VRXRSimulationFAQData} />
            </Suspense>
        </div>
    )
}

export default Body

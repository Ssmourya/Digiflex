import React, { Suspense, lazy } from 'react'
import { Unity3DGameFAQData } from '../FAQData'

const ServicesSection = lazy(() => import('./ServicesSection '))
const WhyChooseUs = lazy(() => import('./WhyChooseUs'))
const GameGenres = lazy(() => import('./GameGenres'))
const Faq = lazy(() => import('@/components/Faq'))
    
const Body = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ServicesSection />
                <WhyChooseUs />
                <GameGenres />
                <Faq faqs={Unity3DGameFAQData} />
            </Suspense>
        </div>
    )
}

export default Body;


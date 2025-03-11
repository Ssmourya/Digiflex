import React, { Suspense, lazy } from 'react'
import { UnrealGameFAQData } from '../FAQData';

const GameServices = lazy(() => import('./GameServices'));
const UnrealBenefits = lazy(() => import('./UnrealBenefits'));
const UnrealTeam = lazy(() => import('./UnrealTeam'));
const WhyChoose = lazy(() => import('./WhyChoose'));
const Faq = lazy(() => import('@/components/Faq'));

const Body = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <GameServices />
                <UnrealBenefits />
                <WhyChoose />
                <UnrealTeam />
                <Faq faqs={UnrealGameFAQData} />
            </Suspense>
        </div>
    )
}

export default Body

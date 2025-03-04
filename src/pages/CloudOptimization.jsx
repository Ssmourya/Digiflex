import React from 'react'
import Optimization_hero from '../container/Services/Cloud/Cloud_Optimization/Optimization_hero'
import Optimization_overview from '../container/Services/Cloud/Cloud_Optimization/Optimization_overview'
import Optimization_work from '../container/Services/Cloud/Cloud_Optimization/Optimization_work'
import Optimization_strategies from '../container/Services/Cloud/Cloud_Optimization/Optimization_strategies'
import Optimization_benefits from '../container/Services/Cloud/Cloud_Optimization/Optimization_benefits'
import Faq from '../components/Faq'
import { CloudOptimizationFAQData } from '../container/Services/Cloud/Faqdata'

function CloudOptimization() {
  return (
    <>
    <Optimization_hero/>
    <Optimization_overview/>
    <Optimization_work/>
    <Optimization_strategies/>
    <Optimization_benefits/>
    <Faq faqs={CloudOptimizationFAQData}/>
    </>
  )
}

export default CloudOptimization
import AI_machine_hero from '@/container/Services/AI/AI_machine_learning/AI_machine_hero'
import Process from '@/container/Services/AI/AI_machine_learning/Process'
import Services from '@/container/Services/AI/AI_machine_learning/Services'
import Technologies from '@/container/Services/AI/AI_machine_learning/Technologies'
import CaseStudy from '@/container/Services/AI/AI_machine_learning/CaseStudy'
import { MachineLearningFAQData } from '../container/Services/AI/Faqdata'

import React from 'react'
import Faq from '@/components/Faq'

function AI_machinelearning() {
	return (
		<>
			<AI_machine_hero />
			<Services/>
			<Process/>
			<Technologies/>
			<CaseStudy/>
			<Faq faqs={MachineLearningFAQData} />
			
		</>
	)
}

export default AI_machinelearning
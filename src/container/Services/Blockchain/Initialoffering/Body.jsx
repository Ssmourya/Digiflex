import React from 'react'
import Initialofferingservices from './Initialofferingservices'
import Initialofferingbenifits from './Initialofferingbenifits'
import Whychoose from './Whychoose'
import {Initialfaqs} from '../Faqdata'
import Faq from '@/components/Faq'




const Body = () => {
  return (
 <>
 
 <Initialofferingservices/>
 <Initialofferingbenifits/>
 <Whychoose/>
 <Faq faqs={Initialfaqs} />

 

 </>
  )
}

export default Body
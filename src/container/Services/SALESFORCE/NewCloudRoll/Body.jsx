import React from 'react'
import Feature from './Feature'
import Benifits from './Benifits'
import TechStack from './TechStack'
import { NewCloudRollfaqs} from '../faqdata'
import Faq from '@/components/Faq'

const Body = () => {
  return (
    <>
    <Feature/>
    <Benifits/>
    <TechStack/>
    <Faq faqs={ NewCloudRollfaqs} />
    </>
  )
}

export default Body
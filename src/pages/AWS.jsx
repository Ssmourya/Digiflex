import React from 'react'
import Aws_hero from '../app/container/Services/Cloud/AWS/Aws_hero'
import Aws_intro from '../app/container/Services/Cloud/AWS/Aws_intro'
import Aws_busines from '../app/container/Services/Cloud/AWS/Aws_busines'
import AWS_services from '../app/container/Services/Cloud/AWS/AWS_services'
import Aws_deploy from '../app/container/Services/Cloud/AWS/Aws_deploy'
import Faq from '../app/components/Faq'
import { AWSCloudServicesFAQData } from '../app/container/Services/Cloud/Faqdata'


function AWS() {
  return (
    <>
  <Aws_hero/>
  <Aws_intro/>
  <Aws_busines/>
  <AWS_services/>
  <Aws_deploy/>
  <Faq faqs={AWSCloudServicesFAQData}/>
    </>
  )
}

export default AWS
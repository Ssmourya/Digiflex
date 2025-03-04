import React from 'react'
import Intercloud_hero from '../container/Services/Cloud/Intercloud_migratu/Intercloud_hero'
import Intercloud_intro from '../container/Services/Cloud/Intercloud_migratu/Intercloud_intro'
import Intercloud_type from '../container/Services/Cloud/Intercloud_migratu/Intercloud_type'
import Intercloudpopular from '../container/Services/Cloud/Intercloud_migratu/Intercloudpopular'
import Intercloud_need from '../container/Services/Cloud/Intercloud_migratu/Intercloud_need'
import Intercloud_approaches from '../container/Services/Cloud/Intercloud_migratu/Intercloud_approaches '
import Faq from '../components/Faq'
import { IntercloudMigrationFAQData } from '../container/Services/Cloud/Faqdata'



function Ntercloud() {
  return (
    <>
      <Intercloud_hero/>
      <Intercloud_intro/>
      <Intercloud_type/>
      <Intercloudpopular/> 
      <Intercloud_need/>
      <Intercloud_approaches/>
      <Faq faqs={IntercloudMigrationFAQData}/>
    </>
  )
}

export default Ntercloud
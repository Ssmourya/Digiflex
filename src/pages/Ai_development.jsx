import React from 'react'
import Aiappintro from '../container/Services/AI/Ai_app/Aiappintro'
import Aiapptransformation from '../container/Services/AI/AI_app/Aiapptransformation'
import Ai_app_services from '../container/Services/AI/AI_app/Ai_app_services'
import Ai_digiflex_development from '../container/Services/AI/AI_app/Ai_digiflex_development'
import Ai_app_Industries from '../container/Services/AI/AI_app/Ai_app_Industries '
import AITechStack from '../container/Services/AI/AI_app/AITechStack'
import Aiapphero from '../container/Services/AI/AI_app/Aiapphero'

function Ai_development() {
  return (
    <>
        <Aiapphero/>
        <Aiappintro/>
        <Aiapptransformation/>
        <Ai_app_services/>
        <Ai_digiflex_development/>
        <Ai_app_Industries/>
        <AITechStack/>
    </>
  )
}

export default Ai_development
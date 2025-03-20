
import MlopsHero from '@/container/Services/AI/MLOPS/MlopsHero';
import Services from '@/container/Services/AI/MLOPS/Services';
import Methodology from '@/container/Services/AI/MLOPS/Methodology';
import SucessStories from '@/container/Services/AI/MLOPS/SucessStories';
import Technologies from '@/container/Services/AI/MLOPS/Technologies';
import Faq from '@/components/Faq';
import {MLOpsFAQData} from "@/container/Services/AI/Faqdata";

export default function MLOpsConsulting() {
  
    return (
        <>
            <MlopsHero/>
            <Services/>
            <Methodology/>
            <SucessStories/>
            <Technologies/>
            <Faq faqs={MLOpsFAQData}/>
        </>
    );
}
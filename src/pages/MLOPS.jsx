
import MlopsHero from '@/container/Services/AI/MLOPS/MlopsHero';
import Services from '@/container/Services/AI/MLOPS/Services';
import Methodology from '@/container/Services/AI/MLOPS/Methodology';
import SucessStories from '@/container/Services/AI/MLOPS/SucessStories';
import Technologies from '@/container/Services/AI/MLOPS/Technologies';

export default function MLOpsConsulting() {
  
    return (
        <>
            <MlopsHero/>
            <Services/>
            <Methodology/>
            <SucessStories/>
            <Technologies/>
        </>
    );
}
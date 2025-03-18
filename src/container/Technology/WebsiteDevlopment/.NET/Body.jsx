import CaseStudiesPortfolio from "./CaseStudiesPortfolio";
import Features from "./features";
import SoftwareDevProcess from './SoftwareDevProcess'
import Faq from '../../../../components/Faq'
import {DotNetServicesFAQData} from '../FAQData'


const Body  = () => {
    return (
        <>
        <CaseStudiesPortfolio/>
        <Features />
        <SoftwareDevProcess /> 
        <Faq faqs={DotNetServicesFAQData}/>
        </>
    );
}

export default Body;
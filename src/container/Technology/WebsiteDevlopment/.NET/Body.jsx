import CaseStudiesPortfolio from "./CaseStudiesPortfolio";
import SoftwareDevProcess from "./SoftwareDevProcess";
import Faq from "../../../../components/Faq";
import { DotNetServicesFAQData } from "../FAQData";
import Features from "./Features";
import WhyChooseUs from "./WhyChooseUs";

const Body = () => {
  return (
    <>
      <CaseStudiesPortfolio />
      <Features />
      <SoftwareDevProcess />
      <WhyChooseUs/>
      <Faq faqs={DotNetServicesFAQData} />
    </>
  );
};

export default Body;

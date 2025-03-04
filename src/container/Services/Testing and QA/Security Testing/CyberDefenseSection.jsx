// import { PlayCircle } from "lucide-react";
import TechnicalPeople from "../../../../assets/TechnicalPeople.jpeg"
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";
const CyberDefenseSection = () => {
     return (
          <WrapperContainer className="w-11/12 mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
               {/* Text Content */}
               <div className="md:w-1/2 space-y-4">
                   
                    <Heading>
                         Build adaptive, flexible, and scalable cyber defense solutions
                    </Heading>
                    <Paragraph>
                         digiflex.ai provides businesses with cutting-edge security solutions that are 
                         adaptive, flexible, and designed to scale seamlessly. our ai-driven cybersecurity 
                         and incident response services empower organizations to assess, protect, and recover 
                         from potential cyber threats, ensuring resilience and compliance.
                    </Paragraph>
                    <Paragraph>
                         with digiflex.ai's expertise, businesses can customize tools and operational models 
                         to meet unique challenges and regional requirements. our solutions are designed to 
                         streamline operations while adhering to regional mandates and {" "}
                         <a href="#" className="text-blue-700 hover:text-blue-800 underline">cyber regulations.</a>
                    </Paragraph>
               </div>

               
               {/* Video/Image Section */}
               <div className="md:w-1/2 relative">
               <img
                    src={TechnicalPeople} // Replace with actual image URL
                    alt="Cyber defense dashboard"
                    className="w-full rounded-lg shadow-lg"
               />
               {/* <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-60">
                    <PlayCircle className="w-12 h-12" />
                    <span className="ml-2 text-lg">Play video</span>
               </button> */}
               </div>
          </WrapperContainer>
     );
};

export default CyberDefenseSection;
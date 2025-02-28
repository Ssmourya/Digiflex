import { PlayCircle } from "lucide-react";
import TechnicalPeople from "../../../../assets/TechnicalPeople.jpeg"
import Heading from "../../../../Layout/Heading";
const CyberDefenseSection = () => {
     return (
          <div className="w-11/12 mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
               {/* Text Content */}
               <div className="md:w-1/2 space-y-4">
                    <p className="text-red-500 text-xl font-bold text-center">what we do</p>
                    <Heading className="text-5xl font-semibold text-[#1A2E6F]">
                         Build adaptive, flexible, and scalable cyber defense solutions
                    </Heading>
                    <p className="text-xl">
                         digiflex.ai provides businesses with cutting-edge security solutions that are 
                         adaptive, flexible, and designed to scale seamlessly. our ai-driven cybersecurity 
                         and incident response services empower organizations to assess, protect, and recover 
                         from potential cyber threats, ensuring resilience and compliance.
                    </p>
                    <p className="text-lg">
                         with digiflex.ai's expertise, businesses can customize tools and operational models 
                         to meet unique challenges and regional requirements. our solutions are designed to 
                         streamline operations while adhering to regional mandates and 
                         <a href="#" className="text-blue-500 underline">cyber regulations.</a>
                    </p>
               </div>

               
               {/* Video/Image Section */}
               <div className="md:w-1/2 relative">
               <img
                    src={TechnicalPeople} // Replace with actual image URL
                    alt="Cyber defense dashboard"
                    className="w-full rounded-lg shadow-lg"
               />
               <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg hover:bg-opacity-60">
                    <PlayCircle className="w-12 h-12" />
                    <span className="ml-2 text-lg">Play video</span>
               </button>
               </div>
          </div>
     );
};

export default CyberDefenseSection;
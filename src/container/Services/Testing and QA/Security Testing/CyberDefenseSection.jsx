import Image from "next/image";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const CyberDefenseSection = () => {
  return (
    <WrapperContainer className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
        <Heading>
          Build adaptive, flexible, and scalable cyber defense solutions
        </Heading>
        <Paragraph>
          digiflex.ai provides businesses with cutting-edge security solutions
          that are adaptive, flexible, and designed to scale seamlessly. our
          ai-driven cybersecurity and incident response services empower
          organizations to assess, protect, and recover from potential cyber
          threats, ensuring resilience and compliance.
        </Paragraph>
        <Paragraph className="text-sm sm:text-base">
          with digiflex.ai's expertise, businesses can customize tools and
          operational models to meet unique challenges and regional
          requirements. our solutions are designed to streamline operations
          while adhering to regional mandates and{" "}
          <a
            href="#"
            className="text-blue-700 font-semibold hover:text-blue-800 underline"
          >
            cyber regulations.
          </a>
        </Paragraph>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src="/assets/TechnicalPeople.jpeg"
          width={500}
          height={300}
          alt="Cyber defense dashboard"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
          priority={false}
        />
      </div>
    </WrapperContainer>
  );
};

export default CyberDefenseSection;

import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const features = [
  {
    title: "Cost Efficiency",
  },
  {
    title: "Enhanced Operational Performance",
  },
  {
    title: "Boosted Productivity",
  },
  {
    title: "Greater Transparency & Control",
  },
];

function OptimizationBenefits() {
  return (
    <>
      <WrapperContainer>
        <Heading>
          <h1>Key Benefits of Cloud Optimization</h1>
        </Heading>
        <div className="flex flex-wrap justify-center items-center mt-[40px]">
          <div className="flex flex-wrap gap-10 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center bg-blue-500 text-white rounded-full text-center font-semibold transition-transform duration-300 hover:translate-y-4">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {feature.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
      <WrapperContainer>
        <Heading>Importance of Cloud Optimization</Heading>
        <Paragraph>
          Cloud optimization is essential for businesses aiming to maximize the value of their cloud investments. By fine-tuning cost, performance, and scalability, organizations can prevent unnecessary expenses and ensure efficient resource utilization. Optimization strategies like rightsizing, autoscaling, and load balancing help align cloud resources with actual usage, preventing over-provisioning while maintaining peak performance.
        </Paragraph>
        <Paragraph>
          Regular auditing and resource management reduce cloud sprawl by eliminating idle or redundant resources, improving efficiency. Additionally, optimizing cloud environments enhances security and compliance, reducing vulnerabilities and ensuring adherence to industry standards. Sustainable cloud management practices also contribute to energy efficiency, supporting environmentally responsible computing.
        </Paragraph>
        <Paragraph>
          Leveraging cost-saving techniques such as reserved instances, spot instances, and efficient data transfer methods enables businesses to cut operational expenses. Ultimately, cloud optimization empowers organizations to remain agile, competitive, and innovative, allowing them to focus on growth and delivering high-quality services while maintaining cost efficiency.
        </Paragraph>
      </WrapperContainer>
    </>
  );
}

export default OptimizationBenefits;
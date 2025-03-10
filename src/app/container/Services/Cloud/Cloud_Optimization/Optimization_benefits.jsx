import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

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
        <div className="bg-gray-100 py-12">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <Heading> Key Benefits of Cloud Optimization</Heading>
            <Subheading>
              Unlock the full potential of your cloud investments.
            </Subheading>
          </div>

          {/* Grid Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon Placeholder (Replace with an actual icon if needed) */}
                <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                  {index + 1}
                </div>

                {/* Feature Title */}
                <h2 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>

      <WrapperContainer>
        <Heading>Importance of Cloud Optimization</Heading>
        <Paragraph className="mt-10">
          Cloud optimization is essential for businesses aiming to maximize the
          value of their cloud investments. By fine-tuning cost, performance,
          and scalability, organizations can prevent unnecessary expenses and
          ensure efficient resource utilization. Optimization strategies like
          rightsizing, autoscaling, and load balancing help align cloud
          resources with actual usage, preventing over-provisioning while
          maintaining peak performance.
        </Paragraph>
        <Paragraph>
          Regular auditing and resource management reduce cloud sprawl by
          eliminating idle or redundant resources, improving efficiency.
          Additionally, optimizing cloud environments enhances security and
          compliance, reducing vulnerabilities and ensuring adherence to
          industry standards. Sustainable cloud management practices also
          contribute to energy efficiency, supporting environmentally
          responsible computing.
        </Paragraph>
        <Paragraph>
          Leveraging cost-saving techniques such as reserved instances, spot
          instances, and efficient data transfer methods enables businesses to
          cut operational expenses. Ultimately, cloud optimization empowers
          organizations to remain agile, competitive, and innovative, allowing
          them to focus on growth and delivering high-quality services while
          maintaining cost efficiency.
        </Paragraph>
      </WrapperContainer>
    </>
  );
}

export default OptimizationBenefits;

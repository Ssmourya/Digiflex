import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Fontheading from "../../../../Layout/Fontheading";

const steps = [
  {
    title: "Step 1: Assess & Plan",
    description:
      "Identify applications and workloads suitable for migration. Evaluate dependencies, performance bottlenecks, and security risks. Choose a cloud provider (AWS, Azure, Google Cloud, etc.).",
  },
  {
    title: "Step 2: Choose a Migration Strategy",
    description:
      "Decide between Rehosting, Refactoring, or Replatforming based on business goals. Plan data migration using tools like AWS DMS or Azure Migrate.",
  },
  {
    title: "Step 3: Execute Migration",
    description:
      "Migrate in phases to avoid downtime. Use containerization (Docker, Kubernetes) for flexibility. Test performance and security after migration.",
  },
  {
    title: "Step 4: Optimize & Monitor",
    description:
      "Fine-tune cloud resources to optimize cost & performance. Implement cloud monitoring tools like AWS CloudWatch, Azure Monitor, or Google Cloud Operations Suite. Set up automatic scaling and backups.",
  },
];

function MigrationSteps() {
  return (
    <WrapperContainer>
    <div>  
    <Heading>
      <h1>Cloud Migration Steps</h1>
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-lg transition ease-in-out transform hover:bg-blue-600 duration-400 hover:scale-105"
          >
            <Fontheading>
            <h2 className=" mb-2 transition duration-400 ease-in-out group-hover:text-white">
              {step.title}
            </h2>
              </Fontheading>
            <p className="text-gray-700 transition duration-400 ease-in-out  group-hover:text-white">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
}

export default MigrationSteps;

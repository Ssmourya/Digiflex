import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading'
import Paragraph from '../../../../Layout/Paragraph'
import Fontheading from '../../../../Layout/Fontheading';
import Subheading from '../../../../Layout/Subheading';

const advantages = [
  {
    title: "Lift-and-Shift (Rehosting)",
    description: "Applications and data are moved from one cloud to another with minimal or no modification.",
    Pros: "Quick migration, minimal downtime.",
    Cons: "May not fully leverage the new cloud's native features."
  },
  {
    title: "Replatforming",
    description: "Some optimizations are made to adapt to the new cloud environment, such as using managed services.",
    Pros: "Improved performance and cost efficiency.",
    Cons: "Requires moderate changes and testing."
  },
  {
    title: "Refactoring (Re-architecting)",
    description: "The application is redesigned to be cloud-native for the new cloud provider.",
    Pros: "Better scalability, performance, and cost savings.",
    Cons: "Time-consuming and complex."
  },
  {
    title: "Multi-Cloud Deployment",
    description: "Workloads are split across multiple cloud providers.",
    Pros: "Reduces dependency on a single provider, enhances resilience.",
    Cons: "Increases complexity in management and security."
  },
  {
    title: "Cloud-to-Cloud Data Migration",
    description: "Data is migrated using direct transfers, batch processing, or streaming services.",
    Pros: "Ensures business continuity, often automated.",
    Cons: "Data consistency and security challenges."
  },
  {
    title: "Hybrid Cloud Migration",
    description: "Workloads are migrated partially while maintaining some components in the existing cloud or on-premises.",
    Pros: "Balances performance, security, and compliance.",
    Cons: "Can introduce network latency and complexity."
  },
  {
    title: "Containerization & Kubernetes",
    description: "Applications are containerized (e.g., using Docker) and orchestrated with Kubernetes for portability.",
    Pros: "Easy deployment across clouds, reduces dependency on cloud-specific services.",
    Cons: "Requires containerization expertise."
  },
  {
    title: "API-Based Migration",
    description: "Applications are redesigned to interact via APIs, allowing services to move between clouds.",
    Pros: "Enhances modularity and flexibility.",
    Cons: "Requires significant development effort."
  }
];


function Intercloud_approaches () {
  return (
<>
    <WrapperContainer>
        <Heading>
            Approaches for Intercloud Migration
        </Heading>
        <Subheading className='text-center'>
          Intercloud migration transfers applications, data, or workloads between cloud providers, driven by cost, performance, compliance, or vendor flexibility, using various strategic approaches for seamless transition.
          </Subheading>
        <div className='mb-10'>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                 <Fontheading>
                    {item.title}
                    </Fontheading>
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        
      </div>
    </WrapperContainer>
</>
  )
}

export default Intercloud_approaches 
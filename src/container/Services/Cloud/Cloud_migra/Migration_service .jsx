import React from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Migrationsaas from '../../../../assets/MigrationSaas.jpg'
import MigrationPass from '../../../../assets/MigrationPaas.avif'
import MigrationIaas from '../../../../assets/MigrationIaas.avif'

const advantages = [
  {
    title: "Infrastructure as a Service (IaaS)",
    points: [
      "Provides virtualized computing resources (servers, storage, networking).",
      "Example: Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine.",
    ],
    image: MigrationIaas,
  },
  {
    title: "Platform as a Service (PaaS)",
    points: [
      "Multi-layered encryption, DDoS protection, and threat monitoring.",
      "Complies with GDPR, HIPAA, ISO, and other global standards.",
    ],
    image: MigrationPass,
  },
  {
    title: "Software as a Service (SaaS)",
    points: [
      "99.99% uptime with multiple data centers worldwide.",
      "Disaster recovery and automatic backups ensure data safety.",
    ],
    image: Migrationsaas,
  },
];

function Migration_service () {
  return (
    <>
       <WrapperContainer>
        <Heading>
          <h1>Cloud Service Models for Migration</h1>
        </Heading>
        <div className="mt-5 mb-10">

      <div className="">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 px-6">
              <h2 className="text-3xl font-bold mb-4">{advantage.title}</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                {advantage.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-[350px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
       </WrapperContainer>
    </>
  )
}

export default Migration_service 
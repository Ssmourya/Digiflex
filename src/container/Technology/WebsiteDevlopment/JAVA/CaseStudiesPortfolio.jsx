import React from 'react';
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from '../../../../Layout/Paragraph';

export default function CaseStudiesPortfolio() {
  const projects = [
    {
      title: "Enterprise Resource Planning (ERP) System",
      description:
        "A robust Java-based ERP solution designed to streamline business operations. Features include inventory management, HR modules, and financial reporting, enabling enterprises to enhance productivity and efficiency.",
      image: "https://i.pinimg.com/736x/68/04/07/68040730acc6bef528ff58f2dd755ef5.jpg",
      liveLink: "https://example.com/erp",
      github: "https://github.com/username/erp-system",
      testimonial:
        "This ERP system helped us centralize our business operations, leading to improved efficiency and cost savings.",
    },
    {
      title: "Banking & Financial Software",
      description:
        "A secure Java application for banking institutions, offering transaction processing, fraud detection, and risk management. Built with Spring Boot and Hibernate, ensuring high performance and scalability.",
      image: "https://i.pinimg.com/originals/74/fe/58/74fe58b6918fa081662612578de66dc1.gif",
      liveLink: "https://example.com/banking",
      github: "https://github.com/username/banking-software",
      testimonial:
        "The software significantly improved our transaction speed and security, making financial operations seamless.",
    },
    {
      title: "Healthcare Management System",
      description:
        "A comprehensive healthcare management platform developed in Java. It includes patient records, appointment scheduling, and real-time diagnostics to enhance hospital efficiency.",
      image: "https://i.pinimg.com/originals/05/cd/9a/05cd9a0bb4c72e5ba98ece031987955d.gif",
      liveLink: "https://example.com/healthcare",
      github: "https://github.com/username/healthcare-system",
      testimonial:
        "This system transformed our patient care workflow, making medical records and appointment scheduling effortless.",
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading>
              Case Studies & Portfolio
            </Heading>
            <Paragraph>
              Explore our Java development projects that highlight our expertise in building secure, scalable, and high-performance applications. Powered by <span className="font-bold text-blue-600">Digiflex.ai</span>.
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white text-blue-600 rounded-2xl shadow-lg overflow-hidden transition transform duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Subheading className="text-xl font-bold mb-2">{project.title}</Subheading>
                  <Paragraph className="text-gray-700 mb-4">{project.description}</Paragraph>
                  <Paragraph>
                    "{project.testimonial}"
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

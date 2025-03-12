import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";

import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import Faq from "@/components/Faq";
import { Mernfaqs } from "@/container/Services/Cloud/Faqdata";

export default function CaseStudiesPortfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully functional online marketplace built with the MERN stack. This platform features secure payments, product management, and order tracking, enabling businesses to expand their digital footprint.",
      image:
        "https://i.pinimg.com/originals/25/03/58/2503584f5a5e89306b430ff45db66241.gif",
      liveLink: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce-platform",
      testimonial:
        "This platform revolutionized our online sales process and boosted revenue significantly.",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "An interactive dashboard providing real-time insights and data visualization for enterprise clients. Developed with React and Node.js, it empowers businesses to make quick, data-driven decisions.",
      image:
        "https://i.pinimg.com/originals/e8/17/30/e817307c30b7db4d63f3e88df4411c8f.gif",
      liveLink: "https://example.com/analytics",
      github: "https://github.com/username/analytics-dashboard",
      testimonial:
        "The dashboard enabled us to monitor key metrics in real-time, greatly improving our operational efficiency.",
    },
    {
      title: "Social Media Application",
      description:
        "A feature-rich social media app designed to facilitate seamless communication, content sharing, and community building. Integrated with robust security features, it ensures user data is protected at all times.",
      image:
        "https://i.pinimg.com/originals/05/cd/9a/05cd9a0bb4c72e5ba98ece031987955d.gif",
      liveLink: "https://example.com/social-media",
      github: "https://github.com/username/social-media-app",
      testimonial:
        "Our users love the app for its intuitive design and robust performance.",
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading>Case Studies & Portfolio</Heading>
            <p className="text-gray-600">
              Explore our selected projects that showcase the power and
              versatility of the MERN stack. Each project is a testament to
              Quest Digiflex's commitment to quality and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform duration-300 hover:scale-105"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  priority={false}
                />
                <div className="p-6">
                  <Subheading className="text-xl text-blue-600 font-bold mb-2">
                    {project.title}
                  </Subheading>
                  <Paragraph className="text-gray-700 mb-4">
                    {project.description}
                  </Paragraph>

                  <Paragraph>"{project.testimonial}"</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq faqs={Mernfaqs} />
    </>
  );
}

import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragrph from "@/Layout/Paragraph";
export default function Website5() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <Heading className="text-2xl md:text-3xl font-bold text-center mb-8">
        Professional Website Development Services - Elevate Your Online Presence
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Image showcasing website development */}
        <div className="p-6 border rounded-lg flex flex-col items-center">
          <Image
            src="/assets/bg9.png"
            alt="Website Development Services"
            className="w-full h-auto rounded-md"
            width={100}
            height={100}
            priority={false}
          />
          <Paragrph>
            At Digiflex.ai, we specialize in creating high-performance websites
            tailored to your business needs. Whether you need a sleek corporate
            website, a feature-rich e-commerce platform, or a custom web
            application, our expert developers ensure seamless user experiences
            and cutting-edge design.
          </Paragrph>
        </div>

        {/* Right side - Services Information */}
        <div className="p-6 border rounded-lg">
          <Heading className="text-xl font-bold mb-4 text-center md:text-left">
            Our Website Development Services
          </Heading>

          <div className="space-y-4">
            {[
              {
                title: "Informational Website",
                description:
                  "Perfect for businesses or individuals looking to share information and establish credibility online. Includes up to 5 pages with responsive design.",
              },
              {
                title: "Business Website",
                description:
                  "Ideal for small and medium enterprises. This package includes up to 10 pages, optimized for conversions, lead generation, and mobile responsiveness.",
              },

              {
                title: "Website Maintenance & Support",
                description:
                  "Ongoing website maintenance, security updates, and performance optimization to ensure your site runs smoothly.",
              },
              {
                title: "SEO & Performance Optimization",
                description:
                  "Enhance your website’s visibility with SEO-optimized content, speed optimization, and technical enhancements.",
              },
            ].map((service, index) => (
              <div key={index} className="space-y-2">
                <Subheading>{service.title}</Subheading>
                <Paragrph>{service.description}</Paragrph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

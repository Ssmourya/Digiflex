import Image from "next/image";
import React from "react";
import { ArrowUp, PhoneCall } from "lucide-react";
import Saas5 from "./Saas5";
import Heading from "@/Layout/Heading";

const Saas4 = () => {
  const sectors = [
    {
      title: "Automotive",
      image:
        "https://i.pinimg.com/736x/b4/6c/1d/b46c1dae12af3e2c80ceca497a0c8916.jpg",
    },
    {
      title: "Medical & Healthcare",
      image:
        "https://i.pinimg.com/736x/55/d0/1c/55d01c063eeec4b47f6aa6c6fcd7bf74.jpg",
    },
    {
      title: "Finance",
      image:
        "https://i.pinimg.com/736x/9d/5e/fe/9d5efed02a7b8acf4b5b06ecc7be530b.jpg",
    },
    {
      title: "Retail",
      image:
        "https://i.pinimg.com/736x/9a/b1/af/9ab1afe4bc5fd677d97487dc68cbaad8.jpg",
    },
    {
      title: "eCommerce",
      image:
        "https://i.pinimg.com/736x/34/c6/9f/34c69fdaaea5f6356590d60d9d47499f.jpg",
    },
    {
      title: "QSR",
      image:
        "https://i.pinimg.com/736x/8a/d6/41/8ad6413636a93603f4010578802a7ccb.jpg",
    },
    {
      title: "Food and Beverage",
      image:
        "https://i.pinimg.com/736x/e9/5e/e8/e95ee83126fff42b4a11be850669bc79.jpg",
    },
    {
      title: "Consumer Durable",
      image:
        "https://i.pinimg.com/736x/e8/19/f0/e819f07b829949a8634e1131aa362e23.jpg",
    },
  ];

  return (
    <div className="bg-navy-900 w-full min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Heading>Industries We Serve with SaaS Solutions</Heading>

          <p className="text-gray-700 mt-2">
            Empowering diverse sectors with innovative SaaS applications
            tailored to their unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={sector.image}
                alt={sector.title}
                width={736} // Pinterest image width based on URL
              height={736} // Assuming square aspect ratio (adjust if different)
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg font-light">
                    {sector.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Saas5 />
    </div>
  );
};

export default Saas4;

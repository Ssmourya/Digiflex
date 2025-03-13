import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";

const Saas5 = () => {
  const insights = [
    {
      title: "Revolutionizing SaaS with AI: Trends and Innovations",
      category: "AI & SaaS",
      image:
        "https://i.pinimg.com/736x/4a/55/4d/4a554d5c076fa38204fa413e127b0584.jpg",
    },
    {
      title: "How Cloud Computing is Reshaping SaaS Platforms",
      category: "Cloud & SaaS",
      image:
        "https://i.pinimg.com/736x/0e/0f/8d/0e0f8d70105d9e274b6ddee24dd180d1.jpg",
    },
    {
      title: "Scaling SaaS Applications for Global Enterprises",
      category: "Enterprise SaaS",
      image:
        "https://i.pinimg.com/736x/95/e1/3d/95e13df0b24a78549dfd3897cfd9e6e4.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <Heading className="text-4xl font-bold mb-4">
          Empowering Businesses with SaaS Innovation
        </Heading>
        <Subheading className="text-xl text-gray-600">
          Explore the Future of SaaS Development
        </Subheading>
      </div>

      {/* Insights Section */}
      <div className="mb-12">
        <Heading className="text-3xl font-bold mb-2">Industry Insights</Heading>
        <Subheading className="text-xl text-gray-600 mb-8">
          Stay Ahead with SaaS Trends and Innovations
        </Subheading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={insight.image}
                alt={insight.title}
                width={736} // Pinterest image width based on URL
              height={736} // Assuming square aspect ratio (adjust if different)
                className="w-full h-48 object-cover"
                priority={false}
              />
              <div className="p-4">
                <div className="text-sm text-blue-600 mb-2">
                  {insight.category}
                </div>
                <Subheading className="text-lg font-medium">
                  {insight.title}
                </Subheading>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saas5;

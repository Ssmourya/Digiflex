"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/libs/utlis";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const values = [
  {
    title: "#OneTeam",
    description:
      "More than just colleagues; we see ourselves as an extension of your team, always present, reliable and committed. What we say is what we deliver.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Trust & Community",
  },
  {
    title: "Always innovating...",
    description:
      "We're driven by an unwavering passion for innovation, pushing boundaries with our team of builders and visionaries. This commitment is a promise to our clients, ensuring we're always at the forefront, delivering cutting-edge solutions that redefine what's possible in software.",
    image:
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Passion",
  },
  {
    title: "Focus on what matters",
    description:
      "Every line of code, every feature, and every interface is meticulously designed to embody excellence without complexity, ensuring our users experience the pinnacle of quality and simplicity in every interaction with our software.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Quality & Simplicity",
  },
  {
    title: "Our people matter",
    description:
      "We hold a profound belief that people are our business, and we recognize the importance of taking care of them. We strive to create a workplace where individuals can thrive both personally and professionally.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Employee Wellness",
  },
];

const categories = [
  "Trust & Community",
  "Passion",
  "Quality & Simplicity",
  "Employee Wellness",
];

export default function OurValues() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden">
      <WrapperContainer>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Our <span className="text-blue-700">Values</span>
        </h1>
        <Paragraph>
          Rooted in trust, driven by innovation, and united by purpose.
        </Paragraph>
        <div className="relative min-h-[300px] flex items-center p-8 md:p-10">
          {/* Navigation Dots */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-blue-600 scale-150"
                    : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Title */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {values[currentIndex].title}
            </div>

            {/* Image */}
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src={values[currentIndex].image || "/placeholder.svg"}
                alt={values[currentIndex].title}
                className="object-cover w-full h-auto"
                priority={false}/>
            </div>

            {/* Description */}
            <div className="text-lg text-gray-600 leading-relaxed">
              {values[currentIndex].description}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex justify-center items-center gap-6 p-4 border-t border-gray-100">
          {categories.map((category, index) => (
            <a
              key={category}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "text-sm cursor-pointer transition-all duration-300",
                currentIndex === index
                  ? "text-blue-600 font-medium"
                  : "text-gray-500 hover:text-blue-600"
              )}
            >
              {category}
            </a>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
}

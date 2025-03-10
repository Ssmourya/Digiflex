'use client'

import React from "react";
import  InfiniteMovingCards  from "./ui/infinite-moving-cards";
import WrapperContainer from '../Layout/WrapperContainer';


const testimonials = [
  {
    quote: "Digiflex.ai transformed our business operations with their cutting-edge AI solutions. The results have been nothing short of extraordinary.",
    name: "Sarah Johnson",
    title: "CTO, TechCorp International",
  },
  {
    quote: "The team's expertise in AI implementation helped us achieve a 40% increase in operational efficiency. Their support has been invaluable.",
    name: "Michael Chen",
    title: "Operations Director, Global Innovations",
  },
  {
    quote: "Working with Digiflex.ai was a game-changer for our digital transformation journey. Their solutions are innovative and future-proof.",
    name: "Emma Rodriguez",
    title: "Digital Strategy Head, Future Systems",
  },
  {
    quote: "The AI solutions provided by Digiflex.ai have revolutionized how we handle data analytics. Exceptional service and remarkable results.",
    name: "David Kim",
    title: "Analytics Manager, DataTech Solutions",
  },
  {
    quote: "Outstanding expertise in AI implementation. Digiflex.ai delivered beyond our expectations and continues to provide excellent support.",
    name: "Lisa Thompson",
    title: "Innovation Lead, Smart Industries",
  },
];

export function ReviewsSection() {
    return (
      <section id="reviews-section" className="bg-gradient-to-b  from-blue-50 to-blue-200 pb-10">
        <WrapperContainer>
          <div className="text-center ">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover how we're helping businesses transform with AI-powered solutions
            </p>
          </div>
          
          <div className="relative">
            
            {/* Reviews carousel */}
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
      </WrapperContainer>
      </section>
    );
  }
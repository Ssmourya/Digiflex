import React, { useState } from "react";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  const plans = [
    {
      name: "STARTER",
      icon: "◇",
      title: "Begin your game development journey with Digiflex.",
      price: 0,
      features: [
        "Access to Digiflex's game engine",
        "Basic publishing on Android & Desktop",
        "Community support and learning resources",
        "Access to free game assets",
      ],
      buttonText: "Get Started",
      buttonVariant: "black",
    },
    {
      name: "PROFESSIONAL",
      icon: "◆",
      title: "Unlock advanced features to create and launch games effortlessly.",
      price: 19.99,
      features: [
        "Full publishing support on Android, iOS & Web",
        "Cloud storage for up to 50 game projects",
        "Multiplayer game hosting with unlimited lobbies",
        "Advanced analytics and player insights",
        "Exclusive access to Digiflex's learning portal",
        "100 monthly credits for asset purchases",
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "primary",
    },
    {
      name: "BUSINESS",
      icon: "⬧",
      iconColor: "text-yellow-400",
      title: "Scale your game development with powerful tools and marketing support.",
      price: 39.99,
      features: [
        "Publish games on all major platforms, including iOS",
        "Priority support with dedicated Discord channel",
        "Unlimited leaderboards and player feedback system",
        "Advanced monetization features",
        "300 credits per month for promotions and asset purchases",
        "Exclusive monthly asset packs",
      ],
      buttonText: "Get Business Plan",
      buttonVariant: "primary",
    },
    {
      name: "ENTERPRISE",
      icon: "⬢",
      iconColor: "text-red-500",
      title: "Comprehensive solutions for professional game studios and enterprises.",
      price: 299,
      features: [
        "Personalized support with a dedicated account manager",
        "Collaborative tools for team-based game development",
        "Version control and unlimited cloud storage",
        "Pro marketplace access for premium assets",
        "Custom billing & invoicing solutions",
        "Advanced game security and anti-cheat features",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "primary",
    },
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex shadow">
            <button
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                ${billingCycle === "monthly" ? "bg-white shadow-md text-black" : "text-gray-600"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                ${billingCycle === "yearly" ? "bg-purple-600 text-white shadow-md" : "text-gray-600"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-xl p-6 flex flex-col transform hover:-translate-y-1 transition-all duration-200 hover:shadow-lg border border-gray-200 text-center"
            >
              <div className="flex flex-col items-center space-y-3">
                {/* Plan Icon & Name */}
                <span className={`text-3xl ${plan.iconColor || "text-gray-500"}`}>
                  {plan.icon}
                </span>
                <span className="text-sm font-semibold text-gray-500">{plan.name}</span>

                {/* Plan Title */}
                <Subheading className="text-lg font-bold">{plan.title}</Subheading>
              </div>

              {/* Features List */}
              <ul className="space-y-4 text-left mt-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & Button */}
              <div className="mt-auto pt-4">
                <span className="text-xl font-bold text-gray-900">
                  {plan.price === 0 ? "Free" : `$${plan.price}/mo`}
                </span>
                <button
                  className={`w-full py-2 px-3 mt-4 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      plan.buttonVariant === "black"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PricingPlans;

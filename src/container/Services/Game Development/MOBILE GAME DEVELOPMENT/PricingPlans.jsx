import React, { useState } from "react";
import { motion } from "framer-motion";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  const plans = [
    {
      name: "STARTER",
      icon: "◇",
      title: "Begin your game development journey.",
      monthlyPrice: 0,
      yearlyPrice: 0,
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
      title: "Unlock advanced features.",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
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
      title: "Scale your game development.",
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
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
      title: "Comprehensive solutions for studios.",
      monthlyPrice: 299,
      yearlyPrice: 2999,
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

  // Animation variants for the container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  // Animation for billing toggle buttons
  const buttonVariants = {
    active: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    inactive: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Calculate price based on billing cycle
  const getPrice = (plan) => {
    if (plan.monthlyPrice === 0) return "Free";
    
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
    const period = billingCycle === "monthly" ? "mo" : "yr";
    
    return `$${price}/${period}`;
  };

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-full inline-flex shadow">
            <motion.button
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                ${billingCycle === "monthly" ? "bg-white shadow-md text-black" : "text-gray-600"}`}
              onClick={() => setBillingCycle("monthly")}
              variants={buttonVariants}
              animate={billingCycle === "monthly" ? "active" : "inactive"}
            >
              Monthly
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                ${billingCycle === "yearly" ? "bg-purple-600 text-white shadow-md" : "text-gray-600"}`}
              onClick={() => setBillingCycle("yearly")}
              variants={buttonVariants}
              animate={billingCycle === "yearly" ? "active" : "inactive"}
            >
              Yearly
            </motion.button>
          </div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className="bg-white rounded-lg p-4 flex flex-col border border-gray-200 text-center"
              variants={cardVariants}
              whileHover={cardHover}
            >
              <div className="flex flex-col items-center space-y-2">
                {/* Plan Icon & Name */}
                <span className={`text-2xl ${plan.iconColor || "text-gray-500"}`}>
                  {plan.icon}
                </span>
                <span className="text-sm font-semibold text-gray-500">{plan.name}</span>

                {/* Plan Title */}
                <Subheading className="text-base font-bold">{plan.title}</Subheading>
              </div>

              {/* Features List */}
              <ul className="space-y-2 text-left mt-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & Button */}
              <div className="mt-auto pt-3">
                <span className="text-lg font-bold text-gray-900">
                  {getPrice(plan)}
                </span>
                {billingCycle === "yearly" && plan.monthlyPrice !== 0 && (
                  <div className="text-sm text-green-600 mt-1">
                    Save {Math.round((1 - (plan.yearlyPrice / (plan.monthlyPrice * 12))) * 100)}%
                  </div>
                )}
                <motion.button
                  className={`w-full py-1.5 px-3 mt-3 rounded text-xs font-medium transition-all duration-200
                    ${
                      plan.buttonVariant === "black"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </WrapperContainer>
  );
};

export default PricingPlans;
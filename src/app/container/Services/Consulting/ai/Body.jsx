"use client";

import React, { useState, useEffect } from "react";
import Introduction from "./Introduction";
import Services from "./Services";
import Technology from "./Technology";
import Process from "./Process";
import FAQ from "./FAQ";
import Industry from "./Industry";

function Body() {
  const [activeService, setActiveService] = useState("maturity");
  const [activeTech, setActiveTech] = useState("programming");
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = parseInt(
              entry.target.getAttribute("data-step") || "0"
            );
            setVisibleSteps((prev) => [...new Set([...prev, stepNumber])]);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    document.querySelectorAll("[data-step]").forEach((step) => {
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  // Services
  const services = {
    maturity: {
      title: "AI Maturity Analysis",
      description:
        "Evaluate your current AI capabilities and map out a strategic upgrade plan aligned with your business goals.",
      image:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    },
    strategy: {
      title: "AI Strategy & Implementation",
      description:
        "Design and deploy AI solutions tailored to your industry-specific needs for maximum efficiency and impact.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    analytics: {
      title: "Data Analytics",
      description:
        "Transform raw data into actionable intelligence to fuel smarter business decisions and future innovations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    },
    technology: {
      title: "AI Technology Consulting",
      description:
        "Leverage advanced AI frameworks and emerging technologies to build scalable, next-gen AI solutions.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    governance: {
      title: "AI Governance Assessment",
      description:
        "Ensure secure, ethical, and compliant AI deployments that support sustainable business growth.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
  };

  // Technology
  const technologies = {
    programming: {
      title: "Programming Languages",
      description:
        "We use modern programming languages optimized for AI and machine learning",
      logos: [
        {
          name: "Python",
          url: "https://www.python.org/static/community_logos/python-logo-generic.svg",
        },
        { name: "R", url: "https://www.r-project.org/logo/Rlogo.svg" },
        { name: "Julia", url: "https://julialang.org/assets/infra/logo.svg" },
      ],
    },
    libraries: {
      title: "Libraries",
      description:
        "Industry-standard libraries for efficient data processing and analysis",
      logos: [
        {
          name: "TensorFlow",
          url: "https://www.tensorflow.org/images/tf_logo_social.png",
        },
        {
          name: "PyTorch",
          url: "https://pytorch.org/assets/images/pytorch-logo.png",
        },
        {
          name: "Scikit-learn",
          url: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
        },
      ],
    },
    frameworks: {
      title: "ML Frameworks",
      description:
        "Cutting-edge frameworks for building and deploying AI models",
      logos: [
        { name: "Keras", url: "https://keras.io/img/logo.png" },
        {
          name: "TensorFlow",
          url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
        },
        {
          name: "Hugging Face",
          url: "https://huggingface.co/front/assets/huggingface_logo.svg",
        },
      ],
    },
    cloud: {
      title: "Cloud Platforms",
      description: "Enterprise-grade cloud infrastructure for AI deployment",
      logos: [
        {
          name: "AWS",
          url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        },
        {
          name: "Google Cloud",
          url: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
        },
        { name: "Azure", url: "https://azure.microsoft.com/svghandler/azure" },
      ],
    },
    visualization: {
      title: "Data Visualization Tools",
      description: "Advanced tools for creating insightful data visualizations",
      logos: [
        {
          name: "Tableau",
          url: "https://www.tableau.com/sites/default/files/2022-04/TableauLogo_RGB.png",
        },
        {
          name: "Power BI",
          url: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png",
        },
        { name: "D3.js", url: "https://d3js.org/logo.svg" },
      ],
    },
  };

  const steps = [
    {
      number: 1,
      title: "AI Opportunity Identification",
      description:
        "At Digiflex.ai, we analyze your current capabilities and align them with your business objectives to uncover AI-driven opportunities.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      number: 2,
      title: "Process Roadmapping",
      description:
        "After thorough evaluation, we create a customized implementation plan, ensuring the AI solution aligns perfectly with your business needs.",
      gradient: "from-blue-400 to-blue-700",
    },
    {
      number: 3,
      title: "Implement AI Strategies",
      description:
        "We develop and deploy the AI solution for client testing, gathering feedback to refine and optimize the model for maximum efficiency.",
      gradient: "from-blue-700 to-blue-400",
    },
    {
      number: 4,
      title: "Deploy The Final Solution",
      description:
        "Through continuous testing and refinement, we perfect the AI solution before final deployment, ensuring seamless integration and optimal performance.",
      gradient: "from-blue-400 to-blue-800",
    },
    {
      number: 5,
      title: "Post-Deployment Maintenance",
      description:
        "We provide ongoing support, updates, and maintenance to keep your AI solution secure, relevant, and future-proof over time.",
      gradient: "from-blue-300 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Introduction />
      <Services
        services={services}
        activeService={activeService}
        setActiveService={setActiveService}
      />
      <Technology
        technologies={technologies}
        activeTech={activeTech}
        setActiveTech={setActiveTech}
      />
      <Process steps={steps} visibleSteps={visibleSteps} />
      <Industry/>
      <FAQ />
    </div>
  );
}

export default Body;

"use client";

import React, { useState, useEffect } from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import Heading from '@/Layout/Heading';

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('vr');
  const [activeFeature, setActiveFeature] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Handle initial mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Feature data organized by categories
  const featureCategories = {
    vr: {
      title: "VR Development Tools",
      description: "Essential tools for creating immersive VR experiences",
      items: [
        {
          id: "unity",
          title: "Unity VR",
          description: "Build cross-platform VR applications with Unity.",
          icon: "grid-4",
          benefits: ["Rapid prototyping", "Large asset store", "Multi-platform support"]
        },
        {
          id: "unreal",
          title: "Unreal Engine",
          description: "Create photorealistic VR experiences.",
          icon: "code",
          benefits: ["High-fidelity graphics", "Blueprint system", "Real-time rendering"]
        },
        {
          id: "vrchat",
          title: "VRChat SDK",
          description: "Develop social VR worlds and avatars.",
          icon: "database",
          benefits: ["Social features", "Avatar systems", "World creation"]
        },
        {
          id: "openxr",
          title: "OpenXR",
          description: "Standard API for VR/AR development.",
          icon: "puzzle",
          benefits: ["Cross-platform", "Future-proof", "Industry standard"]
        }
      ]
    },
    xr: {
      title: "XR Development Tools",
      description: "Tools for mixed reality and cross-reality applications",
      items: [
        {
          id: "hololens",
          title: "HoloLens SDK",
          description: "Build mixed reality apps for HoloLens.",
          icon: "layout",
          benefits: ["Spatial mapping", "Gesture recognition", "3D visualization"]
        },
        {
          id: "arkit",
          title: "ARKit",
          description: "Create AR experiences for iOS devices.",
          icon: "squares-four",
          benefits: ["Scene understanding", "Motion tracking", "Light estimation"]
        },
        {
          id: "arcore",
          title: "ARCore",
          description: "Develop AR apps for Android platforms.",
          icon: "paint-brush",
          benefits: ["Environmental understanding", "Motion tracking", "Light estimation"]
        },
        {
          id: "vuforia",
          title: "Vuforia",
          description: "Cross-platform AR development toolkit.",
          icon: "device-mobile",
          benefits: ["Image recognition", "Object tracking", "Cloud recognition"]
        }
      ]
    },
    simulation: {
      title: "Simulation Tools",
      description: "Advanced tools for realistic simulations",
      items: [
        {
          id: "physx",
          title: "NVIDIA PhysX",
          description: "Real-time physics simulation engine.",
          icon: "lightning",
          benefits: ["Rigid body dynamics", "Cloth simulation", "Particle systems"]
        },
        {
          id: "havok",
          title: "Havok Physics",
          description: "Professional game physics engine.",
          icon: "plug",
          benefits: ["Character physics", "Vehicle dynamics", "Destruction"]
        },
        {
          id: "tensorflow",
          title: "TensorFlow",
          description: "Machine learning for VR/XR applications.",
          icon: "terminal",
          benefits: ["Neural networks", "Deep learning", "AI integration"]
        },
        {
          id: "cloudxr",
          title: "CloudXR",
          description: "Cloud streaming for XR content.",
          icon: "check-circle",
          benefits: ["Low latency", "High quality", "Scalability"]
        }
      ]
    }
  };

  // Get current category and features
  const currentCategory = featureCategories[activeCategory];

  return (
    <WrapperContainer>
      <div className={`p-4 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <Heading>Digiflex VR/XR Development Tools</Heading>
          <Paragraph className='text-center'>Digiflex provides advanced tools and technologies for creating immersive experiences</Paragraph>
        </div>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-8 border-b">
          {Object.keys(featureCategories).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 font-medium transition-all ${
                activeCategory === category 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveFeature(null);
              }}
            >
              {featureCategories[category].title}
            </button>
          ))}
        </div>
        
        {/* Category description */}
        <div className="text-center mb-8">
          <Subheading>{currentCategory.title}</Subheading>
          <Paragraph>{currentCategory.description}</Paragraph>
        </div>
        
        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentCategory.items.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer transform hover:shadow-lg ${
                activeFeature === feature.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
            >
              <div className="p-6">
                <div className="mb-4 text-blue-600">
                  {/* Icon would go here */}
                </div>
                <Subheading>{feature.title}</Subheading>
                <Paragraph>{feature.description}</Paragraph>
                
                {activeFeature === feature.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Paragraph>Key Benefits:</Paragraph>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4 text-blue-600 text-sm font-medium">
                  {activeFeature === feature.id ? 'Click to collapse' : 'Click for details'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Tools;

import React from "react";
import Heading from "../../../../Layout/Heading";

const SmartFeatures = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-6">
        {/* Left Section */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="relative">
            <div className="w-full h-full flex items-center justify-center">
              {/* Replace with your larger image or 3D character */}
              <img
                src="https://i.pinimg.com/736x/97/4f/0f/974f0f681a608d5e60806a8473a3756e.jpg"
                alt="3D Character"
                className="max-w-full max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">

          <Heading>
          
            Smart Android App Features We Offer
         
          </Heading>
          <p className="text-gray-700 text-lg mb-8">
            We offer cutting-edge features tailored to enhance user engagement
            and business growth.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="text-[#1A2E6F] font-bold text-2xl mr-4">💡</span>
              <p className="text-lg text-gray-800">
                <strong>AI Chatbots:</strong> Enhance customer engagement with
                smart assistants.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#1A2E6F] font-bold text-2xl mr-4">📍</span>
              <p className="text-lg text-gray-800">
                <strong>Location-Based Services:</strong> GPS tracking,
                geofencing, and mapping.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#1A2E6F] font-bold text-2xl mr-4">🔔</span>
              <p className="text-lg text-gray-800">
                <strong>Push Notifications & Analytics:</strong> Personalized
                user engagement.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#1A2E6F] font-bold text-2xl mr-4">🔑</span>
              <p className="text-lg text-gray-800">
                <strong>Biometric Authentication:</strong> Face unlock &
                fingerprint security.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#1A2E6F] font-bold text-2xl mr-4">📡</span>
              <p className="text-lg text-gray-800">
                <strong>IoT Connectivity:</strong> Smart home automation & device control.
              </p>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <button className="bg-[#1A2E6F] text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 text-lg">
              Get Started
            </button>
            <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200 text-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartFeatures;
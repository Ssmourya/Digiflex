import React from "react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer"

function Engagementsection() {

  return (
    <div className="flex">
    <WrapperContainer>
      {/* Title and Description */}
      <h1 className=" font-bold text-center text-5xl text-black">
        <span className="text-blue-700">Engagement</span> Model
      </h1>
      <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto text-left sm:text-center">
        As we guarantee the high-quality products and support transparency
        throughout the development journey, our clients are always an active
        part of it.
      </p>

      {/* Engagement Cards */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
        {/* Card 1 - Staff Augmentation */}
        <div
          className="relative w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="flip-left" // Apply AOS flip-left animation
        >
          <img
            src="https://www.techverx.com/wp-content/themes/nifty-child/assets/homepage-assets/images/augmented-team.jpg"
            alt="Staff Augmentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 backdrop-blur-md">
            <h2 className="text-white text-lg font-semibold opacity-75">
              Staff Augmentation
            </h2>
          </div>
        </div>

        {/* Card 2 - Fixed Price */}
        <div
          className="relative w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="flip-right" // Apply AOS flip-right animation
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661667061015-20973efdac23?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fixed Price"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 backdrop-blur-md">
            <h2 className="text-white text-lg font-semibold opacity-75">
              Fixed Price
            </h2>
          </div>
        </div>
        <div
          className="relative w-full sm:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden"
          data-aos="flip-right" // Apply AOS flip-right animation
        >
          <img
            src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fixed Price"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 backdrop-blur-md">
            <h2 className="text-white text-lg font-semibold opacity-75">
              Affordable rated
            </h2>
          </div>
        </div>
      </div>
    </WrapperContainer>
    </div>
  );
}

export default Engagementsection;

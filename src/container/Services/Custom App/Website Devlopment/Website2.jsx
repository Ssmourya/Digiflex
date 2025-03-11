import React from 'react';
import Heading from "@/Layout/Heading";
import Paragrph from "@/Layout/Paragraph"

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-md transition duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const mediaLogos = [
  {
    src: "https://i.pinimg.com/736x/d5/73/79/d573796017b6a78d56ff9899aff4e80f.jpg",
    alt: "Logo 1"
  },
  {
    src: "https://i.pinimg.com/736x/c5/13/c1/c513c10049d6a137226fe3ef2b695a53.jpg",
    alt: "Logo 2"
  },
  {
    src: "https://i.pinimg.com/736x/e2/ec/22/e2ec22d0c67a9d56a957e3539daf7c72.jpg",
    alt: "Logo 3"
  },
  {
    src: "https://i.pinimg.com/736x/5b/cd/32/5bcd329a477b76786777d0b183e37c77.jpg",
    alt: "Logo 4"
  }
];

const Website2 = () => {
  return (
    <div className="w-full bg-white py-14 sm:py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Featured In Section */}
        <div className="text-center mb-10">
          <Heading>Trusted By Leading Brands</Heading>
        </div>

        {/* Media Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-14">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="w-24 h-24 sm:w-32 sm:h-32 bg-white shadow-lg rounded-full flex items-center justify-center p-4">
              <img src={logo.src} alt={logo.alt} className="max-w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-gray-900 text-3xl sm:text-5xl font-bold leading-tight">
            Build Your Digital Success with <span className="text-blue-600">Digiflex.ai</span>
          </h1>
          <Paragrph>  We create stunning, high-performance websites tailored to your business needs. Elevate your online presence with our expert development solutions.
          </Paragrph>
          
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button>Start Your Project Today</Button>
        </div>
      </div>
    </div>
  );
};

export default Website2;

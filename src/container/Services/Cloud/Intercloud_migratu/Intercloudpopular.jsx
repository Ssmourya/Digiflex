import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

// Array of images
const images = [
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Google-Cloud-Logo.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/azure-cloud-logo.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/aws-cloud-logo.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/BMC_logo.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/intercloud_carbonite.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Intercloud_cloudEndure.jpg",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/intercloud_flexera.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/intercloud_ibm.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/intercloud_river.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/intercloud_turbon.png",
  "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Intercloud_vm.webp",
];

function Intercloudpopular() {
  return (
    <WrapperContainer>
      <Heading>Popular Tools for Intercloud Migration</Heading>

      <div className="pt-5 flex flex-col items-center space-y-10 w-full">
        {/* First Row - 4 images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {images.slice(0, 4).map((img, index) => (
            <div
              key={index}
              className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg bg-white p-2 flex items-center justify-center"
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                width={300} 
                height={160}
                className="w-full h-full object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>

        {/* Second Row - 3 images (Centered) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {images.slice(4, 7).map((img, index) => (
            <div
              key={index}
              className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg bg-white p-2 flex items-center justify-center"
            >
              <Image
                src={img}
                alt="img"
                className="w-full h-full object-contain"
                width={300} 
                height={160}
                priority={false}
              />
            </div>
          ))}
        </div>

        {/* Third Row - 4 images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {images.slice(7, 11).map((img, index) => (
            <div
              key={index}
              className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg bg-white p-2 flex items-center justify-center"
            >
              <Image
                src={img}
                alt="img"
                width={300} 
                height={160}
                className="w-full h-full object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Intercloudpopular;

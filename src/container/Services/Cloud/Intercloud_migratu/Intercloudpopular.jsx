import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

// Importing images
import bcm from '../../../../assets/BMC_logo.jpg';
import carbonite from '../../../../assets/intercloud_carbonite.png';
import clud from '../../../../assets/Intercloud_cloudEndure.jpg';
import flexera from '../../../../assets/intercloud_flexera.png';
import ibm from '../../../../assets/intercloud_ibm.png';
import river from '../../../../assets/intercloud_river.png';
import turbon from '../../../../assets/intercloud_turbon.png';
import vm from '../../../../assets/Intercloud_vm.webp';
import cloud from '../../../../assets/Google-Cloud-Logo.png';
import azore from '../../../../assets/azure-cloud-logo.png';
import AWS_logo from '../../../../assets/aws-cloud-logo.png';

// Array of images
const images = [
    cloud, azore, AWS_logo, bcm, 
    carbonite, clud, flexera, 
    ibm, river, turbon, vm
];

function Intercloudpopular() {
  return (
    <WrapperContainer>
      <Heading>
          Popular Tools for Intercloud Migration
      </Heading>

      <div className="pt-5 flex flex-col items-center space-y-10 w-full">
        {/* First Row - 4 images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {images.slice(0, 4).map((img, index) => (
            <div key={index} className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg bg-white p-2 flex items-center justify-center">
              <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Second Row - 3 images (Centered) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {images.slice(4, 7).map((img, index) => (
            <div key={index} className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg bg-white p-2 flex items-center justify-center">
              <img src={img} alt={`Image ${index + 5}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Third Row - 4 images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {images.slice(7, 11).map((img, index) => (
            <div key={index} className="w-32 h-32 sm:w-36 sm:h-36 overflow-hidden rounded-lg bg-white p-2 flex items-center justify-center">
              <img src={img} alt={`Image ${index + 8}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Intercloudpopular;

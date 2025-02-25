import React from 'react';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderPrevButton,
  SliderNextButton
} from '../../../components/ui/carousel';
import WrapperContainer from '../../../Layout/WrapperContainer'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    logo: 'https://vectorlogoseek.com/wp-content/uploads/2019/10/clutch-co-vector-logo.png',
    text: `"Our motorcycle brand finds that Digiflex produced very high caliber deliverables and a quality of work that exceeded our clients' initial expectations. The software development team maintained an impressively rapid pace to deliver results quickly. Every resource who contributed was remarkably skilled and well-informed."`,
    rating: '4.8(100 Reviews)',
  },
  {
    logo: 'https://cdn.brandfetch.io/id-ZLbwazd/w/1500/h/500/idvdyRGq3h.jpeg?c=1bx1742453776268id64Mup7acWZ9C46Hg&t=1718936218519',
    text: `"Digiflex developed a mobile app for iOS and Android platforms. The app was for a fishing startup and had atmospheric and environmental information for the users. This mobile application is also able to pinpoint the exact location of the species in the water and assist fishermen thanks to the geolocation implemented. It also features an in-app camera option to take pictures of the fishes."`,
    rating: '5.0(110 Reviews)',
  },
  {
    logo: 'https://vectorseek.com/wp-content/uploads/2023/09/Goodfirms-Logo-Vector.svg-.png?auto=format&fit=crop&q=80',
    text: `"Our motorcycle brand finds that Digiflex produced very high caliber deliverables and a quality of work that exceeded our clients' initial expectations. The software development team maintained an impressively rapid pace to deliver results quickly. Every resource who contributed was remarkably skilled and well-informed."`,
    rating: '4.8(100 Reviews)',
  },
];

function Recognition() {
  const OPTIONS = { 
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  };
  
  return (
    <div className="px-4 min-h">
        <WrapperContainer>
        <h2 className="text-center text-4xl md:text-5xl text-blue-700 font-bold mb-16">Our Recognition</h2>

        {/* Reviews Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel options={OPTIONS} isScale={true} className="overflow-visible">
            <SliderContainer>
              {reviews.map((review, index) => (
                <Slider key={index} className="sm:w-[75%] w-[95%] md:px-6 px-2">
                  <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 text-center min-h-[350px] flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                    <img src={review.logo} alt="Review Logo" className="mx-auto h-16 md:h-24 mb-4 object-contain" />
                    <p className="text-gray-900 text-sm md:text-base lg:text-lg">{review.text}</p>
                    <p className="font-bold text-blue-600 mt-4">⭐{review.rating}</p>
                  </div>
                </Slider>
              ))}
            </SliderContainer>
            
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between pointer-events-none px-2 md:px-6">
              <SliderPrevButton className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-blue-600 pointer-events-auto hover:bg-blue-50 transition-colors duration-300">
                <ChevronLeft className="w-6 h-6" />
              </SliderPrevButton>
              <SliderNextButton className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-blue-600 pointer-events-auto hover:bg-blue-50 transition-colors duration-300">
                <ChevronRight className="w-6 h-6" />
              </SliderNextButton>
            </div>
            
            <div className="flex justify-center py-6 mt-4">
              <SliderDotButton />
            </div>
          </Carousel>
        </div>
    </WrapperContainer>
      </div>
  );
}

export default Recognition;
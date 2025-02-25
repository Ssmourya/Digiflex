import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    logo: 'https://vectorlogoseek.com/wp-content/uploads/2019/10/clutch-co-vector-logo.png',
    text: `"Digiflex produced high-quality deliverables that exceeded expectations. The team worked rapidly and efficiently."`,
    rating: '4.8(100 Reviews)',
  },
  {
    logo: 'https://cdn.brandfetch.io/id-ZLbwazd/w/1500/h/500/idvdyRGq3h.jpeg',
    text: `"Their mobile app development expertise helped us create an app with geolocation and environmental tracking."`,
    rating: '5.0(110 Reviews)',
  },
  {
    logo: 'https://vectorseek.com/wp-content/uploads/2023/09/Goodfirms-Logo-Vector.svg-.png',
    text: `"Remarkably skilled team delivering rapid, top-quality results beyond expectations."`,
    rating: '4.9(120 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/b9/fe/95/b9fe95049deadbd7844724e67f829e1c.jpg',
    text: `"Exceptional development skills, delivering robust and scalable solutions with excellent UI/UX."`,
    rating: '5.0(150 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/07/91/2d/07912da3c4d18467d46041477426f0cc.jpg',
    text: `"Reliable and innovative software solutions that drive business success."`,
    rating: '4.7(95 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/74/3d/74/743d74ac1acadc5cc307c495bacc9b93.jpg',
    text: `"Digiflex stands out for its technical expertise and seamless project execution."`,
    rating: '4.9(130 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/85/90/ba/8590ba052d76fb25516fbb00a33d9611.jpg',
    text: `"A trustworthy team with a focus on cutting-edge technology and flawless implementation."`,
    rating: '5.0(160 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/50/9a/9e/509a9e7e8e063778cdd444d5b4b913f3.jpg',
    text: `"Their commitment to quality and innovation is evident in every project."`,
    rating: '4.8(105 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/a3/96/bb/a396bbb8abbcbdf28fa56f749c8363c2.jpg',
    text: `"Highly recommended for any software development needs. Professional and efficient team!"`,
    rating: '4.9(140 Reviews)',
  },
  {
    logo: 'https://i.pinimg.com/736x/8a/29/e2/8a29e29c9a4dc98e6faae1568012f729.jpg',
    text: `"A fantastic experience working with Digiflex. Their expertise is unmatched!"`,
    rating: '5.0(180 Reviews)',
  },
];

function Recognition() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handlePrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const visibleReviews = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      items.push({ ...reviews[index], index });
    }
    return items;
  };

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 text-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      {/* Animated particles */}
      <div className="stars"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-bold mb-12 relative">
          Our Recognition
          <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Carousel */}
            <div className="flex justify-center items-stretch gap-4 md:gap-6 px-12 overflow-hidden transition-all">
              {visibleReviews().map((review, idx) => (
                <div 
                  key={idx} 
                  className={`bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 w-full md:max-w-sm
                    ${hoveredIndex === idx ? 'transform scale-105 border-blue-500 shadow-blue-500/20' : 'transform scale-100'}
                    ${idx === 1 ? 'z-10' : 'z-0 opacity-80'}`}
                  onMouseEnter={() => {setHoveredIndex(idx); setIsAutoScrolling(false);}}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transform: `
                      scale(${idx === 1 ? 1.05 : 0.95}) 
                      translateY(${idx === 1 ? '0px' : idx === 0 ? '10px' : '10px'})
                    `
                  }}
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg transform -skew-y-3"></div>
                    <img 
                      src={review.logo} 
                      alt="Review Logo" 
                      className="relative mx-auto h-16 md:h-20 object-contain filter brightness-125 hover:brightness-150 transition-all duration-300" 
                    />
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 italic relative">
                    <span className="absolute -top-4 -left-2 text-5xl text-blue-500/20">"</span>
                    {review.text}
                    <span className="absolute -bottom-4 -right-2 text-5xl text-blue-500/20">"</span>
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-center text-yellow-400 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < parseInt(review.rating) ? 'fill-yellow-400' : 'fill-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      {review.rating}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoScrolling(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${idx === currentIndex ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Animated background stars */
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .stars:before, .stars:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
          background-image: 
            radial-gradient(white, rgba(255,255,255,0.05) 2px, transparent 2px),
            radial-gradient(white, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 550px 550px, 350px 350px;
          background-position: 0 0;
          animation: starsAnimation 100s linear infinite;
        }
        
        .stars:after {
          background-size: 250px 250px, 150px 150px;
          animation-delay: -5s;
          animation-duration: 80s;
          opacity: 0.4;
        }
        
        @keyframes starsAnimation {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  );
}

export default Recognition;
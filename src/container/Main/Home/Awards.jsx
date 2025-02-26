import React from 'react';
import { motion } from 'framer-motion';
import clutch from '../../../assets/clutch.png'
import goodfirms from '../../../assets/goodfirms.png'
import google from '../../../assets/google.png'
import mobapp from '../../../assets/mobapp.png'
import globalSpring from '../../../assets/globalSpring.png'
import manifest from '../../../assets/manifest.png'

function App() {
    const awards = [
        {
          id: 1,
          image: clutch,
          alt: "Clutch Award Badge",
          link: "https://clutch.co",
          sizeMultiplier: 2.0
        },
        {
          id: 2,
          image: goodfirms,
          alt: "Top Rated Badge",
          link: "https://www.goodfirms.co",
          sizeMultiplier: 0.9
        },
        {
          id: 3,
          image: "https://erawebstudio.com/wp-content/uploads/2022/04/upwork-badge.png",
          alt: "Upwork Top Rated Badge",
          link: "https://www.upwork.com",
          sizeMultiplier: 0.9
        },
        {
        id: 4,
        image: google,
        alt: "Upwork Top Rated Badge",
        link: "https://www.upwork.com",
        sizeMultiplier: 2.0
        },
        {
            id: 5,
            image: mobapp,
            alt: "Top Rated Badge",
            link: "https://www.goodfirms.co",
            sizeMultiplier: 1.0
          },
          {
            id: 6,
            image: "https://www.softwaresuggest.com/award_logo/customer-choice-winter-2025.png",
            alt: "Upwork Top Rated Badge",
            link: "https://www.upwork.com",
            sizeMultiplier: 1.1
          },
          {
            id: 7,
            image: globalSpring,
            alt: "Top Rated Badge",
            link: "https://www.goodfirms.co",
            sizeMultiplier: 1.0
          },
          {
            id: 8,
            image: manifest,
            alt: "Upwork Top Rated Badge",
            link: "https://www.upwork.com",
            sizeMultiplier: 1.0
          },
      ];

  const Star = ({ delay = 0, size = 2 }) => (
    <motion.div
      className="absolute"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: 0,
        rotate: 0,
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: 360,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <svg width={size * 16} height={size * 16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
          fill="currentColor"
          className="text-yellow-300"
        />
      </svg>
    </motion.div>
  );

  const Confetti = ({ count = 50 }) => (
    <>
      {[...Array(count)].map((_, i) => {
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 20;
        const randomDuration = 15 + Math.random() * 10;
        const randomColor = [
          "bg-blue-400",
          "bg-purple-400",
          "bg-pink-400",
          "bg-yellow-400",
          "bg-green-400"
        ][Math.floor(Math.random() * 5)];
        const size = Math.random() * 8 + 4;

        return (
          <motion.div
            key={i}
            className={`absolute h-2 w-1 rounded-full ${randomColor}`}
            style={{ width: size, height: size }}
            initial={{
              x: randomX,
              y: -20,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 20,
              rotate: 360,
              x: randomX + (Math.random() - 0.5) * 200,
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          />
        );
      })}
    </>
  );

  const CelebrationBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <Star key={`star-${i}`} delay={i * 0.2} size={1 + Math.random() * 1.5} />
      ))}
      <Confetti count={30} />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-20 blur-xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            scale: [1, 2, 1],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h relative overflow-hidden">
      <CelebrationBackground />
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col items-center">
              <h2 className="text-blue-700  text-5xl md:text-6xl font-bold">
                Awards &
                Recognitions
              </h2>
              {/* <div className="h-1 w-16 bg-[#00A6E5] mt-4"></div> */}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {awards.map((award, index) => (
              <motion.div 
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <a 
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[240px]"
                >
                  <div className="w-full aspect-square flex items-center justify-center">
                    <img
                      src={award.image}
                      alt={award.alt}
                      className={`w-full h-full object-contain ${award.sizeMultiplier ? `scale-${award.sizeMultiplier * 100}` : ''}`}
                      style={award.sizeMultiplier ? { transform: `scale(${award.sizeMultiplier})` } : {}}
                    />
                  </div>
                </a>
                {award.extraContent}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
"use client";

import React, { useEffect, useState } from "react";

const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true }) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  
  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
    }
  }
  
  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 40;
      case "slow":
        return 80;
      default:
        return 40;
    }
  };
  
  return (
    <div className="relative w-full">
      
      <div
        ref={containerRef}
        className="scroller relative z-20 max-w-7xl overflow-hidden mx-auto px-4"
      >
        <ul
          ref={scrollerRef}
          className={`flex min-w-full gap-4 md:gap-6 py-4 md:py-8 w-max flex-nowrap ${
            start ? "animate-scroll" : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
          style={{
            "--duration": `${getSpeed()}s`,
            "--direction": direction === "left" ? "forwards" : "reverse",
          }}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[280px] sm:w-[320px] md:w-[350px] max-w-full relative flex-shrink-0"
            >
              <div className="h-full w-full">
                <blockquote className="h-full p-4 md:p-8 rounded-2xl flex flex-col bg-white dark:from-blue-700 dark:via-blue-600 dark:to-blue-500">
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-normal text-blue-900 dark:text-blue-100">
                      "{item.quote}"
                    </p>
                  </div>
                  <footer className="mt-4 md:mt-8">
                    <p className="text-sm md:text-base font-semibold text-blue-800 dark:text-blue-200">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm text-blue-700 dark:text-blue-300">
                      {item.title}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
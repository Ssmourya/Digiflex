"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth spring animations
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Add hover detection for interactive elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          scale: { duration: 0.2 },
          rotate: { duration: 0.4, ease: "circOut" },
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-blue-800 rounded-full opacity-50 blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center rounded-full border border-blue-600">
            <span className="text-[8px] text-white font-medium tracking-wider uppercase">digiflex.ai</span>
          </div>
        </div>
      </motion.div>

      {/* Trailing cursors for smooth effect */}
      {[0.2, 0.4, 0.6].map((opacity, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-40 mix-blend-difference"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            damping: 15,
            stiffness: 150,
          }}
        >
          <div className="w-full h-full bg-blue-400 rounded-full" style={{ opacity }} />
        </motion.div>
      ))}
    </>
  );
}

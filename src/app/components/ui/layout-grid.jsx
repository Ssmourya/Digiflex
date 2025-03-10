"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../libs/utlis";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    // Don't animate the View All card
    if (card.isViewAll) {
      return;
    }
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          {card.isViewAll ? (
            // Render View All card without animation wrapper
            <div className="h-full w-full">{card.content}</div>
          ) : (
            // Regular service cards with animation
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative overflow-hidden",
                selected?.id === card.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                  : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layoutId={`card-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <ImageComponent card={card} isSelected={selected?.id === card.id} />
            </motion.div>
          )}
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-gray-100 opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card, isSelected }) => {
  return (
    <div className="">
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
        )}
        alt="thumbnail"
      />
      {/* Text Overlay only shows when card is not selected */}
      {!isSelected && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
          <motion.div
            layoutId={`title-${card.id}`}
            className="text-white text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {card.id === 1 && "Consulting"}
              {card.id === 2 && "Custom App Development"}
              {card.id === 3 && "Testing and QA"}
              {card.id === 4 && "UI & UX"}
            </h3>
            <p className="text-sm md:text-base text-gray-200 hidden md:block">
              Click to learn more
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export default LayoutGrid;
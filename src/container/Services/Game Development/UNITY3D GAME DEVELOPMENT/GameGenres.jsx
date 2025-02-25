import React from "react";
import { Circle } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const GenreButton = ({ genre }) => {
  return (
    <button className="group flex items-center space-x-3 p-4 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 w-full">
      <div className="flex-shrink-0">
        <Circle className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="text-gray-700 font-semibold group-hover:text-white transition-colors duration-300">
        {genre}
      </span>
    </button>
  );
};

const GameGenres = () => {
  const genres = [
    "Strategy", "Arcade", "RPG", "Shooter", "Multiplayer", "Single-Player",
    "Sports", "Board", "Casino", "Puzzle", "Action", "MOBA",
    "MMORPG", "AR", "Simulation", "Trivia", "Adventure", "Card"
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading>Game Genres Developed by Digiflex</Heading>
          <Subheading>
            At Digiflex, we specialize in creating immersive and engaging games across multiple genres. 
            Whether it's strategy, action, or simulation, we bring your vision to life with cutting-edge development.
          </Subheading>
        </div>

        {/* Genres Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre, index) => (
            <div key={index} className="w-full">
              <GenreButton genre={genre} />
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default GameGenres;

import React, { useState } from "react";
import { Circle, CheckCircle } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const GenreButton = ({ genre, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-between space-x-3 p-4 rounded-full border ${
        isSelected ? "bg-blue-600 text-white" : "border-blue-600 hover:bg-blue-600 hover:text-white"
      } transition-all duration-300 w-full`}
    >
      <div className="flex items-center space-x-3">
        <span
          className={`text-gray-700 font-semibold ${
            isSelected ? "text-white" : "group-hover:text-white"
          } transition-colors duration-300`}
        >
          {genre}
        </span>
      </div>
      <div className="flex items-center">
        {isSelected ? (
          <CheckCircle className="w-6 h-6 text-white" />
        ) : (
          <Circle className="w-6 h-6 text-blue-600 group-hover:text-white" />
        )}
      </div>
    </button>
  );
};

const GameGenres = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [
    "Strategy", "Arcade", "RPG", "Shooter", "Multiplayer", "Single-Player",
    "Sports", "Board", "Casino", "Puzzle", "Action", "MOBA",
    "MMORPG", "AR", "Simulation", "Trivia", "Adventure", "Card"
  ];

  const toggleGenreSelection = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading>Game Genres Crafted by Digiflex</Heading>
          <Subheading>
            Digiflex specializes in creating immersive games across a wide range of genres, turning your ideas into reality.
          </Subheading>
        </div>

        {/* Genres Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre, index) => (
            <div key={index} className="w-full">
              <GenreButton
                genre={genre}
                isSelected={selectedGenres.includes(genre)}
                onClick={() => toggleGenreSelection(genre)}
              />
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default GameGenres;

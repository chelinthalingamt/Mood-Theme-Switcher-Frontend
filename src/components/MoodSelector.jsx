import React from "react";
import { useTheme } from "./ThemeProvider";
import MoodButton from "./MoodButton";

const MoodSelector = () => {
  const { selectedMood, handleMoodChange, moods } = useTheme();

  const handleSurpriseMe = () => {
    const moodKeys = Object.keys(moods);
    const randomMood = moodKeys[Math.floor(Math.random() * moodKeys.length)];
    handleMoodChange(randomMood);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
      <h1 className="text-4xl font-bold drop-shadow-md">Mood-Based Theme Switcher</h1>
      <p className="text-2xl mt-4 font-medium">
        {moods[selectedMood].emoji} {selectedMood}
      </p>

      {/* Mood Dropdown */}
      <select
        value={selectedMood}
        onChange={(e) => handleMoodChange(e.target.value)}
        className="mt-4 p-2 rounded-md border border-gray-600 bg-white"
      >
        {Object.keys(moods).map((mood) => (
          <option key={mood} value={mood}>
            {moods[mood].emoji} {mood}
          </option>
        ))}
      </select>

      {/* Mood Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 w-full">
        {Object.keys(moods).map((mood) => (
          <MoodButton key={mood} mood={mood} />
        ))}
      </div>

      {/* Surprise Me Button */}
      <button
        onClick={handleSurpriseMe}
        className="mt-6 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-gray-800 text-white border border-gray-600 transition-all hover:bg-gray-700 hover:scale-105"
      >
        🎲 Surprise Me!
      </button>
    </div>
  );
};

export default MoodSelector;

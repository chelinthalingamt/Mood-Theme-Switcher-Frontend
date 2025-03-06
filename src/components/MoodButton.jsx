import React from "react";
import { useTheme } from "./ThemeProvider";

const MoodButton = ({ mood }) => {
  const { handleMoodChange, moods } = useTheme();

  return (
    <button
      onClick={() => handleMoodChange(mood)}
      className="px-5 py-3 text-lg font-semibold rounded-lg shadow-md transition-all border border-gray-700 hover:scale-105"
      style={{ background: moods[mood].background, color: moods[mood].color }}
    >
      {moods[mood].emoji} {mood}
    </button>
  );
};

export default MoodButton;
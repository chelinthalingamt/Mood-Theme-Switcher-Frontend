import React, { useState, useEffect } from "react";

const moods = {
  Happy: { background: "linear-gradient(135deg, #ffeb3b, #ffcc00)", color: "#000", emoji: "😃" },
  Sad: { background: "linear-gradient(135deg, #90a4ae, #607d8b)", color: "#fff", emoji: "😢" },
  Calm: { background: "linear-gradient(135deg, #80cbc4, #4db6ac)", color: "#000", emoji: "🧘" },
  Angry: { background: "linear-gradient(135deg, #e57373, #d32f2f)", color: "#fff", emoji: "😡" },
  Energetic: { background: "linear-gradient(135deg, #ff9800, #f57c00)", color: "#000", emoji: "⚡" },
};

export default function MoodThemeSwitcher() {
  const [selectedMood, setSelectedMood] = useState(() => localStorage.getItem("selectedMood") || "Happy");

  useEffect(() => {
    localStorage.setItem("selectedMood", selectedMood);
  }, [selectedMood]);

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
  };

  const handleSurpriseMe = () => {
    const moodKeys = Object.keys(moods);
    const randomMood = moodKeys[Math.floor(Math.random() * moodKeys.length)];
    setSelectedMood(randomMood);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full text-center"
      style={{
        background: moods[selectedMood].background,
        color: moods[selectedMood].color,
      }}
    >
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold drop-shadow-md">Mood-Based Theme Switcher</h1>
        <p className="text-2xl mt-4 font-medium">
          {moods[selectedMood].emoji} {selectedMood}
        </p>

        {/* Mood Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          {Object.keys(moods).map((mood) => (
            <button
              key={mood}
              onClick={() => handleMoodChange(mood)}
              className="px-5 py-3 text-lg font-semibold rounded-lg shadow-md transition-all border border-gray-700 hover:scale-105"
              style={{ background: moods[mood].background, color: moods[mood].color }}
            >
              {moods[mood].emoji} {mood}
            </button>
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
    </div>
  );
}


import React, { useState, useEffect } from "react";

const moods = {
  Happy: { background: "linear-gradient(135deg, #ffeb3b, #ffcc00)", color: "#000", emoji: "😃" },
  Sad: { background: "linear-gradient(135deg, #90a4ae, #607d8b)", color: "#fff", emoji: "😢" },
  Calm: { background: "linear-gradient(135deg, #80cbc4, #4db6ac)", color: "#000", emoji: "🧘" },
  Angry: { background: "linear-gradient(135deg, #e57373, #d32f2f)", color: "#fff", emoji: "😡" },
  Energetic: { background: "linear-gradient(135deg, #ff9800, #f57c00)", color: "#000", emoji: "⚡" },
};

export default function MoodThemeSwitcher() {
  const [selectedMood, setSelectedMood] = useState(() => {
    return localStorage.getItem("selectedMood") || "Happy";
  });

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
      className="flex flex-col items-center justify-center min-h-screen transition-all"
      style={{
        background: moods[selectedMood].background,
        color: moods[selectedMood].color,
      }}
    >
      <h1 className="text-3xl font-bold">Mood-Based Theme Switcher</h1>
      <p className="text-xl mt-2">Current Mood: {moods[selectedMood].emoji} {selectedMood}</p>
      
      <div className="flex space-x-3 mt-4">
        {Object.keys(moods).map((mood) => (
          <button
            key={mood}
            onClick={() => handleMoodChange(mood)}
            className="px-4 py-2 rounded-lg shadow-md border border-gray-700"
            style={{ background: moods[mood].background, color: moods[mood].color }}
          >
            {moods[mood].emoji} {mood}
          </button>
        ))}
      </div>
      
      <button
        onClick={handleSurpriseMe}
        className="mt-4 px-5 py-2 rounded-lg shadow-md bg-gray-700 text-white border border-gray-500"
      >
        🎲 Surprise Me!
      </button>
    </div>
  );
}

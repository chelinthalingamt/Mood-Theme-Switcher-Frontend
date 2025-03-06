import React, { useState, useEffect } from "react";

const moods = {
  Happy: { background: "linear-gradient(135deg, #ffeb3b, #ffcc00)", color: "#000", emoji: "😃" },
  Sad: { background: "linear-gradient(135deg, #90a4ae, #607d8b)", color: "#fff", emoji: "😢" },
  Calm: { background: "linear-gradient(135deg, #80cbc4, #4db6ac)", color: "#000", emoji: "🧘" },
  Angry: { background: "linear-gradient(135deg, #e57373, #d32f2f)", color: "#fff", emoji: "😡" },
  Energetic: { background: "linear-gradient(135deg, #ff9800, #f57c00)", color: "#000", emoji: "⚡" },
};

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(() => {
    return localStorage.getItem("selectedMood") || "Happy";
  });

  useEffect(() => {
    localStorage.setItem("selectedMood", selectedMood);
  }, [selectedMood]);

  return (
    <div
      className="flex items-center justify-center h-screen w-screen text-center"
      style={{
        background: moods[selectedMood].background,
        color: moods[selectedMood].color,
      }}
    >
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-bold drop-shadow-md">Mood-Based Theme Switcher</h1>
        <p className="text-2xl mt-4 font-medium">
          {moods[selectedMood].emoji} {selectedMood}
        </p>

        {/* Mood Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full">
          {Object.keys(moods).map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className="px-6 py-3 rounded-lg shadow-lg font-semibold border border-gray-700 transition-all hover:scale-105"
              style={{ background: moods[mood].background, color: moods[mood].color }}
            >
              {moods[mood].emoji} {mood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

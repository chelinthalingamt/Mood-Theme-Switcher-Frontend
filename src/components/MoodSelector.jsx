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
      className="fixed inset-0 flex items-center justify-center w-screen h-screen text-center p-6"
      style={{
        background: moods[selectedMood].background,
        color: moods[selectedMood].color,
      }}
    >
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-2xl">
        <h1 className="text-5xl font-extrabold drop-shadow-md">Mood-Based Theme Switcher</h1>
        <p className="text-3xl mt-6 font-semibold">
          {moods[selectedMood].emoji} {selectedMood}
        </p>

        {/* Mood Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
          {Object.keys(moods).map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className="px-8 py-4 text-2xl rounded-lg shadow-lg font-bold border border-gray-700 transition-all hover:scale-110"
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

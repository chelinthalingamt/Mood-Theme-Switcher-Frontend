import React, { createContext, useContext, useState, useEffect } from "react";

// Define moods with themes
const moods = {
  Happy: { background: "linear-gradient(135deg, #ffeb3b, #ffcc00)", color: "#000", emoji: "😃" },
  Sad: { background: "linear-gradient(135deg, #90a4ae, #607d8b)", color: "#fff", emoji: "😢" },
  Calm: { background: "linear-gradient(135deg, #80cbc4, #4db6ac)", color: "#000", emoji: "🧘" },
  Angry: { background: "linear-gradient(135deg, #e57373, #d32f2f)", color: "#fff", emoji: "😡" },
  Energetic: { background: "linear-gradient(135deg, #ff9800, #f57c00)", color: "#000", emoji: "⚡" },
};

// Create a context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [selectedMood, setSelectedMood] = useState(() => localStorage.getItem("selectedMood") || "Happy");

  // Update localStorage when mood changes
  useEffect(() => {
    localStorage.setItem("selectedMood", selectedMood);
  }, [selectedMood]);

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <ThemeContext.Provider value={{ selectedMood, moods, handleMoodChange }}>
      <div
        className="fixed inset-0 flex items-center justify-center w-full h-full"
        style={{ background: moods[selectedMood].background, color: moods[selectedMood].color }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import MoodSelector from "./components/MoodSelector";
import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import MoodSelector from "./components/MoodSelector";

function App() {
  return (
    <ThemeProvider>
      <MoodSelector />
    </ThemeProvider>
  );
}

export default App;


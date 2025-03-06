import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import MoodSelector from "./MoodSelector";

function App() {
  return (
    <ThemeProvider>
      <MoodSelector />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { useTheme } from "../context/ThemeContext";

function Content() {
  const { theme } = useTheme();

  return (
    <main className={`App-content ${theme}`}>
      <p>This is the content of the app.</p>
    </main>
  );
}

export default Content;

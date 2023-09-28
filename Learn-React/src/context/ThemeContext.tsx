import { createContext, useState, useContext } from "react";
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {
  console.warn({ children });
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((preveTheme) => (preveTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

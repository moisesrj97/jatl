import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</ThemeContext.Provider>;
}

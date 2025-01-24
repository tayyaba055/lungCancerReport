import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem("current_theme") || "light";
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  // Memoize the context value
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

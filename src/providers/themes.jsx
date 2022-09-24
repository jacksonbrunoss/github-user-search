import React from "react";

export const ThemesContext = React.createContext();

export const ThemesStorage = (props) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {props.children}
    </ThemesContext.Provider>
  );
};

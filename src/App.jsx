import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import InfoUser from "./components/InfoUser";
import { GithubStorage } from "./providers/users";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styleds/theme";
import { GlobalStyles } from "./styleds/global";
import { ThemesContext } from "./providers/themes";

function App() {
  const { theme, setTheme } = useContext(ThemesContext);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <GithubStorage>
          <Navbar />
          <Search />
          <InfoUser />
        </GithubStorage>
      </>
    </ThemeProvider>
  );
}

export default App;

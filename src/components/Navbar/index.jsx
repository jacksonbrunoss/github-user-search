import React from "react";
import * as S from "./styled";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemesContext } from "../../providers/themes";

const Navbar = () => {
  const { theme, toggleTheme } = React.useContext(ThemesContext);
  console.log(theme);
  return (
    <S.NavbarBox>
      <S.Container>
        <S.NavbarWrapper>
          <S.Brand>githubfinder </S.Brand>
          {theme === "light" ? (
            <S.ButtonTheme onClick={toggleTheme}>
              <span>Dark</span> <FaMoon />
            </S.ButtonTheme>
          ) : (
            <S.ButtonTheme onClick={toggleTheme}>
              <span>Light</span> <FaSun />
            </S.ButtonTheme>
          )}
        </S.NavbarWrapper>
      </S.Container>
    </S.NavbarBox>
  );
};

export default Navbar;

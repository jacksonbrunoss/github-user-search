import React from "react";
import * as S from "./styled";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <S.NavbarBox>
      <S.Container>
        <S.NavbarWrapper>
          <S.Brand>githubfinder</S.Brand>
          <S.ButtonTheme>
            <span>Dark</span> <FaMoon />
          </S.ButtonTheme>
        </S.NavbarWrapper>
      </S.Container>
    </S.NavbarBox>
  );
};

export default Navbar;

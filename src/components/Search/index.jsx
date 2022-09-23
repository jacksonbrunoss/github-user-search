import React from "react";
import { FaSistrix } from "react-icons/fa";

import * as S from "./styled";

const Search = () => {
  return (
    <S.SearchBox>
      <S.Container>
        <S.SearchWrapper>
          <S.InputSearchBox>
            <S.BtnIcon>
              <FaSistrix />
            </S.BtnIcon>
            <input type="text" placeholder="Search Github username" />
            <S.ButtonSearch>Search</S.ButtonSearch>
          </S.InputSearchBox>
        </S.SearchWrapper>
      </S.Container>
    </S.SearchBox>
  );
};

export default Search;

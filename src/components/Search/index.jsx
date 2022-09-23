import React from "react";
import { FaSistrix } from "react-icons/fa";
import { GithubContext } from "../../providers/users";

import * as S from "./styled";

const Search = () => {
  const { data, handleSearch } = React.useContext(GithubContext);
  const [user, setUser] = React.useState("");

  const handleButton = () => {
    handleSearch(user);
  };
  console.log(data);

  return (
    <S.SearchBox>
      <S.Container>
        <S.SearchWrapper>
          <S.InputSearchBox>
            <S.BtnIcon>
              <FaSistrix />
            </S.BtnIcon>
            <input
              onChange={(e) => setUser(e.target.value)}
              value={user}
              type="text"
              placeholder="Search Github username"
            />
            <S.ButtonSearch onClick={handleButton}>Search</S.ButtonSearch>
          </S.InputSearchBox>
        </S.SearchWrapper>
      </S.Container>
    </S.SearchBox>
  );
};

export default Search;

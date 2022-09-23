import React from "react";
import { GET_USER } from "../services/api";

export const GithubContext = React.createContext();

export const GithubStorage = (props) => {
  const [data, setData] = React.useState([]);

  const handleSearch = async (value) => {
    const { url, optios } = GET_USER(value);
    const res = await fetch(url, optios);
    const json = await res.json();
    setData(json);
  };

  return (
    <GithubContext.Provider value={{ data, handleSearch }}>
      {props.children}
    </GithubContext.Provider>
  );
};

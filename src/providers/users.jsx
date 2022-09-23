import React from "react";

export const GithubContext = React.createContext();

export const GithubStorage = ({ children }) => {
  return <GithubStorage.Provider>{children}</GithubStorage.Provider>;
};

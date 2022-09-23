import { useState } from "react";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { GithubStorage } from "./providers/users";

function App() {
  return (
    <>
      <GithubStorage>
        <Navbar />
        <Search />
      </GithubStorage>
    </>
  );
}

export default App;

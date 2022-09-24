import Navbar from "./components/Navbar";
import Search from "./components/Search";
import InfoUser from "./components/InfoUser";
import { GithubStorage } from "./providers/users";

function App() {
  return (
    <>
      <GithubStorage>
        <Navbar />
        <Search />
        <InfoUser />
      </GithubStorage>
    </>
  );
}

export default App;

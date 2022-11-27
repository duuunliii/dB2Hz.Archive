import Header from "../components/Header.js";
import Main from "../components/Main";
import Menu from "../components/Menu.js";

function Home() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Main />
      <Menu />
    </div>
  );
}

export default Home;

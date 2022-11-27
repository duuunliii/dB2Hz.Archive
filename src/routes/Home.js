import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

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

import { NavBar } from "../../components/navBar";
import { React } from "react";
import { Banner } from "../../components/banner";

const Home = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Banner></Banner>
      </main>
    </div>
  );
};
export default Home;

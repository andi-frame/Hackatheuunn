import Header from "../components/Header";
import Menu from "../components/Menu";
import Greatings from "../components/Greatings";
import Insights from "../components/Insights";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Header></Header>
      <Greatings></Greatings>
      <Insights></Insights>
      <Explore></Explore>
      <Menu></Menu>
    </>
  );
}

export default Home;

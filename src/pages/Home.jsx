import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="flex h-screen text-white">
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;

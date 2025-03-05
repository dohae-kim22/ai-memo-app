import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-slate-700 flex-grow py-[70px]">
      <Outlet />
    </div>
  );
};

export default Main;

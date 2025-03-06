import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addMemo } from "../store/memoSlice";
import { format } from "date-fns";

const SideBar = () => {
  const memo = useSelector((state) => state.memo);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClickAdd = () => {
    const id = uuidv4();
    dispatch(
      addMemo({
        id,
        title: "New Memo",
        content: "",
        summary: "",
        time: format(Date.now(), "yyyy-MM-dd hh:mm a"),
      })
    );

    navigate(`/notes/${id}`);
  };

  return (
    <div className="flex flex-col bg-slate-800 w-[200px] text-center">
      <h1
        onClick={() => navigate("/")}
        className="font-bold text-3xl py-5 cursor-pointer"
      >
        Memo AI
      </h1>
      <button
        onClick={handleClickAdd}
        className="font-bold bg-white hover:bg-slate-700 text-slate-800 hover:text-white mx-auto my-4 w-50 px-5 py-1 rounded-lg block"
      >
        Add Memo
      </button>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-300 hover:text-white"
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <ul className="flex flex-col space-y-1">
          {memo.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={`/notes/${item.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-300 hover:text-white"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

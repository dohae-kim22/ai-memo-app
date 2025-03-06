import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Empty from "./Empty";
import { useState } from "react";

const NoteList = () => {
  const memo = useSelector((state) => state.memo);
  const [sortType, setSortType] = useState("date");

  const sortedMemo = [...memo].sort((a, b) => {
    if (sortType === "date") {
      return new Date(b.time) - new Date(a.time);
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="max-w-[1030px] bg-slate-800 mx-auto p-5">
      <div className="flex justify-end text-gray-400 mb-4 space-x-4">
        <button
          onClick={() => setSortType("date")}
          className={`bg-slate-700 text-sm p-2 rounded-full hover:text-white box-border ${
            sortType === "date" ? "text-white" : ""
          }`}
        >
          Sort by Date
        </button>
        <button
          onClick={() => setSortType("name")}
          className={`bg-slate-700 text-sm p-2 rounded-full hover:text-white box-border ${
            sortType === "name" ? "text-white" : ""
          }`}
        >
          Sort by Name
        </button>
      </div>
      {sortedMemo.length === 0 ? (
        <Empty />
      ) : (
        <ul>
          {sortedMemo.map((item) => {
            return (
              <li>
                <Link
                  to={`/notes/${item.id}`}
                  className="flex justify-between items-center bg-slate-600 p-3 my-2 rounded-lg hover:bg-slate-500"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.content}</p>
                  </div>
                  <div>
                    <time className="text-sm text-gray-400">{item.time}</time>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NoteList;

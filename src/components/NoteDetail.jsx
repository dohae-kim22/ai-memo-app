import { useDispatch, useSelector } from "react-redux";
import { deleteMemo, updateMemo } from "../store/memoSlice";
import { useNavigate, useParams } from "react-router-dom";

const NoteDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memo = useSelector((state) =>
    state.memo.find((item) => item.id === params.id)
  );

  const handleChangeTitle = (e) => {
    dispatch(updateMemo({ ...memo, title: e.target.value }));
  };

  const handleChangeContent = (e) => {
    dispatch(updateMemo({ ...memo, content: e.target.value }));
  };

  const handleDelete = () => {
    dispatch(deleteMemo({ id: params.id }));
    navigate("/");
  };

  return (
    <div className="max-w-[1030px] bg-slate-800 mx-auto p-5 rounded">
      <div className="flex justify-between items-center mb-4">
        <div>
          <time className="block text-sm text-gray-400">{memo.time}</time>
          <input
            className="text-xl mt-1 font-bold bg-transparent rounded-lg"
            placeholder="Enter Title.."
            onChange={handleChangeTitle}
            value={memo.title}
          />
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-full text-sm"
        >
          Delete
        </button>
      </div>
      <section className="flex">
        <div className="flex-1 bg-slate-700 p-5 rounded-lg mr-4">
          <h2>Memo</h2>
          <textarea
            onChange={handleChangeContent}
            className="w-full h-64 resize-none bg-slate-600 rounded p-3 mt-3"
            value={memo.content}
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-full text-sm mt-4">
            Summarize
          </button>
        </div>
        <div className="flex-1 bg-slate-700 p-5 rounded-lg">
          <h2>Summary</h2>
          <div
            value={memo.summary}
            className="w-full h-64 resize-none bg-slate-600 rounded p-3 mt-3"
          ></div>
        </div>
      </section>
    </div>
  );
};

export default NoteDetail;

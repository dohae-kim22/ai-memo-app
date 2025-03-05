const NoteList = () => {
  return (
    <div className="max-w-[1030px] bg-slate-800 mx-auto p-5">
      <div className="flex justify-end text-gray-400 mb-4 space-x-4">
        <button className="bg-slate-700 text-sm p-2 rounded-full hover:text-white box-border">
          Sort by Date
        </button>
        <button className="bg-slate-700 text-sm p-2 rounded-full hover:text-white">
          Sort by Name
        </button>
      </div>
      <ul>
        <li>
          <a
            href="/"
            className="flex justify-between items-center bg-slate-600 p-3 my-2 rounded-lg hover:bg-slate-500"
          >
            <div>
              <h3 className="text-lg font-semibold">Title</h3>
              <p className="text-sm text-gray-400">Description</p>
            </div>
            <div>
              <time className="text-sm text-gray-400">2024</time>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NoteList;

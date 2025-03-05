const NoteDetail = () => {
  return (
    <div className="max-w-[1030px] bg-slate-800 mx-auto p-5 rounded">
      <div className="flex justify-between items-center mb-4">
        <div>
          <time className="block text-sm text-gray-400">2024</time>
          <input
            className="text-xl mt-1 font-bold bg-transparent rounded-lg"
            placeholder="Enter Title.."
          />
        </div>
        <button className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-full text-sm">
          Delete
        </button>
      </div>
      <section className="flex">
        <div className="flex-1 bg-slate-700 p-5 rounded-lg mr-4">
          <h2>Memo</h2>
          <textarea className="w-full h-64 resize-none bg-slate-600 rounded p-3 mt-3"></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-full text-sm mt-4">
            Summarize
          </button>
        </div>
        <div className="flex-1 bg-slate-700 p-5 rounded-lg">
          <h2>Summary</h2>
          <div className="w-full h-64 resize-none bg-slate-600 rounded p-3 mt-3"></div>
        </div>
      </section>
    </div>
  );
};

export default NoteDetail;

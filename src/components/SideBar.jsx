const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-800 w-[200px] text-center">
      <h1 className="font-bold text-3xl py-5">Memo AI</h1>
      <button className="font-bold bg-white hover:bg-slate-700 text-slate-800 hover:text-white mx-auto my-4 w-50 px-5 py-1 rounded-lg block">
        Add Memo
      </button>
      <ul>
        <li className="border-2 hover:border-dotted rounded-lg mx-2 my-3">
          Home
        </li>
        <li className="border-2 hover:border-dotted rounded-lg mx-2">Memo1</li>
      </ul>
    </div>
  );
};

export default SideBar;

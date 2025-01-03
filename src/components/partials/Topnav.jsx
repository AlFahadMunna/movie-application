import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        className="w-[50%] text-zinc-300 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      <i className="text-3xl text-zinc-400 ri-close-fill"></i>
      <div className="absolute w-[50%] h-[50vh] bg-red-200 top-[90%]">
        <Link>
          <img src="" alt="" />
          <span>hello everyone</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;

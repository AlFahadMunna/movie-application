import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-500 p-10 overflow-auto">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
        <span className="">MOVIE APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl my-10 mb-2">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className=" ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className="mr-2 ri-magic-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className="mr-2 ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl my-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className=" mr-2 ri-information-fill"></i>About
        </Link>
        <Link className="hover:bg-[#6556cd] rounded-lg duration-300 p-5 hover:text-white">
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;

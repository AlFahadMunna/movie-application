import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-300 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-400 ri-close-fill right-0"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold inline-block  w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;

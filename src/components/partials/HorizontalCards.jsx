import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5 ">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
      </div>
      <div className="w-full flex h-[40vh]">
        {data.map((data, index) => (
          <div key={index} className="w-[15%] mr-5 bg-zinc-900">
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.postar_path
              }`}
              alt=""
            />
            <h1 className="text-xl font-black text-white">
              {" "}
              {data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>
            <p className="mt-3 text-white">
              {data.overview.slice(0, 100)}...
              <Link className="text-blue-500">more</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;

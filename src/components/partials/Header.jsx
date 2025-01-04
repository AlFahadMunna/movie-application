const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end p-[10%]"
    >
      <h1 className="text-5xl font-black text-white">
        {" "}
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
    </div>
  );
};

export default Header;

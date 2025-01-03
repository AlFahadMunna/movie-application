import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from ".././utils/axios";
import Header from "./partials/Header";

const Home = () => {
  document.title = "MOVIE Home";
  const [wallpaper, setWallpaper] = useState(null);
  const getHeaderWallpapwer = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && getHeaderWallpapwer();
  }, []);
  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;

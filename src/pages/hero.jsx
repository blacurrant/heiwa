import React from "react";
import HeroCard from "../component/herocard";
import HeroCardTwo from "../component/herocardtwo";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const fetchData = useSelector((state) => state.data);
  const toggleSidebar = useSelector((state) => state.sidebarToggle);

  console.log(fetchData);

  return (
    <div className=" flex flex-col w-[100%] h-[80vh] text-gray-200 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-md ">
      {/* <div className="w-[100%] h-[100%] bg-gray-700 rounded-md"> */}
      {/* <HeroNav /> */}
      <div className="w-[100%] h-[100%] rounded-md overflow-y-auto overflow-x-hidden scrollbar">
        <div className="flex flex-col w-[100%] h-fit text-gray-100 p-5 gap-5">
          <h1 className="font-bold text-3xl">Good morning</h1>
          <div className="grid grid-cols-3 gap-5">
            {fetchData?.data?.playlists?.items.map((song, index) => {
              return (
                <NavLink to={`/${index}`} key={index}>
                  <HeroCard song={song} />
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl">Today's biggest hits</h1>
          </div>
          <div
            className={`grid gap-5 ${
              toggleSidebar ? "grid-cols-5" : "grid-cols-4"
            }`}
          >
            {fetchData?.data?.podcasts?.items.map((song, index) => {
              return (
                <NavLink key={index}>
                  <HeroCardTwo song={song} />
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-fit p-5 gap-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl">Made For you</h1>
          </div>
          <div
            className={`grid gap-5 ${
              toggleSidebar ? "grid-cols-5" : "grid-cols-4"
            }`}
          >
            {fetchData?.data?.episodes?.items.map((song, index) => {
              return (
                <NavLink  key={index}>
                  <HeroCardTwo song={song} />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;

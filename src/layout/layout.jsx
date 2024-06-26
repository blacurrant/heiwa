import React, { useState } from "react";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import CurrentSong from "../component/currentSong";
import HeroNav from "../component/heronav";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  const spotifyData = useSelector((state) => state.todo);
  const toggleSidebar = useSelector((state) => state.sidebarToggle);

  const [toggleCurrent, setToggleCurrent] = useState(true);

  const handleCurrent = () => {
    setToggleCurrent(!toggleCurrent);
  }; 

  return (
    <div className="flex flex-col bg-black px-1 font-young tracking-wider">
      <div className="flex">
        <div className=" w-[100%] flex">
          <Sidebar
            dispatch={dispatch}
            toggleSidebar={toggleSidebar}
          />
          <div className="w-[100%] h-[90vh]rounded-md px-1 py-2">
            <HeroNav />
            <Outlet />
          </div>
        </div>
        <CurrentSong
          handleCurrent={handleCurrent}
          toggleCurrent={toggleCurrent}
        />
      </div>
      <Navbar handleCurrent={handleCurrent} />
    </div>
  );
};

export default Layout;

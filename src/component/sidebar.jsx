import React, { useEffect, useState } from "react";
import Card from "../component/card";
import { fetchSongs } from "../redux/slice/todo";
import { Link, Navigate } from "react-router-dom";
import Modal from "./modal";
import { useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";



const Sidebar = ({ handleSidebar, toggleSidebar, dispatch }) => {


  const fetchSong = useSelector(state => state.todo);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [])

  const handleSongPage = () => {
    Navigate()
  }
  
  console.log(fetchSong?.data?.playlists?.items, "songs");

  return (
    <div
      className={`flex flex-col gap-2 px-2 h-[90vh] bg-black text-gray-200 ${
        toggleSidebar ? "w-[20vw] md:w-[7vw]" : "w-[50vw] md:w-[35vw]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-[20vh] flex flex-col justify-center items-center bg-gray-900 rounded-md cursor-pointer">
        <Link
          to="/"
          // onClick={(e) => dispatch(fetchSongs())}
          className={`flex gap-5 w-[100%] px-5 py-2 bg-gray-900 rounded-md ${
            toggleSidebar && "justify-center"
          } `}
        >
          <button className="text-2xl"><FaHouse /></button>
          {toggleSidebar == false && "Home"}
        </Link>
        <Link
        to='/search'
          className={`flex gap-5 w-[100%] px-5 py-2 bg-gray-900 rounded-md ${
            toggleSidebar && "justify-center"
          }`}
        >
          <button className="text-2xl"><FaSearch /></button>
          {toggleSidebar == false && "Search"}
        </Link>
      </div>
      <div
        className={`flex flex-col gap-5 h-[75vh] pt-5 bg-gray-900 rounded-md p-1 ${
          toggleSidebar ? "px-2 items-center" : "px-5"
        }`}
      >
        <div className="h-fit items-center flex justify-between">
          <button className="text-2xl font-bold" onClick={handleSidebar}>|||</button>
          <Modal open={open} setOpen={setOpen}  />
          {!toggleSidebar && <button onClick={e => setOpen(true)}>+add playlist</button>}
        </div>
        <div
          className={`h-[100%] flex flex-col overflow-y-auto overflow-x-hidden scrollbar ${
            toggleSidebar && "no-scrollbar px-5"
          }`}
        >
          {
            fetchSong?.data?.playlists?.items.map((list, index) => {
              return (
                <div onClick={handleSongPage} key={index}>
                  <Card list={list} toggleSidebar={toggleSidebar} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

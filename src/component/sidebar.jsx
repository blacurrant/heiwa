import React, { useEffect, useState } from "react";
import Card from "../component/card";
// import { fetchSongs } from "../redux/slice/todo";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { deletePlaylist } from "../redux/slice/Playlist/playlistArray";

const Sidebar = ({ handleSidebar, toggleSidebar }) => {
  const [open, setOpen] = useState(false);

  // const fetchSong = useSelector(state => state.todo);
  const fetchData = useSelector((state) => state.data);
  const fetchPlaylist = useSelector((state) => state.playlist);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleModal = () => {
    setOpen(true);
  };

  const handleDelete =(index) => {
    dispatch(deletePlaylist(index));
    navigate('/')
  }

  return (
    <div
      className={`flex flex-col gap-2 px-1 py-2 h-[90vh] bg-black text-gray-200 ${
        toggleSidebar ? "w-[20vw] md:w-[7vw]" : "w-[50vw] md:w-[35vw]"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-[20vh] flex flex-col justify-center items-center bg-gray-900 rounded-md cursor-pointer font-semibold">
        <Link
          to="/"
          // onClick={(e) => dispatch(fetchSongs())}
          className={`flex gap-5 w-[100%] h-[50%] px-5 py-2 bg-gray-900 rounded-md text-gray-500 hover:text-gray-200 ${
            toggleSidebar && "justify-center"
          } `}
        >
          <button className="text-2xl">
            <FaHouse />
          </button>
          {toggleSidebar == false && "Home"}
        </Link>
        <Link
          to="/search"
          className={`flex gap-5 w-[100%] h-[50%] px-5 py-2 bg-gray-900 rounded-md text-gray-500 hover:text-gray-200 ${
            toggleSidebar && "justify-center"
          }`}
        >
          <button className="text-2xl ">
            <FaSearch />
          </button>
          {toggleSidebar == false && "Search"}
        </Link>
      </div>
      <div
        className={`flex flex-col gap-5 h-[75vh] pt-5 bg-gray-900 rounded-md p-1 ${
          toggleSidebar ? "px-2 items-center" : "px-5"
        }`}
      >
        <div className="h-fit items-center flex justify-between">
          <button
            className="text-2xl font-bold text-gray-500 hover:text-gray-200"
            onClick={handleSidebar}
          >
            |||
          </button>
          <Modal open={open} setOpen={setOpen} />
          {!toggleSidebar && (
            <button
              className="font-semibold text-5xl text-gray-500 hover:text-gray-200"
              onClick={handleModal}
            >
              +
            </button>
          )}
        </div>
        {fetchPlaylist?.data?.length == 0 ? (
          <div onClick={handleModal} className="w-[100%] h-[20vh] bg-gradient-to-l from-gray-800 to-gray-950 flex items-center px-5 text-gray-400 cursor-pointer animate-pulse">
            <button>create your own playlist!</button>
          </div>
        ) : (
          <div>
            {fetchPlaylist?.data?.map((playlist, index) => {
              return (
                <div className="flex justify-between" key={index} >
                  <NavLink className='flex w-[100%]' to={`/song/${index}`} >
                    <Card list={playlist} toggleSidebar={toggleSidebar} />
                  </NavLink>
                  <button onClick={e => handleDelete(index, playlist)}>-</button>
                </div>
                );
            })}
          </div>
        )}

        {/* <div
          className={`h-[100%] flex flex-col overflow-y-auto overflow-x-hidden scrollbar ${
            toggleSidebar && "no-scrollbar px-5"
          }`}
        >
          {
            fetchData?.data?.playlists?.items.map((song, index) => {
              // console.log(song?.data?.uri, "uri");
              return (
                <NavLink to={`/song/${index}`} key={index}>
                  <Card list={song} toggleSidebar={toggleSidebar} />
                </NavLink>
              )
            })
          }
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

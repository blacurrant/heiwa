import React from "react";
import { FaForwardStep } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { IoPlayCircle } from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { TbRepeat } from "react-icons/tb";
import { PiMicrophoneStage } from "react-icons/pi";
import { TbVolume } from "react-icons/tb";
import { useSelector } from "react-redux";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../assets/song.mp3';
import songCover from '../assets/songCover.png';



const Navbar = ({ handleCurrent }) => {
  const tracks = useSelector((state) => state.data);

  console.log(tracks?.data?.tracks?.items[0]?.data?.uri);

  return (
    <div className="flex items-center gap-5 p-5 w-[100%] h-[10vh] bg-black text-gray-200">
      <div
        onClick={handleCurrent}
        className="w-[25%] flex items-center gap-5 cursor-pointer"
      >
        {/* <div className="w-[50px] h-[50px] bg-gray-500 rounded-md"></div> */}
        <img className="w-[50px] h-[50px] object-cover rounded-md" src={songCover} alt="songcover"/>
        <div className="flex flex-col">
          <h1>Luka Chippi</h1>
          <p className="text-sm text-gray-500">Seedhe Maut</p>
        </div>
      </div>
      <AudioPlayer
        className="w-[75%] h-[10vh] !bg-black !text-gray-200"
        autoPlay
        src={song}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
      {/* <div className="flex flex-col gap-3 items-center justify-center pb-3">
        <div className="flex gap-4 items-center">
          <TbArrowsShuffle className="text-2xl text-green-500" />
          <FaBackwardStep className="text-2xl text-gray-500" />
          <IoPlayCircle className="text-4xl" />
          <FaForwardStep className="text-2xl text-gray-500" />
          <TbRepeat className="text-2xl text-green-500" />
        </div>
        <input className="w-[70vh] h-[2px]" type="range" />
      </div>
      <div className="flex gap-3 items-center text-gray-400 text-xl">
        <PiMicrophoneStage onClick={handleCurrent} />
        <PiMicrophoneStage />
        <PiMicrophoneStage />
        <TbVolume />
        <input className="w-[10vh] h-[5px]" type="range" />
      </div> */}
    </div>
  );
};

export default Navbar;

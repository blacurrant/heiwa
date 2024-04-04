import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const tableData = [
  {
    title: "",
    album: "",
    dateAdded: "",
    duration: "",
  },
];

const SongPage = () => {
  const fetchSongs = useSelector((state) => state?.data);
  const fetchPlaylist = useSelector((state) => state?.playlist);
  const params = useParams();

  const state = fetchSongs?.data?.playlists?.items;

  const [toggleAddButton, setToggleAddButton] = useState(false);
  const [songArray, setSongArray] = useState([]);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  console.log(fetchPlaylist?.data[params.songId]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-5 py-5 text-gray-200 bg-gradient-to-b from-gray-700 to-gray-900">
      <div className="flex items-center gap-5 w-[100%] h-[25vh] px-5">
        <img
          className="h-[100%] w-[25vh] drop-shadow-xl rounded-md"
          src={
            state &&
            state[params.songId]?.data?.images?.items[0]?.sources[0]?.url
          }
          alt="coverart"
        />
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">Public Playlist</h1>
            <h1 className="text-5xl font-bold">
              {fetchPlaylist && fetchPlaylist?.data[params.songId]}
            </h1>
            <h1 className="text-lg font-semibold text-gray-400 lowercase">{`· ${
              state && state[params.songId]?.data?.owner?.name
            }`}</h1>
          </div>
          <button
            onClick={(e) => setToggleAddButton(!toggleAddButton)}
            className="relative w-fit h-fit px-5 py-2 bg-gradient-to-r from-gray-900 to-gray-700 rounded-md text-gray-200 hover:outline hover:outline-gray-900 font-semibold"
          >
            + add song
          </button>
          {toggleAddButton && (
            <div className="absolute z-10 h-[50vh] w-[50vh] bg-gradient-to-l from-gray-700 to-black right-6 rounded-md bottom-20  overflow-y-scroll">
              {fetchSongs?.data?.tracks?.items.map((song, index) => {
                return (
                  <div
                    className="flex justify-between items-baseline text-gray-200 border-b border-black px-5 py-2 bg-transparent rounded-md hover:bg-gradient-to-r hover:from-gray-950 hover:to-gray-600"
                    key={index}
                  >
                    {song?.data?.albumOfTrack?.name.length >= 20
                      ? song?.data?.albumOfTrack?.name.slice(0, 19) + "..."
                      : song?.data?.albumOfTrack?.name}
                    <button
                      onClick={(e) => setSongArray([...songArray, song])}
                      className="px-3 py-2 bg-black text-gray-200 hover:bg-gray-800 rounded-md"
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="h-[100%] bg-gradient-to-b from-gray-800 to-black px-5">
        <table className="h-fit w-[100%] text-gray-300">
          <tr className=" border-b border-gray-500 text-left">
            <th className="py-3">#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>duration</th>
          </tr>
          {songArray.map((song, index) => {
            return (
              <tr key={index} className="border-b border-gray-500 text-left hover:bg-gray-800">
                <th className="py-3">{index+1}</th>
                <th>{song?.data?.albumOfTrack?.name}</th>
                <th>{song?.data?.name}</th>
                <th>{song?.data?.artists?.items[0]?.profile?.name}</th>
                <th>{millisToMinutesAndSeconds(song?.data?.duration?.totalMilliseconds)}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default SongPage;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const state = useSelector((state) => state?.data?.data?.playlists?.items);
  const params = useParams();
  const tracks = useSelector((state) => state?.data?.data?.tracks?.items);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  console.log(tracks[params?.albumId]);

  return (
    <div className="w-[100%] h-[80vh] flex flex-col gap-5 py-5 text-gray-200 bg-gradient-to-b from-gray-700 to-gray-900 rounded-md">
      <div className="flex items-center gap-5 w-[100%] h-[25%] px-5">
        <img
          className="h-[100%] w-[25vh] drop-shadow-xl rounded-md"
          src={state[params?.albumId]?.data?.images?.items[0]?.sources[0]?.url}
          alt="coverart"
        />
        <div className="flex flex-col gap-2 px-5">
          <h1 className="text-lg font-semibold">Album</h1>
          <h1 className="text-5xl font-bold">
            {state[params?.albumId]?.data?.name}
          </h1>
          <h1 className="text-lg font-semibold text-gray-400 lowercase">{`· ${
            state[params?.albumId]?.data?.owner?.name
          }`}</h1>
        </div>
      </div>
      <div className="h-[75%] bg-gradient-to-b from-gray-800 to-black px-5 py-5 overflow-y-scroll">
        <table className="h-[100%] w-[100%] text-gray-300 overflow-y-scroll">
          <tr className="border-b border-gray-500 text-left">
            <th className="py-3">#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Album</th>
            <th>duration</th>
          </tr>
          {tracks.map((song, index) => {
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

export default AlbumPage;

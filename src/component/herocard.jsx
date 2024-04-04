import React from "react";

const HeroCard = ({ song }) => {
  // console.log(song?.data?.albumOfTrack?.coverArt?.sources[0]);
  return (
    <div
      className={`flex items-center gap-5 w-[100%] h-[75px] bg-gray-600 rounded-md `}
    >
      <div className={` w-[75px] h-[100%]rounded-l-md`}>
        {/* {song} */}
        <img
          className="w-[100%] h-[100%] rounded-l-md object-cover drop-shadow-lg"
          src={song?.data?.images?.items[0]?.sources[0]?.url}
          alt="coverArt"
        />
      </div>
      <h1 className="w-[75%]">
        {`${
          song?.data?.name.length >= 20
            ? song?.data?.name.slice(0, 19) + "..."
            : song?.data?.name
        }`}
        {/* {song?.data?.albumOfTrack?.name} */}
      </h1>
    </div>
  );
};

export default HeroCard;

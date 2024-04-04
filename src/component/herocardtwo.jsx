import React from "react";

const HeroCardTwo = ({ song }) => {
  return (
    <div
      className={`flex flex-col items-center gap-5 w-[100%] h-[100%] bg-gray-600 rounded-md p-5`}
    >
      <div className={`w-[100%] h-[20vh] bg-gray-200 rounded-md`}>
        <img className="w-[100%] h-[20vh] object-cover rounded-md" src={song?.data?.coverArt?.sources[1].url} alt="" />
      </div>
      {song?.data?.name}
    </div>
  );
};

export default HeroCardTwo;

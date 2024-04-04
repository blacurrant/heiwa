import React from "react";

const Card = ({ list, toggleSidebar }) => {
  return (
    <div
      className={`flex items-center gap-5 w-[100%] h-[75px] rounded-md drop-shadow-xl ${
        toggleSidebar
          ? "py-1 w-[50px] h-[50px] justify-center bg-transparent"
          : "p-2 w-[100%] h-[75px] hover:bg-gray-800"
      }`}
    >
      <div className={` w-[50px] h-[50px] flex justify-center items-center bg-gray-700 rounded-md drop-shadow-xl`}>
        {/* <img
          className="w-[50px] h-[50px] object-cover rounded-md"
          src={list?.data?.images?.items[0]?.sources[0]?.url}
          alt=""
        /> */}
        <p className="font-bold text-2xl uppercase drop-shadow-xl text-gray-950">
          {list[0]}
        </p>
      </div>
      {toggleSidebar == false && (
        <div className="flex flex-col justify-center">
          <p>{`${
            list.length >= 20
              ? list.slice(0, 19) + "..."
              : list
          }`}</p>
          <p className="text-gray-500 lowercase">{`${list}`}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

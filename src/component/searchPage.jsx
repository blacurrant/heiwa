import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const data = useSelector((state) => state?.data);
  const sidebar = useSelector((state) => state?.sidebarToggle);
  const [value, setValue] = useState("");

  const HandleInput = (e) => {
    setValue(e.target.value);
  };

  const HandleButton = (e) => {
    console.log("clicked");
  };

  console.log(sidebar);
  return (
    <div className="space-y-5 h-[80vh] p-5 text-gray-200 font-bold text-3xl bg-gradient-to-b from-gray-700 to-blue-950 rounded-b-md">
      <div className="text-center">
        <input
          className=" w-[60vh] rounded-l-full px-5 py-3 outline-none text-gray-700 text-sm font-medium drop-shadow-lg"
          type="text"
          placeholder="Q who do you want to listen to today?"
          onChange={(e) => HandleInput(e)}
        />
        <button
          onClick={HandleButton}
          className=" bg-blue-700 rounded-r-full px-5 py-3 text-sm font-medium drop-shadow-lg hover:bg-blue-500"
        >
          search
        </button>
      </div>
      <h1>Recent Searches</h1>
      <div className={`grid gap-5 ${sidebar ? "grid-cols-6" : "grid-cols-5"}`}>
        {data?.data?.artists?.items
          ?.filter((arr) => {
            return arr?.data?.profile?.name.toLowerCase().includes(value);
          })
          .map((artist, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-5 justify-center items-center w-[25vh] h-[25vh] bg-gray-500 rounded-md cursor-pointer"
              >
                <img
                  className="w-[100%] h-[20vh] object-contain rounded-md"
                  src={artist?.data?.visuals?.avatarImage?.sources[1]?.url}
                  alt="artist"
                />
                <h1 className="text-sm font-lg">
                  {artist?.data?.profile?.name}
                </h1>
              </div>
            );
          })}
        {/* {data?.data?.artists?.items?.map((artist, index) => {
          return (
            <div key={index} className="w-[25vh] h-[25vh] bg-gray-500 border border-black rounded-md animate-pulse">
              <h1>
                {artist?.data?.profile?.name}
              </h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default SearchPage;

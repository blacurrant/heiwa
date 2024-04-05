import React from "react";

const SearchPage = () => {
  return (
    <div className="space-y-5 h-[80vh] p-5 text-gray-200 font-bold text-3xl bg-gradient-to-b from-gray-700 to-blue-950 rounded-b-md">
      <div className="text-center">
        <input
          className="w-[70vh] rounded-full px-5 py-3 outline-none text-gray-700 text-sm font-medium"
          type="text"
          placeholder="Q what do you want to listen to?"
        />
      </div>
      <h1>Recent Searches</h1>
      <div className="flex gap-5">
        {[1, 2, 3, 4, 5].map((box, index) => {
          return (
            <div key={index} className="w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse"></div>
          );
        })}
        {/* <div className="w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse"></div>
        <div className="w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse"></div>
        <div className="w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse"></div>
        <div className="w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse"></div> */}
      </div>
    </div>
  );
};

export default SearchPage;

import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.users);

  console.log(user);
  return (
    <div className="w-[100%] h-[80vh] flex flex-col text-gray-200 bg-gradient-to-b from-gray-00 to-blue-950 rounded-b-md">
      <div className="flex gap-5 items-center w-[100%] h-fit px-5 py-5 bg-gradient-to-b from-gray-700 to-gray-800">
        <img
          className="h-[20vh] w-[25vh] border border-black rounded-full drop-shadow-2xl bg-black"
          src="/"
          alt="profile"
        />
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">Profile</h1>
            <h1 className="text-5xl font-bold">Nishant</h1>
            <h1 className="text-lg font-semibold text-gray-400 lowercase">
              9 Playlists | 20 followers
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[100%] h-[75%] p-5 bg-gradient-to-b from-gray-900 to-blue-950 rounded-b-md">
        <h1 className="font-bold text-2xl">Followers</h1>
        <div className="flex gap-5">
        {[1, 2, 3, 4, 5].map((box, index) => {
          return (
            <div key={index} className="w-[25vh] h-[25vh] bg-gray-500 rounded-md"></div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Profile;

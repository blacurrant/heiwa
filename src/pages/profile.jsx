import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.users);

  console.log(user);
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-5 py-5 text-gray-200 bg-gradient-to-b from-gray-00 to-red-950">
      <div className="flex items-center gap-5 w-[100%] h-[25vh] px-5 py-10 ">
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
      <div className="w-[100%] h-[100%] p-5 bg-gradient-to-b from-gray-800 to-red-950">
        <h1 className="font-bold text-2xl">Followers</h1>
      </div>
    </div>
  );
};

export default Profile;

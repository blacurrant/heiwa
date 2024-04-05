import React, { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi2";
import UserProfile from "./userProfile";
import { useNavigate } from "react-router-dom";

const HeroNav = () => {
  const [toggleUserProfile, setToggleUserProfile] = useState(true);
  const navigate = useNavigate();

  const handleUser = () => {
    setToggleUserProfile(!toggleUserProfile);
  };

  return (
    <div className="flex justify-between w-[100%] h-[8vh] p-5 bg-gray-700 rounded-t-md relative">
      <div className="flex gap-5 items-center text-4xl opacity-50">
        <IoIosArrowDropleftCircle
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-white"
        />
        <IoIosArrowDroprightCircle
          onClick={() => navigate(1)}
          className="text-gray-400 hover:text-white"
        />
      </div>
      <div className="flex gap-5 items-center text-4xl opacity-50">
        <button
          className="text-gray-900 bg-white cursor-pointer rounded-full text-lg font-semibold px-5 py-1"
        >
          Explore Premium
        </button>
        <HiUserCircle
          onClick={handleUser}
          className="text-gray-300 cursor-pointer"
        />
        {!toggleUserProfile && <UserProfile handleUser={handleUser} />}
      </div>
    </div>
  );
};

export default HeroNav;

import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi2";
import UserProfile from "./userProfile";

const HeroNav = () => {
  const [toggleUserProfile, setToggleUserProfile] = useState(true);

  const handleUser = () => {
    setToggleUserProfile(!toggleUserProfile);
  };

  return (
    <div className="flex justify-between w-[100%] h-[10vh] p-5 bg-gray-700 rounded-md relative">
      <div className="flex gap-5 items-center text-4xl opacity-50">
        <IoIosArrowDropleftCircle className="text-gray-300" />
        <IoIosArrowDroprightCircle className="text-gray-300" />
      </div>
      <div className="flex gap-5 items-center text-4xl opacity-50">
        {/* <HiUserCircle className="text-gray-300" />
        <HiUserCircle className="text-gray-300" /> */}
        <HiUserCircle onClick={handleUser} className="text-gray-300 cursor-pointer" />
        {!toggleUserProfile &&
          <UserProfile handleUser={handleUser} />
        }
      </div>
    </div>
  );
};

export default HeroNav;

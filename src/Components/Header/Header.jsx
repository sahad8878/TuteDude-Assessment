import React from "react";
import logo from "../../Assets/logo.png";
import profile from "../../Assets/profile.png";
function Header() {
  return (
    <div className="h-[73px] bg-[#FFFFFF] flex  justify-between items-center ">
      <div className="sm:ml-20">
        <img
          src={logo}
          className="w-[160px] h-[45px]  sm:h-[60px]"
          alt="logo"
        />
      </div>
      <div className="hidden sm:block mr-20 ">
        <div className="flex space-x-11   text-[18px] text-[#80008040] font-medium">
          <h2>My Assignment</h2>
          <h2>Chat whith Mentor</h2>
          <div className=" text-[#800080] flex">
            <img
              src={profile}
              alt="profile"
              className="h-[20px] w-[20px] m-1"
            />
            <h2>ProfileName</h2>
          </div>
        </div>
      </div>
      <div className="block sm:hidden mr-8">
        <div className="bg-[#800080] text-white text-[16px] font-medium h-[45px] w-[165px] flex justify-center items-center rounded-lg">
          ProfileName
        </div>
      </div>
    </div>
  );
}

export default Header;

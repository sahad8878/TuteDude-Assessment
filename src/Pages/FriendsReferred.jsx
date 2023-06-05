import React from "react";
import Header from "../Components/Header/Header";
import RefferalCode from "../Components/FriendsReffered/RefferalCode";
import Goback from "../Components/FriendsReffered/Goback";
import FriendsEntrolled from "../Components/FriendsReffered/FriendsEntrolled";
function FriendsReferred() {
  return (
    <div className="mb-7 sm:mb-20 scrollbar-hide">
      <Header />
      <div className="px-9 sm:px-48">
        <div className="h-[76px]  flex  items-center  ">
          <h1 className="text-[14px] font-medium  ">
            UI/UX {">"} Refere & Earn {">"} Friends Reffered
          </h1>
        </div>
        <Goback />
        <RefferalCode />
        <div className="mt-12">
          <h1 className="text-[20px] text-[#800080] font-bold mb-6">
            Friends who entrolled
            <span className="font-medium text-[#626262]">(3)</span>
          </h1>
          <FriendsEntrolled />
        </div>
        <div className="mt-14 space-y-4">
          <h1 className="text-[16px] text-[#800080] font-semibold">
            Terms & Conditions
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FriendsReferred;

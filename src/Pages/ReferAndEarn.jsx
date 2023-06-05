import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import WithdrowBalance from "../Components/ReferAndEarn/WithdrowBalance";
import ReferralCode from "../Components/ReferAndEarn/ReferralCode";
import Work from "../Components/ReferAndEarn/Work";

function ReferAndEarn() {
  return (
    <div className="mb-7 sm:mb-20 ">
      <Header />
      <div className="px-9 sm:px-48">
        <div className="h-[76px]  flex  items-center  ">
          <h1 className="text-[14px] font-medium  ">
            UI/UX {">"} Refere & Earn{" "}
          </h1>
        </div>
        <div className=" sm:flex">
          <div className=" sm:w-[50%] ">
            <WithdrowBalance />
          </div>
          <div className="  sm:w-[50%]">
            <h1 className="mt-5 text-[#800080] text-[24px] font-bold">
              Your Referral Code
            </h1>
            <ReferralCode />
          </div>
        </div>
        <div className=" mt-7 sm:mt-11 ">
          <h1 className=" text-[24px] font-bold text-[#800080]">
            How does it work ?{" "}
          </h1>
          <Work />
        </div>
        <div className="mt-10 space-y-4">
          <h1 className="text-[16px] text-[#800080] font-semibold">
            <Link to="/friends-referred">Friends Who Entrolled</Link>
          </h1>
          <h1 className="text-[16px] text-[#800080] font-semibold">
            Terms & Conditions
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ReferAndEarn;

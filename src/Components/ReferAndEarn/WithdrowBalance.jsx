import React from "react";

function WithdrowBalance() {
  return (
    <div className="w-[358px] sm:w-[486px] bg-[#FFFFFF] rounded-xl shadow-2xl mt-5 h-[188px] grid grid-cols-2 sm:gap-0  gap-y-4 sm:grid-cols-3 sm:space-x-12 p-7">
      <div>
        <h1 className="text-[14px] text-[#800080] font-normal">
          Referral Earning
        </h1>
        <h1 className="text-[32px] font-medium">$ 2500</h1>
      </div>
      <div>
        <h1 className="text-[14px] text-[#800080] font-normal">
          Total Referrals
        </h1>

        <h1 className="text-[32px] font-medium">7</h1>
      </div>
      <div>
        <h1 className="text-[14px] text-[#800080] font-normal">
          Wallet Balance
        </h1>
        <h1 className="text-[32px] font-medium">$ 500</h1>
      </div>
      <div className=" flex justify-center items-center">
        <button className="sm:-mr-64 w-[180px] text-center text-white rounded-full p-2 text-[16px] font-medium bg-[#800080] h-[40px] hover:brightness-90">
          Withdraw Balance
        </button>
      </div>
    </div>
  );
}

export default WithdrowBalance;

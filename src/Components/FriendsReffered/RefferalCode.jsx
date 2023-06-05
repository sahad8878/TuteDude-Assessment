import React from "react";

function RefferalCode() {
  const code = " EDCH54";
  return (
    <div className=" flex  justify-between">
      <div className="">
        <h1 className="text-[#800080] text-[16px] font-normal">
          Your Refferal Code
        </h1>
        <div className="text-center text-[16px] font-semibold py-2 border-2 mt-2 rounded-md flex justify-center items-center gap-3 pr-3">
          {code.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
      <div className=" shadow-lg  ring-offset-2 ring-offset-slate-600   rounded-lg p-4 sm:p-5">
        <h1 className="text-[#800080] text-[14px] font-normal">
          Wallet Balance
        </h1>
        <h1 className="text-[16px] font-semibold">$ 500</h1>
      </div>
    </div>
  );
}

export default RefferalCode;

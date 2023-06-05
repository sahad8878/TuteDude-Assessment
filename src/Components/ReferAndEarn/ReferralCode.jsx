import React from "react";

function ReferralCode() {
  const code = " EDCH54";
  return (
    <div
      className=" sm:w-[350px] py-4 text-[20px] font-semibold text-[#800080] rounded-full border-2 flex justify-center items-center gap-8 pr-6  mt-3 "
      style={{
        borderImage: "linear-gradient(270deg, #800080 0%, #FF864C 100%) 1",
        borderImageSlice: 1,
      }}
    >
      {code.split("").map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}

export default ReferralCode;

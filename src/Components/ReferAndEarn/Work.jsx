import React from "react";
import friends from "../../Assets/people.png";
import coupon from "../../Assets/coupen.png";
import rupee from "../../Assets/rupee.png";
import discount from "../../Assets/discount.png";
import wallet from "../../Assets/wallet.png";
function Work() {
  const work = [
    {
      logo: friends,
      header: "Invite your friends",
      discription: "Share the link tutedude.com with your friends ",
    },
    {
      logo: coupon,
      header: "Friend purchases any course ",
      discription: "Using your REFERRAL CODE in the payments page ",
    },
    {
      logo: rupee,
      header: "You get ₹ 200 as referral money",
      discription: "On total purchase the friend makes, into your wallet ",
    },
    {
      logo: discount,
      header: " Your Friend gets ₹ 200 Off",
      discription:
        " On his overall fee on successful purchase using your referral code ",
    },
    {
      logo: wallet,
      header: " Transfer money from wallet ",
      discription:
        "  When the wallet balance reaches ₹200 or more, you can withdraw it ",
    },
  ];
  return (
    <div className=" w-[358px] sm:w-[780px] mt-5 ">
      <div className="gap-y-6 gap-6  grid grid-cols-1 sm:grid-cols-2 ">
        {work.map((work) => (
          <div className="flex ">
            <div className="  flex justify-center content-center  ">
              <div className="w-[65px] h-[65px] flex justify-center items-center bg-[#d9d9d940] rounded-full">
                <img src={work.logo} className="h-[32px] w-[32px]" alt="logo" />
              </div>
            </div>
            <div className="pl-4 pr-9">
              <h1 className="text-[16px] font-medium">{work.header}</h1>
              <h1 className="text-[16px] font-normal text-[#4D4D4D]">
                {work.discription}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;

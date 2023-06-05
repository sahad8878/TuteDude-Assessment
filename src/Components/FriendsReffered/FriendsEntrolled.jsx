import React from "react";
import "./FriendsEntrolled.css";

function FriendsEntrolled() {
  const friendsErolled = [
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      courseEnrolled: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
      ],
      referralAmout: 185,
    },
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      courseEnrolled: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
      ],
      referralAmout: 185,
    },

    {
      name: "Subhash Mishra",
      date: "15 Sep, 2022",
      courseEnrolled: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
      ],
      referralAmout: 485,
    },
    {
      name: "Prafull Kumar",
      date: "15 Sep, 2022",
      courseEnrolled: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
      ],
      referralAmout: 485,
    },
  ];
  return (
    <div className="flex">
      <div className="carousel sm:flex items-center justify-start overflow-x-auto scrollbar-hide gap-6 space-y-5 sm:space-y-0 rounded-xl mr-[5px] ">
        {friendsErolled.map((friends) => (
          <div className="card h-[228px]  rounded-2xl p-5 bg-gradient-to-r  from-[#FF864C] to-[#800080] ">
            <div className="sm:w-[358px] space-y-3">
              <div className="flex justify-between">
                <h1 className="text-[16px] font-bold text-white">
                  {friends.name}
                </h1>
                <h1 className=" text-white text-[14px]">{friends.date}</h1>
              </div>
              <h1 className="text-white text-[14px] font-medium">
                Course Enrolled <span>({friends.courseEnrolled.length})</span>
              </h1>
              <div className="flex flex-wrap text-[14px] text-white font-normal gap-3 mx-3 mr-4 overflow-y-auto h-20 scrollbar-style">
                {friends.courseEnrolled.map((course) => (
                  <div className="border-2 rounded-full flex justify-center items-center px-3 p-1">
                    {course}
                  </div>
                ))}
              </div>
              <h1 className="text-[16px]  font-medium text-white">
                Refferal Amount{" "}
                <span className="text-white text-[24px] font-semibold">
                  $ {friends.referralAmout}
                </span>{" "}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block relative">
        <div className="fade_right absolute top-0 right-1  h-full w-[150px]  rounded-r-xl"></div>
      </div>
    </div>
  );
}

export default FriendsEntrolled;

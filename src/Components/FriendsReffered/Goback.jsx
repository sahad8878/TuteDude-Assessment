import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Arrow.png";
function Goback() {
  return (
    <div className="mb-5 block sm:hidden">
      <Link to="/" className="flex items-center gap-2 w-24">
        <img className="w-[15px] h-[15px]" src={arrow} alt="" />
        <h2 className="text-[16px] font-semibold text-[#800080]">go back</h2>
      </Link>
    </div>
  );
}

export default Goback;

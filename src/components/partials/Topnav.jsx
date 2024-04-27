import React from "react";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <div className="w-full h-[10vh]  relative">
      <div className="flex justify-center items-center  gap-5 p-5 absolute">
        <i class="ri-search-line"></i>
        <input
          className="py-2  w-[70vh] text-md rounded-md border-none outline-none  bg-zinc-300"
          type="text"
        />
        <i class="ri-xrp-fill"></i>
        <Link to={"/profile"}>
          {" "}
          <i class="ri-id-card-fill font-bold text-2xl ml-[69vh]"></i>
        </Link>
      </div>

      <div className="absolute w-[70vh] max-h-[70vh] bg-zinc-300 m-14 overflow-auto">
        {/* <Link href="/">
          <div className="flex items-center p-4 hover:bg-gray-100">
            <img src="" alt="" />
            <span>searched name</span>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Topnav;

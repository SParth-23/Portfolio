import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ ButtonTitle = "Contact Us", onClcik }) {
  return (
    <div className="">
      <button className="min-w-40 px-4 py-2 items-center align-middle justify-between bg-zinc-100 flex text-black rounded-full">
        <span className="text-sm font-medium">{ButtonTitle}</span>
        <IoIosReturnRight />
      </button>
    </div>
  );
}

export default Button;

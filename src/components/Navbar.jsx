import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="fixed px-20 w-full mx-auto py-6 border-b-[1px] select-none border-zinc-700 flex align-middle justify-between items-center">
      <h1>Hi, I am Parth</h1>
      <div className="Links flex gap-14 ml-20">
        {["Home", "Projects", "Skills", "", "About"].map((elem, index) => (
          <a key={index} className="font-normal text-sm" href="#">
            {index === 3 && (
              <span
                key={index}
                className="mr-2 inline-block h-5 w-0.5 bg-zinc-400"
              ></span>
            )}
            {elem}
          </a>
        ))}
      </div>
      <Button title="Contact Us" />
    </div>
  );
}

export default Navbar;


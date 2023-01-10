import React from "react";

function BackDrop({ togler, condition }) {
  return (
    <div
      onClick={togler}
      className={` ${
        condition
          ? "w-full min-h-screen lg:hidden bg-black/80 duration-300 fixed top-0 left-0 z-30"
          : "hidden"
      }`}
    ></div>
  );
}

export default BackDrop;

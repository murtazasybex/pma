import React from "react";
import { arrowleft, arrowright } from "../assets";

const Announcement = () => {
  return (
    <>
      <section className="w-full bg-[#1A7E91]/10 p-3 my-8 flex justify-between items-center">
        <img src={arrowleft} alt="" />
        <p className="inter font-semibold md:text-[14px] text-[12px]">
          Deal of the Week: Free shipping on all business cards | Ends Feb. 19{" "}
          <span className="underline pl-1 cursor-pointer font-normal hover:no-underline">
            Shop now
          </span>
        </p>
        <img src={arrowright} alt="" />
      </section>
    </>
  );
};

export default Announcement;

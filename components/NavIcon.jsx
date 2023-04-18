"use client"
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { useState } from "react";
const NavIcon = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`${
          toggle ? "scale-1 " : "scale-0"
        } fixed w-full flex items-center justify-center z-20 bottom-[2rem] transition-all duration-300`}
      >
        <div className="flex sm:gap-8 gap-6 bg-primary rounded-xl p-4">
          {props?.menu?.filter(main => main.name).map((main) => {
            return (
              <div
                className="p-2 rounded-full bg-glass"
                onClick={() => {
                  setToggle(false);
                }}
                key={main.id}
              >
                <a href={`#${main.href}`} className="text-xl text-white">
                  {main.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="fixed right-[10px] top-[10px] z-20 cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <RxDashboard className="text-3xl text-primary" />
      </div>
    </>
  );
};

export default NavIcon;



"use client";

import React from "react";
import { useEffect, useState } from "react";
import NavIcon from '../NavIcon';
const HeaderClient = (props) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <div
        className={`${scroll ? " bg-back shadow-sm" : ""
          } sticky top-0 left-0 w-full z-20 glass-container`}
      >
        <nav className="relative container mx-auto flex items-center justify-between py-2 px-2">
          <div className="">
            <h4 className="text-xl font-semibold">博迈德生物</h4>
            {/* <span className="text-[0.65rem] font-bold opacity-70">
            Restaurant && BBQ
          </span> */}
          </div>
          <div className="ss:flex hidden items-center justify-start mr-[40px] px-2">
            {
              props?.menu?.map((item, index) => {
                return <div key={index} className="py-2">
                  <div className="px-2 cursor-pointer">{item.name}</div>
                </div>
              }) || ''
            }
          </div>
          {/* <div className="cursor-pointer flex items-center justify-center w-10 h-12 bg-primary rounded-t-xl rounded-br-3xl relative"> */}
          
          {/* </div> */}
        </nav>
        
      </div>
      <NavIcon menu={props.menu} className="text-xl text-white" />
    </>
  );
};

export default HeaderClient;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import hero from "./assets/hero.png";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image'
import { productListReq } from '@/services/index';


const Home = async () => {

  const ProjectList = await productListReq()


  const project = ProjectList?.list[0]
  console.log(JSON.stringify(project, null, 2))
  return (
    <div
      className="section flex items-center xl:justify-center justify-start flex-wrap"
      id="home"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
          博迈德生物 <br /> 欢迎您 <br /> 
        </div>
        <div className="btn">
          <a href="#">查看菜单</a>
          <FaArrowRight />
        </div>
        {/* <div className="flex md:gap-6 gap-2">
          {heroIcons.map((heroIcon, index) => {
            return (
              <div
                className="w-[3rem] h-[3rem] bg-black text-white flex items-center justify-center md:text-3xl text-xl rounded-md"
                key={index}
              >
                {heroIcon}
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="min-w-[200px] justify-self-center md:w-[600px] mt-6">
        <Image object-fit="true" width={200} height={200} src={project.image} alt={project.name} />
      </div>
    </div>
  );
};

export default Home;

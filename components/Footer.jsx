import React from "react";
import { footerSocials } from "./Data";
import { payements } from "./Data";
import Image from "next/image";
import { companiesReq, menuListReq, newsListReq } from '@/services/index'


import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";
import { url } from "inspector";




const Footer = async () => {



  const [menu, companies, news] = await Promise.all(
    [
      await menuListReq(),
      await companiesReq(),
      await newsListReq()
    ]
  )
  const footerContacts = [
    {
      id: 1,
      icon: <HiOutlinePhone />,
      text: companies.phone,
    },
    {
      id: 2,
      icon: <HiOutlineMail />,
      text: companies.email,
    },
    {
      id: 3,
      icon: <BiMap />,
      text: companies.address,
    },
  ];
  const mainMenu = [
    ...menu.map(menu=>{
      return {
        ...menu,
        href: url,
        text: menu.name,
        icon: <AiFillHome />,
      }
    }),
    {
      id: 22222,
      href: "about",
      text: "About",
      icon: <MdExplore />,
    },
    {
      id: 33333,
      href: "recipe",
      text: "Recipe",
      icon: <GiBowlOfRice />,
    },
    {
      id: 44444,
      href: "contact",
      text: "Contact",
      icon: <MdContactPage />,
    },
  ];
  const explores = news?.list?.map(object => object.title).slice(0, Math.min(5, news?.list?.length - 1)) || [];
  
  return (
    <div className="section">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
        <div>
          <div className="text-xl font-semibold mb-3">FoodZone</div>
          <p className="text-[1rem] mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            asperiores, laboriosam qui labore eveniet ut iusto culpa animi
            officiis quo?
          </p>
          <div className="flex items-center gap-4">
            <span className="">Follow Us</span>
            <div className="h-[2px] w-12 bg-primary"></div>
            {footerSocials.map((footerSocial, index) => {
              return (
                <div className="" key={index}>
                  <a href="#">{footerSocial}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">目录</h3>
            {mainMenu.filter(menu => menu.text).map((menu) => {
              return (
                <div className="flex items-center text-[1rem] gap-4 mb-2" key={menu.id}>
                  <span className="text-xl">{menu.icon}</span>
                  <a href={`#${menu.href}`}>{menu.text}</a>
                </div>
              );
            })}
          </div>
          <div className="">
            <h3 className="font-semibold text-[1.1rem]  mb-4">Explore</h3>
            {explores.map((explore, index) => {
              return (
                <div className="text-[1rem] mb-2" key={index}>
                  <a href="#">{explore}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h3 className="font-semibold text-[1.1rem] mb-4">联系我们</h3>
          {footerContacts.map((footerContact) => {
            return (
              <div
                className="flex items-center gap-4 mb-4"
                key={footerContact.id}
              >
                <div className="text-xl">{footerContact.icon}</div>
                <div>{footerContact.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">
        <div className="">
          <span className="font-bold">京ICP备14027257号-1 </span>
        </div>
        <div className="flex gap-2">
          {payements.map((payment, index) => {
            return (
              <div className="" key={index}>
                <img object-fit="true" src={payment} alt="" className="w-10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

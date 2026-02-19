import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Img from "../Images/logo.png";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const navBar = [
    { href: "/", name: "Home" },
    { href: "/", name: "Portfolio" },
    { href: "/", image: Img },
    { href: "/", name: "About" },
    { href: "/", name: "Contact" },
  ];
  const[open, close]= useState(true)
  const togglemenu = ()=>{
    close(!open)
  }
  const mobileNav = [
    { href: "/", name: "Home" },
    { href: "/", name: "Portfolio" },
    { href: "/", name: "About" },
    { href: "/", name: "Contact" },
  ]
  return (
    <>
      <header className="absolute top-5 z-50 bg-transparent ">
        <nav className=" h-12 md:h-15 p-1 md:mx-13 lg:mx-10 xl:mx-20 2xl:mx-60 rounded-4xl bg-black/20 shadow-2xl shadow-black text-[18px] font-serif max-sm:w-xs max-md:w-xl max-lg:w-166 max-xl:w-236 max-2xl:w-7xl 2xl:w-360">
          <ul className=" hidden md:flex justify-around h-13 items-center md:text-xl">
            {navBar.map((v, i) => (
              <li key={i} ><a
                href={v.href}
                className=" h-1 pb-3 px-2 text-white hover:text-white font-cormorant  md:text-lg lg:text-xl transition-discrete ease-in-out duration-80 hover:border-b-4 border-red-500"
              >
                {v.name}
                {v.image && (
                  <img
                    src={v.image}
                    alt="logo"
                    className="h-30 w-auto p-0 hover:border-none border-black.  "
                  />
                )}
              </a></li>
            ))}
          </ul>
          <ul className=" md:hidden h-10 flex justify-between items-center mx-2.5">
            <li>
              <img src={Img} alt="Logo" className="h-15 w-auto" />
            </li>
            <li className="text-white text-[26px] w-7" onClick={togglemenu}>
              {
                open ?<RxCross2 />:<CiMenuBurger />
              }
            </li>
          </ul>
          {
              open &&(
                <ul className="px-5 pt-2 h-fit w-screen text-white flex flex-col gap-1.5 text-end justify-end duration-300 transition-all">
                  {
                    mobileNav.map((v,i)=>(
                      <li key={i} className="">
                        <a  href={v.href}>{v.name}</a>
                      </li>
                    ))
                  }
                </ul>   
              )
            }
        </nav>
      </header>
    </>
  );
}

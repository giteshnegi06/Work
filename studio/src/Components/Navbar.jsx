import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Img from "../Images/logo.png";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navBar = [
    { href: "/", name: "Home", type: "text" },
    { href: "/", name: "Portfolio", type: "text" },
    { href: "/", image: Img, type: "image" }, // Added type property
    { href: "/aboutUs", name: "About Us", type: "text" },
    { href: "/", name: "Contact", type: "text" },
  ];
  
  const [isOpen, setIsOpen] = useState(false); // Better variable name
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const mobileNav = [
    { href: "/", name: "Home" },
    { href: "/", name: "Portfolio" },
    { href: "/aboutUs", name: "About Us" },
    { href: "/", name: "Contact" },
  ];

  return (
    <>
      <div className="flex justify-center">
        <header className="absolute top-5 2xl:top-10 z-50 bg-transparent">
          <nav className="h-12 md:h-15 p-1 md:mx-2 lg:mx-8 xl:mx-12 2xl:mx-40 rounded-4xl bg-black/20 shadow-2xl shadow-black text-[18px] font-serif w-screen md:w-188 lg:w-240 xl:w-300 2xl:w-300">
            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-around h-13 items-center md:text-xl md:mx-3">
              {navBar.map((v, i) => (
                <li key={i}>
                  {v.type === "image" ? (
                    // Render only image for the logo item
                    <Link to={v.href}>
                      <img
                        src={v.image}
                        alt="logo"
                        className="h-30 w-auto p-0 hover:border-none border-black"
                      />
                    </Link>
                  ) : (
                    // Render text for other items
                    <Link
                      to={v.href}
                      className="h-1 pb-3 px-2 text-white hover:text-white font-cormorant md:text-lg lg:text-xl transition-discrete ease-in-out duration-80 hover:border-b-4 border-red-500"
                    >
                      {v.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Header */}
            <ul className="md:hidden h-10 flex justify-between items-center mx-3">
              <li>
                <img src={Img} alt="Logo" className="h-15 w-auto" />
              </li>
              <li className="text-white text-[26px] w-7" onClick={toggleMenu}>
                {isOpen ? <RxCross2 /> : <CiMenuBurger />}
              </li>
            </ul>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <ul className="md:hidden px-3 pt-2 h-fit w-auto text-white flex flex-col gap-1.5 text-end justify-end duration-300 transition-all">
                {mobileNav.map((v, i) => (
                  <li key={i}>
                    <Link to={v.href} onClick={toggleMenu}>
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </header>
      </div>
    </>
  );
}